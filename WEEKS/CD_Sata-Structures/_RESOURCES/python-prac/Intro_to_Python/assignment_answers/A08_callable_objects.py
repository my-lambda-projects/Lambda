""" Assignment 8

1. Write a function that will return True if the passed-in number is even,
and False if it is odd.
2. Write a second function that will call the first with values 0-6 and print
each result on a new line.
3. Invoke the second function.

The signature of the first function should be: `is_even(num: int) -> bool`
The signature of the second function should be: `test_is_even() -> None` """


# Answer
def is_even(num: int) -> bool:
    return num % 2 == 0


def test_is_even() -> None:
    for i in range(7):
        print(is_even(i))


test_is_even()
