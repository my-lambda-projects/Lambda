# CLASS DECLARATION
#
# Declare a class named "Airport" with the following features:
#
# * A constructor that takes two values: a name and an abbreviation
# * A method named "plane_arrives" that increases the number of planes parked at
#   the airport by 1.
# * A method named "plane_departs" that decreases the number of planes parked at
#   the airport by 1
# * A method named "get_number_of_planes" that returns the current number of
#   planes parked at the airport. That number should be 0 when the object is
#   first created.
# * A method named "__repr__" that returns a string with the following format:
#
#     "<{airport abbreviation} {number of planes at the airport}"
#
#   An example would be "<LAX 12>"

# WRITE YOUR CODE HERE
class Airport:
    def __init__(self, name, abbr):
        self._name = name
        self._abbr = abbr
        self._parked_planes = 0

    def plane_arrives(self):
        self._parked_planes += 1

    def plane_departs(self):
        self._parked_planes -= 1

    def get_number_of_planes(self):
        return self._parked_planes

    def __repr__(self):
        return f"<{self._abbr} {self._parked_planes}>"
