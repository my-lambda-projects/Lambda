import time

"""Implement quick sort in Python.
Input a list.
Output a sorted list."""


def quicksort(array):

    if len(array) <= 1:
        return array
    else:
        pivot = array[-1]
        n = 0
        i = 0
        while n < len(array) - i:
            # print(array)
            # print(n)
            # print(i)
            if pivot < array[n]:
                front = array[len(array) - i - 2]
                before = array[n]
                array[n] = front
                array[len(array) - i - 2] = pivot
                array[len(array) - i - 1] = before
                i += 1
            else:
                n = n + 1

        front_index = n
        # back_index = len(array)-2
        # print(array)

        front_array = array[0 : n - 1]
        back_array = array[n:]

        l = quicksort(front_array)
        l.append(pivot)
        l.extend(quicksort(back_array))
        # print(l)

        return l


test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
times = []

for i in range(1000):
    start = time.clock()
    quicksort(test)
    end = time.clock()
    times.append(end - start)

average = sum(times) / len(times)
print(average)
