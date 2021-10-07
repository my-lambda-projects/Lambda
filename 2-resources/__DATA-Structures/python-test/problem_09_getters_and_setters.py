# GETTERS AND SETTERS
#
# Create a class named "BetweenOneAndTen". On the class, create:
# * A constructor that takes no arguments (except self) and sets the initial
#   value of the object to 1
# * A getter property named "value" that returns the value of the object
# * A setter property named "value" that will only set the value of the object
#   if the provided value is greater than or equal to 1 and less than or equal
#   to 10.
#
# Test data is below.

# WRITE YOUR CODE HERE
class BetweenOneAndTen:
    def __init__(self):
        self._value = 1

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, value):
        self._value = value if value >= 1 and value <= 10 else self._value


# Test data
o = BetweenOneAndTen()
print(o.value)  # > 1

o.value = 2
print(o.value)  # > 2

o.value = 30
print(o.value)  # > 2
