/**
#define LIGHTMODE_RGB 1
#define LIGHTMODE_RGBW 2
#define LIGHTMODE_RGB_RGB 3
#define LIGHTMODE_DOTSTAR 4
 */
ws2812b.setBufferMode(DigitalPin.P0, 1)
ws2812b.sendBuffer(hex`ff0000 00ff00 0000ff`, DigitalPin.P0)
