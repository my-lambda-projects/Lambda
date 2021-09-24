# Searching and Recursion
# linear searching
# recursion
# binary search
# Linear Search
def linear_search(lst, target):  # O(n) Linear
    for i in range(len(lst)):  # O(n)
        if lst[i] == target:  # O(1)
            return i  # O(1)

    return -1  # O(1)


l = [23, 34, 12, 3, 5654, 2, 13, 456]

print(linear_search(l, 9876))  # -1


# Recursion


def n_times_loop(n):
    # for i in range(n, 0, -1):
    #   print(i)
    while True:
        # base case
        if n <= 0:
            return
        # do something
        print(n)

        n -= 1  # Decrement


n = 5
n_times_loop(n)


print("------------------------------RECURSIVE----------------------------------")


def n_times_recurse(n):
    # base case
    if n <= 0:
        return
    # do something
    print(n)

    # recursive call (decrement)
    n_times_recurse(n - 1)


n = 5
n_times_recurse(n)

print(
    "------------------------------Binary Search---------BigO (log(n))-------------------------"
)
print("------------------------------Requires Sorted Data...-------------------------")

# Binary Search
# If the list is sorted, then the binary search algorithm will take O(log(n)) time.
#


def binary_search(lst, target):
    low = 0
    high = len(lst) - 1
    while low <= high:
        mid = (low + high) // 2
        if lst[mid] < target:
            low = mid + 1
        elif lst[mid] > target:
            high = mid - 1
        else:
            return True


l = [1, 2, 3, 45, 67, 78, 98, 120, 200]

print(binary_search(l, 78))
