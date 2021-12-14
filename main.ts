radio.setGroup(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("double", 50)
        basic.showArrow(ArrowNames.North)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("right", 25)
        basic.showArrow(ArrowNames.East)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("left", 25)
        basic.showArrow(ArrowNames.West)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
})
