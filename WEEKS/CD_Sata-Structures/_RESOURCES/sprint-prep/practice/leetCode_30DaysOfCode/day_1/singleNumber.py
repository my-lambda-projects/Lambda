from collections import Counter


def singleNumber(nums):
    """
    given a list of integer with every element appears twice and a single number appears once, return the value of the
    single number
    """
    count = Counter(nums)
    for k, v in count.items():
        if v == 1:
            return k


print(singleNumber([2, 2, 4, 1, 5]))
