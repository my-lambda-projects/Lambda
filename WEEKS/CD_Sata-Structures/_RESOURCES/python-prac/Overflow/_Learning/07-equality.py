# Meaning of Truth in Python
# - numeric types equivalent, but not strings
# - conditionals (if, elif, else)
# - truth equivalence

a = 1
b = 1.0
c = "1"

# print(a == b)
# print(a == c)
# print(b == c)

# if (a == c):
#     print("match")
# elif (a == b):
#     print("a matches b")
# else:
#     print("not a match")

a = []
# Falsy Values:
# 0, 0.0, 0j (complex number)
# ''
# False
# None
# []
# ()
# {}
# set()
# range(0)

if a:
    print(f"{a} is true")
else:
    print(f"{a} is false")
