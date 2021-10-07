# # iterative solution in O(n) time and O(1) space
# def fib(N):
#     """
#     get the Nth fib number
#     """
#     if N <= 1:
#         return N
#     a, b = 0, 1
#     for _ in range(N - 1):
#         a, b = b, a + b
#     return b


# # recursive solution in o(2^n) time
# def fib(N):
#     if N <= 2:
#         f = 1
#     else:
#         f = fib(N - 1) + fib(N - 2)
#     return f


# Dynamic programing (memoized DP)
def fib(N):
    """
    Avoid redoing the something over and over and store any Fib in a dictionary
    to not do it again
    Time: o(n)
    """
    memo = {}
    if N in memo:
        return memo[N]
    if N <= 2:
        f = 1
    else:
        f = fib(N - 1) + fib(N - 2)
    memo[N] = f
    return f


print(fib(5))
