radio.setGroup(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("double", 50)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("right", 25)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("left", 25)
    } else {
        radio.sendNumber(0)
    }
})
