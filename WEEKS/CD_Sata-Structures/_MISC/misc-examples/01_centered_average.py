# Return the "centered" average of an array of ints, which we'll say is the mean average of the values,
# except ignoring the largest and smallest values in the array (list).

# UNDERSTAND
# what do we do if smallest or largest is duplicated
# - we only consider 1 of smallest and 1 of largest to be valid

# what data type are we expecting to return?
# int / float?
# return an int

# centered_average([1, 2, 3, 4, 100]) → 3 >>> [2, 3, 4, 100] -> [2, 3, 4] -> 2 + 3 + 4 => 9 / 3 => 3
# centered_average([1, 1, 5, 5, 10, 8, 7]) → 5 >>> [1, 5, 5, 10, 8, 7] -> [1, 5, 5, 8, 7] -> 1 + 5 + 5 + 8 + 7 => 26 / 5
# centered_average([-10, -4, -2, -4, -2, 0]) → -3 >>> [-4, -2, -4, -2, 0] -> [-4, -2, -4, -2]  => -4 + -2 + -4 + -2 => -12 / 4 => -3

# centered_average([1, 2, 3, 4, 100]) -> 3 >>> [1, 2, 3, 4, 100] -> 1 + 2 + 3 + 4 + 100 => 110 => 110 - max => 10 - min => 9 / 3 => 3
# max = 100
# min = 1


# PLAN
# get the smallest number from the list
# get the largest number from the list

# sum up everything in the list
# subtract the smallest from the sum
# subtract the largest from the sum
# floor divide the sum by the length of the list minus 2
# return the final number

# EXECUTE
def centered_avg(ints):
    # get the smallest number from the list using the min function
    smallest = min(ints)
    # get the largest number from the list using the max function
    largest = max(ints)

    # sum up everything in the list
    # set a sum variable to zero
    sum = 0

    # iterate over the data
    for num in ints:
        # sum up the values
        sum += num

    # subtract the smallest from the sum
    sum -= smallest
    # subtract the largest from the sum
    sum -= largest
    # floor divide the sum by the length of the list minus 2
    final_number = sum // (len(ints) - 2)
    # return the final number
    return final_number


import statistics


def centered_avg2(ints):
    ints.sort()
    return statistics.mean(ints[1:-1])


# Robert Sharp version
def centered_avg3(arr):
    return (sum(arr) - min(arr) - max(arr)) // (len(arr) - 2)


# testing

numbers = [1, 2, 3, 4, 100]
# print(centered_avg1(numbers))
import time

start = time.time()
for i in range(1000):
    centered_avg(numbers)
end = time.time()

print(end - start)

print("-----------------------")

start = time.time()
for i in range(1000):
    centered_avg2(numbers)
end = time.time()

print(end - start)

print("-----------------------")

start = time.time()
for i in range(1000):
    centered_avg3(numbers)
end = time.time()

print(end - start)
