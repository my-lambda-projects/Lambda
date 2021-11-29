x = 2  # SAVE 2 R0


y = 4  # SAVE 4 R1


add(x, y)  # CALL 11
print("R0")  # PRINT_REG R0

# halt
def add(a, b):
    # ADD R0 R1
    return a + b  # RET


# CALL reg
# RET
# store our variables on the stack
# store our variables in registers R0 R1

# return value can be stored in a register R0
