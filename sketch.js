let angle = 0
let spoke_angle = 0
let pedal_angle = 0
let foot_angle = 0
let wheel_radius = 50
let wheel_diameter = wheel_radius*2
let front_wheel = {centerX : 330, centerY: 350}
let rear_wheel = {centerX : 150, centerY: 350}
let bicycle_color = {r : 21, g: 124, b: 248}


function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)

}

function draw() {
   background(255, 0, 0)


   draw_scenery()

   draw_bicycle()
   draw_border()
   console.log(mouseX, mouseY)
}

function draw_border()
{
  push()
  stroke(255, 204, 0)
  strokeWeight(20)
  noFill()
  rect(0, 0, 500, 500)
  pop()
}

function draw_scenery()
{
  push()
  noStroke()
  fill(88, 178, 38)
  triangle(0, 275, 240, 40, 500, 275)
  triangle(0, 275, 42, 183, 100, 270)
  triangle(460, 170, 500, 275, 400, 250)
  triangle(430, 138, 500, 275, 400, 250)
  rect(0, 275, 500, 225)
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
  translate(translate_x, translate_y)
  //spokes
  rotate(spoke_angle)
  line(0,0, 50, 0)
  for (var i = 15; i < 360; i+=15) {
    rotate(15)
    line(0,0, 50, 0)
  }

  //aura lights
  fill(245, 45, 45)
  noStroke()
  rect(42, 5, 5, 5, 20)
  for (var i = 60; i < 360; i+=60) {
    rotate(60)
    rect(42, 2, 5, 5, 20)
  }
  spoke_angle++
  pop()
}

function draw_wheel(translate_x, translate_y) {
  push()
  translate(translate_x, translate_y)
  noFill()
  //outer tyre
//  circle(0, 0, 110)
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
  fill(110)
  circle(0, 0, 35)
  strokeWeight(0.1)
  fill(bicycle_color.r, bicycle_color.g, bicycle_color.b)
  circle(0, 0, 30)
  rotate(pedal_angle)
  stroke(0)
  strokeWeight(0.1)
  fill(0)
  line(0,0, 12.5, 0)
  rect(12.5, -2.5, 15, 5, 10)
  pedal_angle += 2
  circle(0, 0, 5)
  pop()
}

function draw_frame()
{
  push()
  strokeWeight(0.1)

  //handle bar
  push()
  fill(130)
  translate(293, 243)
  rotate(-10)
  rect(-2, -2.5, 8, 1.5)
  pop()
  push()
  fill(130)
  translate(305, 239)
  circle(0, 0, 7)
  pop()
  push()
  fill(130)
  translate(300, 240)
  circle(0, 0, 8)
  pop()


  //upper frame connecting front and rear wheels
  push()
  fill(bicycle_color.r, bicycle_color.g, bicycle_color.b)
  translate(202, 260)
  rotate(-5)
  rect(0, 0, 95, 5)
  pop()

  //frame from pedal
  push()
  fill(bicycle_color.r, bicycle_color.g, bicycle_color.b)
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
  fill(130)
  circle(0, 0, 15)
  rotate(-110)
  fill(bicycle_color.r, bicycle_color.g, bicycle_color.b)
  rect(-2.5, -1.5, 120, 3)
  rect(-2.5, -2.5, 115, 5)
  pop()

  //frame from rear wheel
  push()
  fill(150)
  translate(150, 350)
  circle(0, 0, 20)

  //lower chain
  push()
  fill(110)
  rotate(8)
  rect( 0, 6, 75, 1.5, 20)
  pop()

  //upper chain
  push()
  fill(110)
  rotate(-4)
  rect( 0, -6, 75, 1.5, 20)
  pop()

  fill(110)
  circle(0, 0, 15)

  fill(bicycle_color.r, bicycle_color.g, bicycle_color.b)
  rect(-1.25,-1.25, 75, 2.5, 20)

  push()
  fill(bicycle_color.r, bicycle_color.g, bicycle_color.b)
  rotate(-60)
  rect(-1.25,-1.25, 100, 2.5, 20)
  pop()

  circle(0, 0, 3)
  pop()

  //seat
  push()
  fill(110)
  translate(197, 253)
  rect(-15, -5, 30, 5, 15)
  pop()

  pop()
}
