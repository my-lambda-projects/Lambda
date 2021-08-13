# Arithmetic in Python
# - numeric types: integer and float
# - add, subtract, multiply => notice numeric types of results
# - powers, division
# - integer division & modulo teaming up
# - warning: watch for rounding errors

x = 25  # integer
y = 17.0  # float

# print(x)
# print(y)

# print(x + y)
# print(x - y)

# print(x * y)
# print(x / y)

# print(x // y) # integer division
# print(x % y) # modulo

# print(f'The result is {int(x // y)} remainder {int(x % y)}')

# print(x ** 2)
# print(y ** 2)

# x = 25
# y = 17.6

# # rounding errors due to floats
# # we can cast to int, round(num, digits), etc.
# print(x * y)
# print(int(x * y))
# print(round(x * y, 2))

# Casting will truncate (floor) our float
print(int(17.2))
print(int(17.9))
