def get_fib(n):

    result = 0
    if n == 0:
        return result

    if n == 1:
        return n
    else:
        result += get_fib(n - 1) + get_fib(n - 2)
        return result


# Test cases
print(get_fib(9))  # 34
print(get_fib(11))  # 89
print(get_fib(0))  # 0
