# GETTERS AND SETTERS
#
# Create a class named "ValueHolder". On the class, create:
# * A constructor that takes self and one argument and sets the value of the
#   value holder to the value passed in
# * A getter property named "value" that returns the value of the object
# * A setter property named "value" that will only set the value of the object
#   if the provided value is not None
#
# Test data is below.

# WRITE YOUR CODE HERE


# Test data
o = ValueHolder("boop")
print(o.value)  # > "boop"

o.value = 2
print(o.value)  # > 2

o.value = None
print(o.value)  # > 2
