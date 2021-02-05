let handgebaar = 0
input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.pause(100)
    basic.showString("WIN")
    basic.showNumber(game.score())
})
input.onGesture(Gesture.Shake, function () {
    handgebaar = randint(0, 2)
    if (handgebaar == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (handgebaar == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    game.addScore(-1)
    basic.pause(100)
    basic.showString("LOST")
    basic.showNumber(game.score())
})
