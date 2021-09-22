let seconds = 0
let player_a_score = 0
let player_b_score = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    if (seconds < 2) {
        seconds += -1
        if (seconds <= 0) {
            basic.showString("STOP CHEATING")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (seconds < 2) {
        seconds += -1
        if (seconds <= 0) {
            basic.showString("STOP CHEATING")
        }
    }
})
function combo_one () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    if (!(input.buttonIsPressed(Button.B)) && led.point(4, 3)) {
        led.stopAnimation()
        player_a_score += 1
        basic.showString("Player A:" + ("" + player_a_score))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (!(input.buttonIsPressed(Button.A)) && led.point(0, 1)) {
            led.stopAnimation()
            player_b_score += 1
            basic.showString("Player B:" + ("" + player_b_score))
        } else {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                `)
            if (!(input.buttonIsPressed(Button.B)) && led.point(4, 1)) {
                led.stopAnimation()
                player_a_score += 1
                basic.showString("Player A:" + ("" + player_a_score))
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . # . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    . . . . .
                    `)
                if (!(input.buttonIsPressed(Button.A)) && led.point(0, 3)) {
                    led.stopAnimation()
                    player_b_score += 1
                    basic.showString("Player B:" + ("" + player_b_score))
                } else {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . # . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . # .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . # .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    if (!(input.buttonIsPressed(Button.B)) && led.point(4, 1)) {
                        led.stopAnimation()
                        player_a_score += 1
                        basic.showString("Player A:" + ("" + player_a_score))
                    } else {
                        basic.showLeds(`
                            . . . . .
                            . . . # .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                        basic.showLeds(`
                            . . . . .
                            . . # . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                        basic.showLeds(`
                            . . . . .
                            . # . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                        basic.showLeds(`
                            . . . . .
                            # . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                        if (!(input.buttonIsPressed(Button.A)) && led.point(0, 1)) {
                            led.stopAnimation()
                            player_b_score += 1
                            basic.showString("Player B:" + ("" + player_b_score))
                        }
                    }
                }
            }
        }
    }
}
basic.forever(function () {
    count = 1
    for (let index = 0; index < count; index++) {
        combo_one()
        player_b_score += 1
    }
})
