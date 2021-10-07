# Binary Search

#### In a nutshell, this search algorithm takes advantage of a collection of elements that is already sorted by ignoring half of the elements after just one comparison.

1. Compare x with the middle element.
2. If x matches with the middle element, we return the mid index.
3. Else if x is greater than the mid element, then x can only lie in the right \(greater\) half subarray after the mid element. Then we apply the algorithm again for the right half.
4. Else if x is smaller, the target x must lie in the left \(lower\) half. So we apply the algorithm for the left half.

### Recursive Binary Search

```python
# Python 3 program for recursive binary search.
# Modifications needed for the older Python 2 are found in comments.

# Returns index of x in arr if present, else -1
def binary_search(arr, low, high, x):

    # Check base case
    if high >= low:

        mid = (high + low) // 2

        # If element is present at the middle itself
        if arr[mid] == x:
            return mid

        # If element is smaller than mid, then it can only
        # be present in left subarray
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)

        # Else the element can only be present in right subarray
        else:
            return binary_search(arr, mid + 1, high, x)

    else:
        # Element is not present in the array
        return -1

# Test array
arr = [ 2, 3, 4, 10, 40 ]
x = 10

# Function call
result = binary_search(arr, 0, len(arr)-1, x)

if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")
```

### Itterative Binary Search:

```python
# Iterative Binary Search Function
# It returns index of x in given array arr if present,
# else returns -1
def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    mid = 0

    while low <= high:

        mid = (high + low) // 2

        # If x is greater, ignore left half
        if arr[mid] < x:
            low = mid + 1

        # If x is smaller, ignore right half
        elif arr[mid] > x:
            high = mid - 1

        # means x is present at mid
        else:
            return mid

    # If we reach here, then the element was not present
    return -1


# Test array
arr = [ 2, 3, 4, 10, 40 ]
x = 10

# Function call
result = binary_search(arr, x)

if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")
```

```python


# Uses python3
import random
"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""

def binary_search(input_array, value):
    test_array = input_array
    current_index = len(input_array)//2
    input_index = current_index

    found_value = test_array[current_index]
    while(len(test_array)>1 and found_value!=value):
        if(found_value<value):
            test_array = test_array[current_index:]
            current_index = len(test_array)//2
            input_index += current_index
            found_value = input_array[input_index]
        else:
            test_array = test_array[0:current_index]
            current_index = len(test_array)//2
            # divmod needed to be used instead of round() since the behavior
            # for .5 changed from rounding up to rounding down in Python 3
            q, r = divmod(len(test_array), 2.0)
            input_index = int(input_index - q - r)
            found_value = input_array[input_index]
    else:
        if(found_value==value):
            return input_index

    return -1

def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

# compare naive algorithm linear search vs. binary search results
def stress_test(n, m):
    test_cond = True
    while(test_cond):
        a = []
        for i in range(n):
            a.append(random.randint(0, 10**9))
        a.sort()
        for i in range(m):
            b = random.randint(0, n-1)
            print([linear_search(a, a[b]), binary_search(a, a[b])])
            # stops if the searches do not give identical answers
            if(linear_search(a, a[b]) != binary_search(a, a[b])):
                test_cond = False
                print('broke here!')
                break



stress_test(100, 100000)



#test_list = [1,3,9,11,15,19,29, 35, 36, 37]
#test_val1 = 25
#test_val2 = 15
#print(binary_search(test_list, test_val1))
#print(binary_search(test_list, test_val2))
#print(binary_search(test_list, 11))

```

```python
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

```

### Binary Search Recursive:

```python
def binarySearch(arr, searchValue):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < searchValue:
            low = mid + 1
        elif arr[mid] > searchValue:
            high = mid - 1
        else:
            return True

    return False


def binarySearchRec(arr, search_value):
    if len(arr) == 0:
        return False

```

```python
"""
Given an array where elements are sorted in ascending order,
convert it to a height balanced BST.
"""


class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


def array_to_bst(nums):
    if not nums:
        return None
    mid = len(nums) // 2
    node = TreeNode(nums[mid])
    node.left = array_to_bst(nums[:mid])
    node.right = array_to_bst(nums[mid + 1 :])
    return node

```

