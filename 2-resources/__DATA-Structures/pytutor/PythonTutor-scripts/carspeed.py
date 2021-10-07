"""Write a class named Car that has the following data attribute:
 speed(for the car's current speed)
The Car class should have an __init__ method that initialises(assigns) the speed data attribute to 0.
The class should also have the following methods:
 accelerate
The accelerate method should add 5 to the speed data attribute each time it is called.
 brake
The brake method should subtract 5 from the speed data attribute each time it is called.
 get_speed
The get_speed method should return the current speed.
Write a program that creates a Car object and then calls the accelerate method five times. After each call to
the accelerate method, get the current speed of the car(call the get_speed method) and display it. Then
call the brake method five times. After each call to the brake method, get the current speed of the car and
display it.
"""


class Car:
    def __init__(self, speed=0):
        self.speed = speed

    # methods
    # add 5 to speed every call
    def accelerate(self):
        self.speed = self.speed + 5

    # subtract 5 from speed every call
    def brake(self):
        self.speed = self.speed - 5

    # getter
    def get_speed(self):
        return self.speed


# Initialze the car
car = Car()

# call the speed 5 times
for i in range(5):
    car.accelerate()

print("Current speed after five accelerations:", car.get_speed())

# call the break 5 times
for i in range(5):
    car.brake()

print("Current speed after five breaks:", car.get_speed())
