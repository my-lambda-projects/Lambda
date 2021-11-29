def rec_bin(n):
    if n == 0:
        return ""

    else:
        return str(n % 2) + rec_bin(n // 2)


print(rec_bin(20))

print(bin(20)[2:])
