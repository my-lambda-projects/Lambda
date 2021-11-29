import time


def A(s):
    if len(s) < 2:
        return s
    else:
        return (
            A([x for x in s[1:] if x < s[0]])
            + [s[0]]
            + A([x for x in s[1:] if x >= s[0]])
        )


# start = time.clock()
# test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
# print(A(test))
# end = time.clock()

# print(end-start)

test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
times = []

for i in range(1000):
    start = time.clock()
    A(test)
    end = time.clock()
    times.append(end - start)

average = sum(times) / len(times)
print(average)
