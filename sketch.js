let angle = 0
let spoke_angle = 0
let pedal_angle = 0
let foot_angle = 0
let wheel_radius = 50
let wheel_diameter = wheel_radius*2
let front_wheel = {centerX : 330, centerY: 350}
let rear_wheel = {centerX : 150, centerY: 350}
let bicycle_color = {r : 21, g: 124, b: 248}
let frame_color = {h : 213, s: 92, b: 97}

var stars = [];


function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
  colorMode(HSB)
  for (var i = 0; i < 50; i++) {
    stars.push(new Star());
}
}

function draw() {
  background(200, 75, 80)

  draw_sky()

  draw_scenery()

  draw_bicycle()
  draw_border()
  console.log(mouseX, mouseY)
}

  function draw_sky()
  {
    push()
    colorMode(RGB)
    var night_sky = color(30, 52, 102)
    var day_sky = color(50, 153, 204)

    setGradient(0,0, map(mouseX, 0, 500, 0, 1000), 500, night_sky, day_sky, "X")

      for (var i = 0; i < 50; i++) {
        if (stars[i].x <= mouseX) {
          stars[i].draw();
        }
      }
    pop()
  }

function Star() {
  this.x = random(500);
  this.y = random(300);
}
Star.prototype.draw = function() {
  noStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, 2, 2)
  this.x += (random(2) - 1);
  this.y += (random(2) - 1);
}

function draw_border()
{
  push()
  stroke(48, 100, 100)
  strokeWeight(20)
  noFill()
  rect(0, 0, 500, 500)
  pop()
}

function draw_scenery()
{
  push()
  noStroke()
  fill(90, 79, map(mouseX, 0, 500, 70, 35))
  triangle(0, 275, 240, 40, 500, 275)
  triangle(0, 275, 42, 183, 100, 270)
  triangle(460, 170, 500, 275, 400, 250)
  triangle(430, 138, 500, 275, 400, 250)
  rect(0, 275, 500, 225)
  fill(0, 0, map(mouseX, 0, 500, 100, 45))
  triangle(173, 104, 240, 40, 315, 107)
  pop()
}

function draw_bicycle()
{
  //back wheel
  draw_wheel(rear_wheel.centerX, rear_wheel.centerY)
  draw_spokes(rear_wheel.centerX, rear_wheel.centerY)

  //front wheel
  draw_wheel(front_wheel.centerX, front_wheel.centerY)
  draw_spokes(front_wheel.centerX, front_wheel.centerY)

  draw_frame()

  draw_pedal()
}

function draw_spokes(translate_x, translate_y)
{
  push()
  stroke(0.5)
  translate(translate_x, translate_y)
  //spokes
  rotate(spoke_angle)
  line(0,0, 50, 0)
  for (var i = 15; i < 360; i+=15) {
    rotate(15)
    line(0,0, 50, 0)
  }

  //aura lights
  if (mouseX < 20) {
    colorMode(RGB)
    fill(245, 44, 44, 0)
  } else if (mouseX < 350) {
    fill(0, 82, 96)
  } else {
    fill(0, 0, 100)
  }

  noStroke()
  rect(42, 5, 5, 5, 20)
  for (var i = 60; i < 360; i+=60) {
    rotate(60)
    rect(42, 2, 5, 5, 20)
  }
  spoke_angle += map(mouseX, 0, 500, 0, 20)
  pop()
}

function draw_wheel(translate_x, translate_y) {
  push()
  translate(translate_x, translate_y)
  //outer tyre
  noFill()
  stroke(0)
  strokeWeight(6)
  //inner tyre
  circle(0, 0, wheel_diameter)
//  draw_spokes()
  pop()
}

function draw_pedal()
{
  push()
  translate(225, 355)
  strokeWeight(0.1)
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  circle(0, 0, 35)
  strokeWeight(0.1)
  fill(frame_color.h, frame_color.s, map(mouseX, 0, 500, 97, 50))
  circle(0, 0, 30)
  rotate(pedal_angle)
  stroke(0)
  strokeWeight(0.1)
  fill(0, 0 , 0)
  line(0,0, 12.5, 0)
  rect(12.5, -2.5, 15, 5, 10)
  pedal_angle += map(mouseX, 0, 500, 0, 20)
  circle(0, 0, 5)
  pop()
}

function draw_frame()
{
  push()
  strokeWeight(0.1)

  //handle bar
  push()
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  translate(293, 243)
  rotate(-10)
  rect(-2, -2.5, 8, 1.5)
  pop()
  push()
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  translate(305, 239)
  circle(0, 0, 7)
  pop()
  push()
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  translate(300, 240)
  circle(0, 0, 8)
  pop()


  //upper frame connecting front and rear wheels
  push()
  fill(frame_color.h, frame_color.s, map(mouseX, 0, 500, 97, 50))
  translate(202, 260)
  rotate(-5)
  rect(0, 0, 95, 5)
  pop()

  //frame from pedal
  push()
  colorMode(HSB)
  fill(frame_color.h, frame_color.s, map(mouseX, 0, 500, 97, 50))
  translate(225, 355)
  rotate(-107)
  rect(0, 1, 108, 3.5)
  rect(0, 0, 103, 5)
  rotate(65)
  rect(0, 0, 105, 5)
  pop()

  //frame from front wheel
  push()
  translate(front_wheel.centerX, front_wheel.centerY)
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  circle(0, 0, 15)
  rotate(-110)
  colorMode(HSB)
  fill(frame_color.h, frame_color.s, map(mouseX, 0, 500, 97, 50))
  rect(-2.5, -1.5, 120, 3)
  rect(-2.5, -2.5, 115, 5)
  pop()

  //frame from rear wheel
  push()
  fill(0, 0, 35)
  translate(150, 350)
  circle(0, 0, 20)

  //lower chain
  push()
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  rotate(8)
  rect( 0, 6, 75, 1.5, 20)
  pop()

  //upper chain
  push()
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  rotate(-4)
  rect( 0, -6, 75, 1.5, 20)
  pop()

  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  circle(0, 0, 15)

  push()
  fill(frame_color.h, frame_color.s, map(mouseX, 0, 500, 97, 50))
  rect(-1.25,-1.25, 75, 2.5, 20)
  pop()

  push()
  fill(frame_color.h, frame_color.s, map(mouseX, 0, 500, 97, 50))
  rotate(-60)
  rect(-1.25,-1.25, 100, 2.5, 20)
  pop()

  circle(0, 0, 3)
  pop()

  //seat
  push()
  fill(0, 0, map(mouseX, 0, 500, 43, 30))
  translate(197, 253)
  rect(-15, -5, 30, 5, 15)
  pop()

  pop()
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
