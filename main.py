def on_pin_pressed_p1():
    pass
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

radio.set_group(7)

def on_forever():
    if input.button_is_pressed(Button.AB):
        radio.send_value("double", 50)
        basic.show_arrow(ArrowNames.NORTH)
    elif input.button_is_pressed(Button.B):
        radio.send_value("right", 25)
        basic.show_arrow(ArrowNames.NORTH)
    elif input.button_is_pressed(Button.A):
        radio.send_value("left", 25)
        basic.show_arrow(ArrowNames.NORTH)
    else:
        radio.send_number(0)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # # # .
                        . . . . .
                        . . . . .
        """)
    if cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) < 10:
        cuteBot.stopcar()
        for index in range(10):
            cuteBot.color_light(cuteBot.RGBLights.ALL, 0xff0000)
            basic.pause(25)
            cuteBot.closeheadlights()
            basic.pause(25)
    else:
        pass
    if input.light_level() < 4:
        pass
    else:
        pass
basic.forever(on_forever)
