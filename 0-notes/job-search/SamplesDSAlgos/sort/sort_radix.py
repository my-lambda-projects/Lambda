'''
Radix Sort is a non-comparative sorting algorithm with asymptotic complexity O(nd). 
It is one of the most efficient and fastest linear sorting algorithms. 
Radix sort was developed to sort large integers. 
As integer is treated as a string of digits so we can also call it as string 
    sorting algorithm.

So radix sort is efficient than comparison sorting algorithm until the number of
    digits (key) is less than log n. 
Counting sort can’t be used if a range of key value is large (suppose range is 1 to n2) 
    so radix sort is the best choice to sort in linear time.
'''

# RADIX SORT:
    # only used to sort numbers
    # sort numbers from least to most significant digit
        # sort by ones place, then tens place, then hundreds place, etc.
    # use count sort as sorting subroutine
    # k = number of elements
        
    # linear sorting algorithm.
    # not an in-place sorting algorithm as it requires extra additional space
    # stable sort as relative order of elements with equal values is maintained
    # can be slower than other sorting algorithms like merge and quick sort if 
        # operations are not efficient enough. 
        # These operations include insert and delete functions of the sub-list &
            # the process of isolating the digits we want.
    # less flexible than other sorts as it depends on the digits or letter
    # needs to be rewritten if the type of data is changed

# time complexity:  Best O(nk)   |   Avg O(nk)   |   Worst O(nk)
# space complexity:  O(n+k)


# Python program for implementation of Radix Sort   
# A function to do counting sort of arr[] according to 
# the digit represented by exp. 
def count_sort(original_array, digit_place):
    # get array length
    array_length = len(original_array)

    # empty sorted array, same length as unsorted
    output = [0] * (array_length)

    # initialize count array as 0
    count_array = [0] * (10)

    # store count of occurrences in count array
    for i in range(0, array_length):
        # set index as current item/digit place
        index = (original_array[i]/digit_place)
        # get modulo 10 of index
        index_m10 = int((index) % 10)
        # add 1 to index_m10 of count array
        count_array[index_m10] += 1

    # Change count[i] so that count[i] now contains actual 
        # position of this digit in output array
    for x in range(1, 10):
        count_array[x] += count_array[x-1]

    # build the output array
    array_length_one_short = array_length - 1
    while array_length_one_short >= 0:
        # set index as current item/digit place
        index = (original_array[array_length_one_short]/digit_place)
        # get modulo 10 of index
        index_m10 = int((index) % 10)
        # subtract 1 from index_m10 of count array
        count_index_m10 = int(count_array[index_m10])-1
        # set output[count_index_m10] as original_array[array_length_one_short]
        output[count_index_m10] = original_array[array_length_one_short]
        # subtract one from corresponding entry of count array
        count_array[index_m10] -= 1
        # subtract one from index
        array_length_one_short -= 1

    # copy output array to original array so that it now contains sorted numbers
    x = 0
    for x in range(0, len(original_array)):
        original_array[x] = output[x]

def radix_sort(original_array):

    # find the maximum number to know number of digits
    max1 = max(original_array)

    # do count sort for every digit
    # instead of passing digit number, exp is passed
    # exp is 10^current digit number 
        # 1 = ones place, 10 = tens place, etc.
    digit_place = 1
    while max1/digit_place > 0:
        count_sort(original_array, digit_place)
        digit_place *= 10


arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)
print("Sorted array is " + str(arr))

# contributed by Mohit Kumra
