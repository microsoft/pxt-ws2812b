namespace ws2812b {
    //% shim=light::sendWS2812Buffer
    export function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    //% shim=light::setMode
    export function setBufferMode(pin: DigitalPin, mode: number) {

    }

    export const BUFFER_MODE_RGB = 1
    export const BUFFER_MODE_RGBW = 2
    export const BUFFER_MODE_RGB_RGB = 3
    export const BUFFER_MODE_AP102 = 4
}
