def powerOfTwo(n):
    if n < 1:
        return []
    l = [1]
    i = 1
    while i + i <= n:
        i += i
        l.append(i)
    return l


print(powerOfTwo(10))
