cuteBot.stopcar()
radio.setGroup(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("double", 80)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("right", 66)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("left", 66)
    } else {
        radio.sendNumber(0)
    }
})
