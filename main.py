player_a_score = 0
player_b_score = 0
count = 0

def combo_one():
    global player_a_score, player_b_score
    basic.show_leds("""
        . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . #
                . . . . .
    """)
    if not (input.button_is_pressed(Button.B)) and led.point(4, 3):
        led.stop_animation()
        player_a_score += 1
        basic.show_string("Player A:" + ("" + str(player_a_score)))
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . # .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        if not (input.button_is_pressed(Button.A)) and led.point(0, 1):
            led.stop_animation()
            player_b_score += 1
            basic.show_string("Player B:" + ("" + str(player_b_score)))
        else:
            basic.show_leds("""
                . . . . .
                                . # . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            basic.show_leds("""
                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            basic.show_leds("""
                . . . . .
                                . . . # .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            basic.show_leds("""
                . . . . .
                                . . . . #
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            if not (input.button_is_pressed(Button.B)) and led.point(4, 1):
                led.stop_animation()
                player_a_score += 1
                basic.show_string("Player A:" + ("" + str(player_a_score)))
            else:
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . # .
                                        . . . . .
                                        . . . . .
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . # . .
                                        . . . . .
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # . . .
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        # . . . .
                                        . . . . .
                """)
                if not (input.button_is_pressed(Button.A)) and led.point(0, 3):
                    led.stop_animation()
                    player_b_score += 1
                    basic.show_string("Player B:" + ("" + str(player_b_score)))
                else:
                    basic.show_leds("""
                        . . . . .
                                                . . . . .
                                                . # . . .
                                                . . . . .
                                                . . . . .
                    """)
                    basic.show_leds("""
                        . . . . .
                                                . . # . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    """)
                    basic.show_leds("""
                        . . . # .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    """)
                    basic.show_leds("""
                        . . . # .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    """)
                    basic.show_leds("""
                        . . . . .
                                                . . . . #
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    """)
                    if not (input.button_is_pressed(Button.B)) and led.point(4, 1):
                        led.stop_animation()
                        player_a_score += 1
                        basic.show_string("Player A:" + ("" + str(player_a_score)))
                    else:
                        basic.show_leds("""
                            . . . . .
                                                        . . . # .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        """)
                        basic.show_leds("""
                            . . . . .
                                                        . . # . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        """)
                        basic.show_leds("""
                            . . . . .
                                                        . # . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        """)
                        basic.show_leds("""
                            . . . . .
                                                        # . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        """)
                        if not (input.button_is_pressed(Button.A)) and led.point(0, 1):
                            led.stop_animation()
                            player_b_score += 1
                            basic.show_string("Player B:" + ("" + str(player_b_score)))

def on_forever():
    global count, player_b_score
    count = 1
    for index in range(count):
        combo_one()
        player_b_score += 1
basic.forever(on_forever)
