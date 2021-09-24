# Compute the Factorial of a given value (n!)

# multiply all whole numbers from our chosen number
# down to 1.

# 4! = 4 * 3 * 2 * 1
# 1 * 1 = 1
# 1 * 2 = 2
# 2 * 3


# iterative approach
def fact_i(n):
    # set a end point fact initial value
    fact = 1
    # loop from 1 to n+1 using an index
    for i in range(1, n + 1):
        # set fact to fact multiplied by index
        fact = fact * i

    # return fact
    return fact


print(fact_i(4))

# recursive
def rec_fact(n):
    # base case
    if n <= 1:
        return 1
    else:
        # call rec_fact on n - 1
        # return n multiplied by rec_fact of n - 1
        return n * rec_fact(n - 1)


print(rec_fact(4))
