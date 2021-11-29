# You're walking down a long straight road at night, illuminated by street lights, and you're wondering how many of the lights are actually required to light up the whole street.
#
# Let's represent the street as a number line, going from 0 to n (inclusive). Each street light has a different location (represented as an integer on the number line) and light radius (an integer representing how far the light shines in either direction).
#
# Given n and lights, an array of 2-element arrays of the form [location, radius], your task is to find the minimum number of these lights required to light up the whole street. Return -1 if it's not possible to light the whole street with the given set of lights.
#
# Note: Each radius includes its own border; in other words, each light covers the inclusive interval [location - radius, location + radius].
#
# Example
#
# For n = 10 and lights = [[0, 5], [1, 3], [5, 4], [8, 3]], the output should be streetLights(n, lights) = 2.
#
# example 1
#
# lights[0] and lights[3] illuminate the whole street (segment [0, 10]).
# There's no way to light the whole street with fewer than 2 lights, so the answer is 2.
# For n = 9 and lights = [[5, 3]], the output should be streetLights(n, lights) = -1.
#
# example 2
#
# It's not possible to light the whole street with this single light, because it lights only the segment [2, 8] and does not light the segments [0, 2) or (8, 9].
#
# For n = 8 and lights = [[2, 3], [8, 2]], the output should be streetLights(n, lights) = -1.
#
# example 3
#
# The lights don't cover the space between points 5 and 6, and thus don't cover the whole segment [0, 10].
#
# For n = 10 and lights = [[0, 5], [1, 3], [5, 4]], the output should be streetLights(n, lights) = -1.
#
# example 4
#
# There are no lights to cover the rightmost segment of the street from 9 to 10.
#
# Input/Output
#
# [execution time limit] 4 seconds (py3)
#
# [input] integer n
#
# The length of the street.
#
# Guaranteed constraints:
# 1 ≤ n ≤ 106.
#
# [input] array.array.integer lights
#
# An array of 2-element arrays representing the street lights - lights[i][0] represents the light's position, and lights[i][1] represents the radius of the light.
#
# Guaranteed constraints:
# 1 ≤ lights.length ≤ 105,
# lights[i].length = 2,
# 0 ≤ lights[i][0] ≤ n,
# 1 ≤ lights[i][1] ≤ 500.
#
# [output] integer
#
# The minimal number of lights needed to light the whole street.
def streetLights(n, lights):
