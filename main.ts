input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(90)
    servo_angle = 90
    basic.showNumber(servo_angle)
    servos.P0.stop()
    basic.pause(1000)
})
let servo_angle = 0
servos.P0.setAngle(0)
servo_angle = 0
basic.showNumber(servo_angle)
servos.P0.stop()
loops.everyInterval(1000, function () {
    if (input.acceleration(Dimension.X) > 0) {
        servo_angle = 180
    }
    if (input.acceleration(Dimension.X) < 0) {
        servo_angle = 0
    }
    servos.P0.setAngle(servo_angle)
})
