namespace ws2812b {
    //% shim=sendBufferAsm
    export function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    //% shim=setBufferMode
    export function setBufferMode(pin: DigitalPin, mode: number) {

    }

    export const BUFFER_MODE_RGB = 1
    export const BUFFER_MODE_RGBW = 2
    export const BUFFER_MODE_RGB_RGB = 3
    export const BUFFER_MODE_AP102 = 4
}