```python
"""
Implement Binary Search Tree. It has method:
    1. Insert
    2. Search
    3. Size
    4. Traversal (Preorder, Inorder, Postorder)
"""

import unittest


class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BST(object):
    def __init__(self):
        self.root = None

    def get_root(self):
        return self.root

    """
        Get the number of elements
        Using recursion. Complexity O(logN)
    """

    def size(self):
        return self.recur_size(self.root)

    def recur_size(self, root):
        if root is None:
            return 0
        else:
            return 1 + self.recur_size(root.left) + self.recur_size(root.right)

    """
        Search data in bst
        Using recursion. Complexity O(logN)
    """

    def search(self, data):
        return self.recur_search(self.root, data)

    def recur_search(self, root, data):
        if root is None:
            return False
        if root.data == data:
            return True
        elif data > root.data:  # Go to right root
            return self.recur_search(root.right, data)
        else:  # Go to left root
            return self.recur_search(root.left, data)

    """
        Insert data in bst
        Using recursion. Complexity O(logN)
    """

    def insert(self, data):
        if self.root:
            return self.recur_insert(self.root, data)
        else:
            self.root = Node(data)
            return True

    def recur_insert(self, root, data):
        if root.data == data:  # The data is already there
            return False
        elif data < root.data:  # Go to left root
            if root.left:  # If left root is a node
                return self.recur_insert(root.left, data)
            else:  # left root is a None
                root.left = Node(data)
                return True
        else:  # Go to right root
            if root.right:  # If right root is a node
                return self.recur_insert(root.right, data)
            else:
                root.right = Node(data)
                return True

    """
        Preorder, Postorder, Inorder traversal bst
    """

    def preorder(self, root):
        if root:
            print(str(root.data), end=" ")
            self.preorder(root.left)
            self.preorder(root.right)

    def inorder(self, root):
        if root:
            self.inorder(root.left)
            print(str(root.data), end=" ")
            self.inorder(root.right)

    def postorder(self, root):
        if root:
            self.postorder(root.left)
            self.postorder(root.right)
            print(str(root.data), end=" ")


"""
    The tree is created for testing:

                    10
                 /      \
               6         15
              / \       /   \
            4     9   12      24
                 /          /    \
                7         20      30
                         /
                       18
"""


class TestSuite(unittest.TestCase):
    def setUp(self):
        self.tree = BST()
        self.tree.insert(10)
        self.tree.insert(15)
        self.tree.insert(6)
        self.tree.insert(4)
        self.tree.insert(9)
        self.tree.insert(12)
        self.tree.insert(24)
        self.tree.insert(7)
        self.tree.insert(20)
        self.tree.insert(30)
        self.tree.insert(18)

    def test_search(self):
        self.assertTrue(self.tree.search(24))
        self.assertFalse(self.tree.search(50))

    def test_size(self):
        self.assertEqual(11, self.tree.size())


if __name__ == "__main__":
    unittest.main()

```

## Delete Node

```python
"""
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
"""


class Solution(object):
    def delete_node(self, root, key):
        """
        :type root: TreeNode
        :type key: int
        :rtype: TreeNode
        """
        if not root:
            return None

        if root.val == key:
            if root.left:
                # Find the right most leaf of the left sub-tree
                left_right_most = root.left
                while left_right_most.right:
                    left_right_most = left_right_most.right
                # Attach right child to the right of that leaf
                left_right_most.right = root.right
                # Return left child instead of root, a.k.a delete root
                return root.left
            else:
                return root.right
        # If left or right child got deleted, the returned root is the child of the deleted node.
        elif root.val > key:
            root.left = self.deleteNode(root.left, key)
        else:
            root.right = self.deleteNode(root.right, key)
        return root

```

Another:

```python
def binary_search(arr, x):
    start= 0
    end = len(arr) - 1
    mid = 0
    while start<= end:
        mid = (start+ end) // 2
        # If x is greater, search in right array
        if arr[mid] < x:
            start = mid + 1

        # If x is smaller, search in left array
        elif arr[mid] > x:
            end= mid - 1
        # if x is present at mid
        else:
            return mid


    # when we reach at the end of array, then the element was not present
    return -1


arr = [ ]
n=int(input("Enter size of array : "))
print("Enter array  elements : ")
for i in range(n):
    e=int(input())
    arr.append(e)
x = int(input("Enter element to search "))
ans = binary_search(arr, x)
if(ans==-1):
    print("Element not found")
else:
    print("Element found at ",ans)
```
