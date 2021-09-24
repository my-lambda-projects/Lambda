"""
Naive Recursive Fibonacci
Key Points
    * You're probably going to get tired of seeing Fibonacci.  It's like fizzbuzz; you're expected to know it by heart
    * It's also useful; you can solve many combination/permutation problems with similar code
    * This is an example of a naive approach - solving the problem with the first thing that comes to mind that's simple, or even child-like
the Fibonacci sequence is well known and shows up regularly in nature, math, and fiction.
It's calculated simply by starting with 0 and 1, then adding the last two numbers together to get the next one:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
If we dig in a little deeper, we can see how recursion might be an excellent way to solve this.  What's the 10th Fibonacci number?
It's the 9th Fibonacci number plus the 8th.
What's the 9th?  Well, it's the 8th plus the 7th, and so on.
Eventually, we arrive at the 0th and 1st numbers, which are defined as 0 and 1.  Because this is the smallest version of the problem, 
with an arbitrary or defined answer, this is the base case.
We can use this understanding to plan our approach via pseudocode:
"""

# base case ?


def fibn(n):  # label
    # condition (base case)
    if n == 0:
        return 0
    if n == 1:
        return 1

    # body decrement
    # return the recursive call to fib n on n-1 and add it to the fib of n on n - 2
    return fibn(n - 1) + fibn(n - 2)


print(fibn(40))
