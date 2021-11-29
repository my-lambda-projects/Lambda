arr = [[1, 2, 3, 4], 23, [5, 6, 7, 8], 19, [9, 10, 11, 12], [13, 14, 15, 16]]
arr2 = []
for i in range(1, 17):
    arr2.append(i)

print(arr)
# print(arr2)
# print(arr[0][1])

# # x + y * width
# print(arr2[1 + 0 * 4])


def squash_my_list(l):
    # l is a list, possibly nested
    result_l = []  # empty, result list
    for i in l:
        if type(i) is list:
            # if we have a list, then extend
            result_l.extend(i)
        else:  # otherwise append to the result, one item
            result_l.append(i)
    return result_l


arr3 = squash_my_list(arr)
print(arr3)
