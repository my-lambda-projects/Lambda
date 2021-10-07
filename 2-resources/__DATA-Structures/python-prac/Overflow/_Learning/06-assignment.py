# Assignment Operators in Python
# - Increment (no postfix/prefix)
# - Powers and Integer division
# - Big Numbers
# - Stopping a runaway process (control+c)

i = 1
# i++ does not exist in Python, we have to use i += 1
i += 1
print(i)  # > 2

i += 4
print(i)  # > 6

i **= 2
print(i)  # > 36

i //= 10
print(i)  # > 3

i *= 10 ** 200
print(i)  # > 3 followed by 200 0s (all written out)

print(float(i))  # > 3e+200 (floats are written in scientific notation)

i = 3
i **= 10 ** 200
print(i)  # runaway process! control+c triggers a KeyboardInterrupt to stop it
