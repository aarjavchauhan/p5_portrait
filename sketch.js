let angle = 0
let spoke_angle = 0
let wheel_radius = 50
let wheel_diameter = wheel_radius*2

function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
}

function draw() {
   background(256)

   //front wheel
   draw_wheel(150, 350)

   //back wheel
   draw_wheel(350, 350)

   draw_pedal()
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
  rect(50, 5, 5, 5, 20)
  for (var i = 60; i < 360; i+=60) {
    rotate(60)
    rect(50, 5, 5, 5, 20)
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
  translate(225, 350)
  circle(0, 0, 30)
  pop()
}
