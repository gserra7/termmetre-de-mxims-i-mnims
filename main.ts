input.onButtonPressed(Button.A, function () {
    basic.showNumber(minTemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maxTemp)
})
let minTemp = 0
let maxTemp = 0
let currentTemp = input.temperature()
maxTemp = currentTemp
let maxTime = control.eventTimestamp()
minTemp = currentTemp
let minTime = control.eventTimestamp()
basic.forever(function () {
    basic.showString(".")
    currentTemp = input.temperature()
    if (currentTemp < minTemp) {
        minTemp = currentTemp
        minTime = control.eventTimestamp()
    }
    if (currentTemp > maxTemp) {
        maxTemp = currentTemp
        maxTime = control.eventTimestamp()
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
