# Given a value (a) and an exponent (b), compute the value of a^b


def power(a, b):
    # set a initial result ( base case => 1 )
    result = 1
    while b > 0:
        result = result * a
        b -= 1
    return result


def power_r(a, b):
    # check for errors
    try:
        _ = int(b)
    except ValueError:
        print("Exponent (b) must be an integer")
        return

    if b == 0:
        return 1
    elif b > 0:
        return a * power_r(a, b - 1)  # O(n)
    else:
        # do something
        return 1 / (a * power_r(a, -b - 1))  # O(n)
        # return 1 / power_r(a, -b)


# 1 / 2 => 0.5
# 1/4 => 0.25
# 1/8 => 0.125

# tests
print("Iterative")
print(power(4, 2))  # => 16
print(power(8, -1))  # => 0.125
print(
    power(2, "supercalafragialisticexpialodocious")
)  # => Exponent (b) must be and integer
print("Recursive")
print(power_r(4, 2))  # => 16
print(power_r(8, -1))  # => 0.125
print(
    power_r(2, "supercalafragialisticexpialodocious")
)  # => Exponent (b) must be and integer
