# You are given an array of integers and an integer. Write a function that moves
# all instances of that integer in the array to the end of the array. The function
# should perform this in place and does not need to maintain the order of the other integers.
#
# Sample input: [2, 1, 2, 2, 2, 3, 4, 2], 2
#
# Sample output: [1, 3, 4, 2, 2, 2, 2, 2] (the numbers 1, 3, and 4 could be ordered differently)


def moveElementToEnd(array, toMove):
    # Write your code here.
    left = 0
    right = len(array) - 1

    while left < right:
        if array[right] == toMove:
            right -= 1
            continue

        if array[left] == toMove:
            array[left], array[right] = array[right], array[left]
            right -= 1

        left += 1

    return array
