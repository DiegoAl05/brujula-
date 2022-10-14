for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Heart)
}
basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.North)
        music.playMelody("C5 B A G F E D C ", 200)
    }
    if (input.compassHeading() > 1 && input.compassHeading() < 89) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (input.compassHeading() == 90) {
        basic.showArrow(ArrowNames.East)
        music.playMelody("E B C5 A B G A F ", 200)
    }
    if (input.compassHeading() > 91 && input.compassHeading() < 179) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.South)
        music.playMelody("C D E F G A B C5 ", 200)
    }
    if (input.compassHeading() > 181 && input.compassHeading() < 269) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (input.compassHeading() == 270) {
        basic.showArrow(ArrowNames.West)
        music.playMelody("G B A G C5 B A B ", 200)
    }
    if (input.compassHeading() > 271 && input.compassHeading() < 359) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
