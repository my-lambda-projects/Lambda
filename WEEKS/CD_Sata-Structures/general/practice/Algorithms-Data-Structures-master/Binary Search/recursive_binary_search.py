# given array a and need to find value x
# left and right correspond to initial indices of array a bounding the search
# segment of array a above and below, respectively
def binary_search_recursive(a, x, left=0, right=(len(a)-1)):
"""Recursive Binary Search algorithm implemented using list indexing"""
    index = (left+right)//2
    if a[index]==x:
        return index
    elif x>(a[right]) or x<a[left]: # first case where x is not in the list!
        return -1
    elif left==right: # case where search is complete and no value x not found
        return -1
    elif left==right-1: # case where there are only two numbers left, check both!
        left = right
        return binary_search_recursive(a, x, left, right)
    elif a[index]<x:
        left = index
        return binary_search_recursive(a, x, left, right)
    elif a[index]>x:
        right = index
        return binary_search_recursive(a, x, left, right)
