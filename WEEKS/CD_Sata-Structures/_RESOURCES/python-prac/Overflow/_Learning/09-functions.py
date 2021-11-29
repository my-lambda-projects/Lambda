# Make an xor function
# Truth table
# | left  | right | Result |
# |-------|-------|--------|
# | True  | True  | False  |
# | True  | False | True   |
# | False | True  | True   |
# | False | False | False  |
# def xor(left, right):
#   return left != right

xor = lambda left, right: left != right

print(xor(True, True))  # > False
print(xor(True, False))  # > True
print(xor(False, True))  # > True
print(xor(False, False))  # > False


def print_powers_of(base, exp=1):
    i = 1
    while i <= exp:
        print(base ** i)
        i += 1


# We are not hoisting the function declaration, we need to invoke after declared
print_powers_of(15)
print_powers_of(exp=6, base=7)
print_powers_of(2, 5)
print_powers_of(3, 5)
print_powers_of(10, 5)

if True:
    x = 10

print(x)
print(i)
