cuteBot.stopcar()
radio.setGroup(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("double", 80)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("right", 66)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("left", 66)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        radio.sendValue("double", -40)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        radio.sendValue("right", -33)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        radio.sendValue("left", -33)
    } else {
        radio.sendNumber(0)
    }
})
