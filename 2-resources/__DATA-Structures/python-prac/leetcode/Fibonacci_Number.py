# Fibonacci Number
# 0 1 1 2 3 5 8 13 21 .....
# find 6th number in Fibonacci series which is 8


def fib(n):
    a = 0
    b = 1

    if n == 0:
        return a
    elif n == 1:
        return b

    for i in range(2, n + 1):
        value = a + b

        a = b
        b = value

    return value


if __name__ == "__main__":
    print("The fibonacci number at 6th place is : " + str(fib(8)))
