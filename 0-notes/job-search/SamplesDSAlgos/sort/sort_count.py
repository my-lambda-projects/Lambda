
# os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
# exec(open("iterative_sorting.py").read())

# COUNT SORT:
    # get maximum element from array
    # define count array of size [max+1]
    # set all elements in the count array to 0
    # increase count of each number which are found in the array
    # find cumulative frequency
    # store the number in the output array
    # decrease count for same numbers (count[i])
    # return the output array

# not an in-place sorting algorithm
# stable sort
# inefficient if range of key value k is very large
# can only sort discrete values like integer

# time complexity:  Best O(n+k)   |   Avg O(n+k)   |   Worst O(n+k)
    # O(Maximum key value – Minimum key value), linear
# space complexity:  O(k)

def count_sort(arr, maximum=-1):
    if arr == []:
        return arr 
    # get maximum element from array
    max_element = maximum
    for x in range(0, len(arr)-1):
        # get current item
        current_item = arr[x]
        # if current item > max element, set max as current item
        if current_item > max_element:
            max_element = current_item
        # negative numbers not allowed
        if current_item < 0:
            return "Error, negative numbers not allowed in Count Sort"

    arr_output = [0] * (max_element+1)

    # max = getMax(array, maximum)
    # create count array (max+1 number of elements)
    count = [0] * (max_element+1) 

    for i in range(0, (max_element-1)):
        # initialize count array to all zero
        count[i] = 0

    for i in range(1, maximum):
        # increase number count in count array.
        count[arr[i]] += 1
        
    for i in range(1, max_element - 1):
        # find cumulative frequency
        count[i] += count[i - 1]
        
    for i in range(len(arr)-1, -1, -1):
        if i >= 0:
            x = arr[i]
            y = count[x]
            arr_output[x] = arr[i]
            if count[x] >= 1:
                # decrease count for same numbers
                count[x] -= 1

    arr_difference = int(len(arr_output) - len(arr))

    for i in range((len(arr_output) - 1), -1, -1):
        
        if int(arr_output[i]) == int(0):
            del arr_output[i]

    if int(len(arr_output)) < int(len(arr)):
        arr_output.insert(0, 0)

    return arr_output
