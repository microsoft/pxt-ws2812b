# ws2812 [![Build Status](https://travis-ci.org/Microsoft/pxt-ws2812.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-ws2812)

A driver for WS2812B programmable LEDs in MakeCode.

## Usage

The package exposes ``ws2812b.sendBuffer`` that bit-bangs a color buffer for WS2812B LEDs over a pin.

See https://github.com/Microsoft/pxt-neopixel for an example of usage.

## ~ hint
 
**Bluetooth disabled**: This package disables BLE as the real time requirements of the WS2812 conflict with the BLE stack.

## ~

## Simulator support

The ``sendBuffer`` function is supported by the micro:bit simulator!

## License

MIT

## Supported targets

* for PXT/microbit
* for PXT/calliope

(The metadata above is needed for package search.)

