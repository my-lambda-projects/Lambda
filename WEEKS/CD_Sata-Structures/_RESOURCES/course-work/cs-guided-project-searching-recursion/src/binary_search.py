def binary_search(arr, target):
    # find the middle of the array
    start = 0  # start index
    end = len(arr) - 1
    while start <= end:
        # first fint the middle
        guess_index = (end + start) // 2
        # check if the guess/middle is the target
        if arr[guess_index] == target:
            return guess_index

        # else we need to shrink our space
        if arr[guess_index] < target:
            start = guess_index - 1
        elif arr[guess_index] > target:
            end = guess_index + 1
    return -1


our_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 17]

print(binary_search([1, 23, 454, 667, 84, 4, 6, 8], 4))
print(binary_search(our_list, 4))


# to chnage to recursive
# is the item in the middle
# return true
# if arr empty return false
# if bigger or smaller
# repeat on either side


def binary_search_to_recursive(arr, target):  # or is number in middle
    if len(arr) == 0:
        return False
    guess = (len(arr) - 1) // 2
    if arr[guess] == target:
        return True
    if arr[guess] < target:
        # look to the right
        return binary_search(arr[guess + 1 :], target)
    elif arr[guess] > target:
        return binary_search_to_recursive(arr[:guess], target)


print(binary_search_to_recursive([1, 2, 6, 7, 8], 3))
