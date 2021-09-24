# https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


def adjacent_elements_product(inputArray: list = None) -> int:
    if inputArray is None:
        return 0
    if isinstance(inputArray, list) and 2 <= len(inputArray) <= 10:
        adjacent = inputArray[0] * inputArray[1]
        for i in range(len(inputArray) - 1):
            if -1000 <= inputArray[i] <= 1000 and -1000 <= inputArray[i + 1] <= 1000:
                tmp = inputArray[i] * inputArray[i + 1]
                if tmp > adjacent:
                    adjacent = tmp
            else:
                return 0
        return adjacent
    return 0
