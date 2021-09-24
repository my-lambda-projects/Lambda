scale = 1.1


def make_mul(n):
    def mul(val):
        out = val * n * scale  # <1>
        return out  # <2>

    return mul


mul7 = make_mul(7)
print(mul7(3))  # 23.1
