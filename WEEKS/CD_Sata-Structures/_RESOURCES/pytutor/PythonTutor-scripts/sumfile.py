import os

# simpler version


def sum_nums(file):
    # using the with keyword
    # this enables automatic closing of data
    # after it has read all the content of the file
    # assuming your script and the passed file is in the
    # same directory, we don't have to use os module
    # os stands for operating system
    with open(file, "r") as data:
        # split your one-row file
        nums = []
        for line in data:
            nums.extend(line.split(" "))

        summ = 0

        for num in nums:
            summ += int(num)

        return summ


def sum_nums(file):
    with open(os.path.join(os.getcwd(), file), "r") as data:
        # store numbers here
        stack = []

        # iterate every line in file
        for line in data:
            # split data every line using white space (" ")
            stack.append(line.split(" "))

        # convert each list of nums to int
        stack_int = []
        for l in stack:
            stack_int.append([int(num) for num in l])

        # compute sum for each line
        sums = []
        for nums in stack_int:
            sums.append(sum(nums))

        return sums


fn = "numbers.txt"

print(sum_nums(fn))
