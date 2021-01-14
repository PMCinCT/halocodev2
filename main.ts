input.onGesture(Gesture.Shake, function () {
    ColorMode += 1
    if (ColorMode == 5) {
        ColorMode = 0
    }
})
let ColorMode = 0
let Halo = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
ColorMode = 0
Halo.setBrightness(255)
Halo.showRainbow(1, 360)
basic.forever(function () {
    if (ColorMode == 0) {
        Halo.rotate(1)
    }
    if (ColorMode == 1) {
        Halo.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (ColorMode == 2) {
        Halo.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (ColorMode == 3) {
        Halo.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (ColorMode == 4) {
        Halo.showRainbow(1, 360)
    }
    Halo.show()
    basic.pause(100)
})
control.inBackground(function () {
    while (true) {
        basic.showString("Digikey")
        basic.showIcon(IconNames.Heart)
        basic.showString("'s Makerfaire!")
    }
})
