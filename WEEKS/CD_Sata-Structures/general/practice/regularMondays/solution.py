from calendar import weekday as w


def regularMonths(c):
    m, y = map(int, c.split("-"))
    while y:
        for m in range(m + 1, 12 + 1):
            if w(y, m, 1) == 0:
                return f"{str(m).zfill(2)}-{y}"
        m, y = 0, y + 1


print(regularMonths("07-2024"))
