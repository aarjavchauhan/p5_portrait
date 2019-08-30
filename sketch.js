let angle = 0
let spoke_angle = 0

function setup() {
  createCanvas(500, 500)
  wheel_radius = 50
  wheel_diameter = wheel_radius*2
  inner_wheel_diameter = 80
  angleMode(DEGREES)
}

function draw() {
   background(110)
   draw_front_wheel()
   draw_rear_wheel()
}

function draw_front_wheel() {
   push()
   translate(150, 350)
   circle(0, 0, wheel_diameter)
   draw_spokes()
   spoke_angle++
   pop()
}

function draw_spokes()
{
  rotate(spoke_angle)
  line(0,0, 50, 0)
  rotate(90)
  line(0,0, 50, 0)
  rotate(180)
  line(0,0, 50, 0)
  rotate(270)
  line(0,0, 50, 0)
}

function draw_rear_wheel() {
   push()
   translate(350, 350)
   circle(0, 0, wheel_diameter)
   pop()
}
