"""
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift).
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.
"""
from collections import deque


def stringShift(s, shift_arr):
    """
    stringShift takes in a string and performs a list of rotations to it
    :param s: an input string
    :param shift_arr: an array of all shift operations to be performed to the string
    :return: return the final string after rotation
    """
    # # solution_1 loop through all shift operations and perform them
    # # timeComplexity: O(n * m) where m is the number of operations
    # dq = deque(s)
    # for shift in shift_arr:
    #     dq.rotate((2*shift[0] - 1) * shift[1])
    # return "".join(dq)

    # solution_2: loop through all operations and get one shift to perform
    # timeComplexity: O(1)
    dq = deque(s)
    final_shift = [0, 0]
    for shift in shift_arr:
        if shift[0] == final_shift[0]:
            final_shift[1] += shift[1]
        else:
            if shift[1] > final_shift[1]:
                final_shift[0] = shift[0]
                final_shift[1] = shift[1] - final_shift[1]
            elif shift[1] < final_shift[1]:
                final_shift[1] -= shift[1]
            else:
                final_shift = [0, 0]

    dq.rotate((2 * final_shift[0] - 1) * final_shift[1])
    return "".join(dq)


print(stringShift("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]]))
