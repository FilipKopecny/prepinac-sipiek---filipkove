input.onSound(DetectedSound.Loud, function () {
    if (smer == 0) {
        smer = 1
    } else {
        if (smer == 1) {
            smer = 2
        } else {
            if (smer == 2) {
                smer = 3
            } else {
                if (smer == 3) {
                    smer = 0
                }
            }
        }
    }
})
let smer = 0
smer = 0
basic.forever(function () {
    if (smer == 0) {
        basic.showArrow(ArrowNames.North)
    }
    if (smer == 1) {
        basic.showArrow(ArrowNames.East)
    }
    if (smer == 2) {
        basic.showArrow(ArrowNames.South)
    }
    if (smer == 3) {
        basic.showArrow(ArrowNames.West)
    }
})
