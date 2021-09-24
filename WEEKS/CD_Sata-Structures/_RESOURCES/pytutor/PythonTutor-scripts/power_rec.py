def recPowerSlow(x, n):
    if n == 0:
        return 1
    if n < 0:
        return 1 / (recPowerSlow(x, -n))
    else:
        return x * recPowerSlow(x, n - 1)


print("expected output:", pow(4, 3))
print("actual output:", recPowerSlow(4, 3))
