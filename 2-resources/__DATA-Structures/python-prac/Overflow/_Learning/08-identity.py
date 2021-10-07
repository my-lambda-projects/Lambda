# Identity vs. Equality
# - is vs. ==
# - working with literals
# - isinstance()

a = 1
b = 1.0
c = "1"

print(a == b)
print(a is b)

print(c == "1")
print(c is "1")

print(b == 1)
print(b is 1)

print(b == 1 and isinstance(b, int))
print(a == 1 and isinstance(a, int))

# d = 100000000000000000000000000000000
d = float(10)
e = float(10)

print(id(d))
print(id(e))
print(d == e)
print(d is e)

b = int(b)
print(b)
print(b == 1 and isinstance(b, int))

print(a)
print(float(a))
print(str(a))

print(str(a) is c)
print(str(a) == c)
