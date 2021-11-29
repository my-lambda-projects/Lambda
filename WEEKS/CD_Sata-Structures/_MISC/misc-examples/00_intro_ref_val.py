# Passing by value Vs passing by Ref
import time
import statistics

# printf
# % is an unamed variable
# imagine we gave them names
# the first one was A and the second was B
# A = 3.45
# B = 4.675
print("%.2f   A   %.3f" % (3.45454545, 4.67564))

x = 5
y = 7

a = "5"
b = "7"
"57"
print(str(x).__add__(y))


# define a doubling function that passes args by value
# 2352352 #
# a = 3
# b =>>>>  @23423542 # [1, 2, 3]
# b = 23423542


def mult2(x):
    return x * 2


# define a doubling function that passes args by reference
def mult2_list(l):
    for i in range(len(l)):
        l[i] *= 2


# # try out the functions
a = 12
a = 34
b = 12

new_number = mult2(a)
print(new_number)

lst = [2, 4, 6, 8]  # mutable
mult2_list(lst)

for num in lst:
    print(num)
