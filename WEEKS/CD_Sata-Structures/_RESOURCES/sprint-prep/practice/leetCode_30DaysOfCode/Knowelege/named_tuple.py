from math import sqrt
from collections import namedtuple

# using normal tuple to represent color (red, green, blue)
color = (20, 40, 60)
# print the red color
print(color[0])

# use a named tuple for better readability because of the object notation it has
Color = namedtuple("Color", ["red", "green", "blue"])
color = Color(20, 40, 60)
# you can use object notation or indexing to extract data
print(color.red)
print(color[0])

# However, as with tuples, attributes in named tuples are immutable. it has the _replace method to change values
color = color._replace(red=200)

# Named Tuple can be transformed to dict
print(color._asdict())
