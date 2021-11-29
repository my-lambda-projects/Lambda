def my_hash(key):
    sum = 0
    for c in key:
        nc = ord(c)
        sum += nc
    return sum


storage = [None] * 10
h = my_hash("CBA")
print(h)
n = h % len(storage)
print(n)


def put(key, value):
    idx = my_hash(key) % len(storage)
    storage[idx] = value


def get(key):
    idx = my_hash(key) % len(storage)
    return storage[idx]


put("Tom", 41)
# bryan@LAPTOP-9LGJ3JGS:/c/Lambda/CIRRICULUMN/_NOTES/CS-python-notes/WEEKS/wk17/d3$ python3 d3.py
# 198
# 8
# bryan@LAPTOP-9LGJ3JGS:/c/Lambda/CIRRICULUMN/_NOTES/CS-python-notes/WEEKS/wk17/d3$
