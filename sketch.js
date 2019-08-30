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
   draw_front_wheel()
   draw_rear_wheel()

}

function draw_front_wheel() {
   push()
   translate(150, 350)
   //outer wheel
   circle(0, 0, 110)
   //inner wheel
   circle(0, 0, wheel_diameter)
   draw_spokes()
   pop()
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

function draw_rear_wheel() {
   push()
   translate(350, 350)
   //outer wheel
   circle(0, 0, 110)
   //inner wheel
   circle(0, 0, wheel_diameter)
   draw_spokes()
   pop()
}
