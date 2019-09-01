let angle = 0
let spoke_angle = 0
let pedal_angle = 0
let foot_angle = 0
let wheel_radius = 50
let wheel_diameter = wheel_radius*2


function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
}

function draw() {
   background(256)

   //back wheel
   draw_wheel(150, 350)

   draw_frame()

   draw_pedal()

   //front wheel
   draw_wheel(350, 350)


}

function draw_spokes()
{
  //spokes
  rotate(spoke_angle)
  line(0,0, 50, 0)
  for (var i = 15; i < 360; i+=15) {
    rotate(15)
    line(0,0, 50, 0)
  }

  //aura lights
  rect(45, 5, 5, 5, 20)
  for (var i = 60; i < 360; i+=60) {
    rotate(60)
    rect(45, 5, 5, 5, 20)
  }
  spoke_angle++
}

function draw_wheel(translate_x, translate_y) {
  push()
  translate(translate_x, translate_y)
  //outer tyre
  circle(0, 0, 110)
  //inner tyre
  circle(0, 0, wheel_diameter)
  draw_spokes()
  pop()
}

function draw_pedal()
{
  push()
  translate(225, 355)
  circle(0, 0, 35)
  circle(0, 0, 30)
  rotate(pedal_angle)
  stroke(0)
  line(0,0, 20, 0)
  rect(20, -2.5, 20, 5, 10)
  pedal_angle += 2
  circle(0, 0, 5)
  pop()
}

function draw_frame()
{
  push()
  translate(150, 350)
  circle(0, 0, 20)

  //lower chain
  push()
  rotate(8)
  rect( 0, 6, 75, 1.5, 20)
  pop()

  //upper chain
  push()
  rotate(-4)
  rect( 0, -6, 75, 1.5, 20)
  pop()

  circle(0, 0, 15)

  rect(-1.25,-1.25, 75, 2.5, 20)
  circle(0, 0, 3)
  circle()
  pop()
}
