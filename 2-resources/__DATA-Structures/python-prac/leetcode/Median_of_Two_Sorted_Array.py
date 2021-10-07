# There are two sorted arrays nums1 and nums2 of size m and n respectively.
#
# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
#
# You may assume nums1 and nums2 cannot be both empty.
#
# Example 1:
#
# nums1 = [1, 3]
# nums2 = [2]
#
# The median is 2.0
# Example 2:
#
# nums1 = [1, 2]
# nums2 = [3, 4]
#
# The median is (2 + 3)/2 = 2.5


def find_median_sorted_arrays(nums1, nums2):
    arr = nums1 + nums2
    i = j = k = 0

    while i < len(nums1) and j < len(nums2):

        if nums1[i] < nums2[j]:

            arr[k] = nums1[i]
            i += 1

        else:
            arr[k] = nums2[j]
            j += 1

        k += 1

    while i < len(nums1):
        arr[k] = nums1[i]

        i += 1
        k += 1

    while j < len(nums2):
        arr[k] = nums2[j]

        j += 1
        k += 1

    if len(arr) % 2 == 0:
        print("Entered if")
        m = (len(arr) // 2) - 1
        print(m, arr[m], arr[m + 1])
        return (arr[m] + arr[m + 1]) / 2

    else:
        m = len(arr) // 2

        return arr[m]


if __name__ == "__main__":
    ex1 = [1, 2]
    ex2 = [3, 4]
    ex3 = [1, 3]
    ex4 = [2]

    print(
        "The median of arrays : "
        + str(ex1)
        + " "
        + str(ex2)
        + " is : "
        + str(find_median_sorted_arrays(ex1, ex2))
    )
    print(
        "The median of arrays : "
        + str(ex3)
        + " "
        + str(ex4)
        + " is : "
        + str(find_median_sorted_arrays(ex3, ex4))
    )
