n = 100
while n > 0:
    print(n)
    n -= 1


def rec_while(n):  # O(n)
    # base case
    if n == 0:
        return
    # logic that we want to do
    print(n)
    rec_while(n - 1)
