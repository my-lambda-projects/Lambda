l1 = [1, 3, 5, 7, 9]  # list mutable (read write)
t1 = (1, 3, 5, 7, 9)  # tuple imutable (read only)


def f(x):
    x.append(29)


f(l1)
print(l1)
f(t1)
print(t1)
