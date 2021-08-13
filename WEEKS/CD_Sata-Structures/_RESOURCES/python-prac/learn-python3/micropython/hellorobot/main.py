#!/usr/bin/env pybricks-micropython

from pybricks import ev3brick as brick
from pybricks.ev3devices import (
    Motor,
    TouchSensor,
    ColorSensor,
    InfraredSensor,
    UltrasonicSensor,
    GyroSensor,
)
from pybricks.parameters import (
    Port,
    Stop,
    Direction,
    Button,
    Color,
    SoundFile,
    ImageFile,
    Align,
)
from pybricks.tools import print, wait, StopWatch
from pybricks.robotics import DriveBase

# Write your program here
brick.sound.beep()
# :
print("Hello, robot!")
# EV3:
brick.display.text("Hello, robot!")
