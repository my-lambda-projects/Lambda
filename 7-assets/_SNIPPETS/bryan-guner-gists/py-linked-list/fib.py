def fib_iter(n):

    if n == 0:
        return 0

    if n == 1:
        return 1

    p0 = 0
    p1 = 1

    for i in range(n-1):
        next_val = p0 + p1

        p0 = p1
        p1 = next_val

    return next_val

for i in range(10):
    print(f'{i}: {fib_iter(i)}')
