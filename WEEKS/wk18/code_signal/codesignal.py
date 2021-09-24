"""
Code Signal Interview Path
"""

"""
Arrays
"""

"""
*** First Duplicate ***
-----------------------
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be firstDuplicate(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
"""

arr = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]
# O(n^2) solution
# def firstDuplicate(a):
#     # keep track of matched index
#     matched = []
#     if len(a) < 2:
#         return -1
#     # iterate the list checking for duplicates of current number
#     for i, value in enumerate(a):
#         for j, val in enumerate(a):
#             if matched and matched[0] < i:
#                 continue
#             if j == i:
#                 continue
#             # if duplicate
#             if value == val:
#                 # if matched is empty just add the matched index
#                 if not matched:
#                     matched.append(j)
#                 # else check if theres a match with a larger index
#                 else:
#                     if matched[0] > j:
#                         # print('matched', matched, 'a', a[i])
#                         # if so replace it with the smaller index
#                         matched[0] = j
#     # if no matches return -1
#     if not matched:
#         return -1
#     else:
#         # there is a smallest match index return the value at that index
#         return a[matched[0]]
#
#
# print(firstDuplicate(arr))

arr = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]


# O(n) solution
def firstDuplicate(a):
    # define a set to hold non duplicate numbers
    nums = set()
    for i in range(len(a)):
        # if we hit a number that's duplicate (exists in the set) return it
        if a[i] in nums:
            return a[i]
        else:
            # else if its not duplicate add it to the set
            nums.add(a[i])
    # return -1 if no duplicates
    return -1


# print(firstDuplicate(arr))


"""
*** First not repeating character ***
-------------------------------------
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.
"""

s = "abacabad"


def firstNotRepeatingCharacter(s):
    for i in range(len(s)):
        if s[i] not in s[i + 1 :] and s[i] not in s[:i]:
            return s[i]

    return "_"


# print(firstNotRepeatingCharacter(s))

"""
*** Rotate image ***
--------------------
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
"""

a = [
    [1, 2, 3],  # 1 -> [0 : len - 1] 2 -> [1 : len - 1] 3 -> [2 : len -1]
    [4, 5, 6],  # 4 -> [0 : len - 2] 2 -> [1 : len - 2] 6 [2 : len -2]
    [7, 8, 9],
]  # 7 -> [0 : len - 3] 8 -> [1 : len - 3] 9 -> [2 : len -3]


def rotateImage(a):
    # initialized the length of a set at 0
    length = len(a[0])
    # iterate through the length // 2
    for idx1 in range(length // 2):
        print(f"idx1, {idx1}")
        # starting from idx1, iterate (num3) over length idx1 -1 -  (should get 1)
        for idx2 in range(idx1, length - idx1 - 1):
            print(f"idx2, {idx2}")
            # initialize a placeholder
            holder = a[idx1][idx2]
            print(f"holder, {holder}")
            # replace the item at the cur_index of  a[idx1][idx2], with the item 90 degrees before              it
            a[idx1][idx2] = a[length - 1 - idx2][idx1]
            # replace the item moved with the item 90 degrees before it
            a[length - 1 - idx2][idx1] = a[length - 1 - idx1][length - 1 - idx2]
            # replace the item moved with the item 90 degrees before it
            a[length - 1 - idx1][length - 1 - idx2] = a[idx2][length - 1 - idx1]
            # replace the item moved with the item 90 degrees before it, which is the holder
            a[idx2][length - 1 - idx1] = holder
    return a


# with zip
# def rotateImage(a):
#     return list(zip(*reversed(a)))

# with comprehension
# def rotateImage(a):
#     return [[x[i] for x in a][::-1] for i in range(len(a))]


# print(rotateImage(a))

"""
*** Sudoku 2 ***
----------------
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.
"""

grid = [
    [".", "4", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "1", ".", ".", "7", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", ".", ".", ".", "6", "."],
    [".", ".", ".", ".", ".", "6", ".", "9", "."],
    [".", ".", ".", ".", "1", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", ".", "."],
]


# my solution
# def sudoku2(grid):
#     # check if any inner array contains duplicate numbers
#     # if so return false
#
#     def check_horizontal(grid):
#         for arr in grid:
#             for i in range(len(arr)):
#                 if arr[i] != '.' and arr[i] in arr[i + 1:]:
#                     return False
#         return True
#
#     def check_vertical(grid):
#         col = 0
#
#         while col < len(grid[0]):
#             temp_arr = []
#             for arr in grid:
#                 temp_arr.append(arr[col])
#             for i in range(len(temp_arr)):
#                 if temp_arr[i] != '.' and temp_arr[i] in temp_arr[i + 1:]:
#                     return False
#             col += 1
#         return True
#
#     def check_subgrid(grid, row, col):
#         print('row:', row)
#         print('col:', col)
#
#         row = row
#         # col = col
#         step = 0
#
#         subgrid = []
#         while step < len(grid[0]):
#
#             print('step:', step)
#             colu = col
#             temp_subgrid = []
#
#             for i in range(3):
#                 temp_subgrid.append(grid[row][colu])
#                 colu += 1
#             subgrid.extend(temp_subgrid)
#             if len(subgrid) == 9:
#                 for i in range(len(subgrid)):
#                     if subgrid[i] != '.' and subgrid[i] in subgrid[i + 1:]:
#                         return False
#
#             if step == 8:
#                 row = 0
#                 col = 0
#                 subgrid = []
#             row += 1
#             # col += 1
#             step += 3
#         return True
#
#     if not check_horizontal(grid):
#         return False
#     if not check_vertical(grid):
#         return False
#
#     for i in range(0, 9, 3):
#         for j in range(0, 9, 3):
#             print('***********')
#             sub = check_subgrid(grid, i, j)
#             if not sub:
#                 return False
#     return True

# most voted on codesignal
def check_unique(nums):
    s = set()
    for num in nums:
        if num == ".":
            continue

        if num in s:
            return False
        s.add(num)
    return True


def sudoku2(grid):
    for line in grid:
        if not check_unique(line):
            return False

    for i in range(9):
        if not check_unique([line[i] for line in grid]):
            return False

    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            if not check_unique(
                grid[i][j : j + 3] + grid[i + 1][j : j + 3] + grid[i + 2][j : j + 3]
            ):
                return False

    return True


# print(sudoku2(grid))


"""
*** is crypt solution ***
-------------------------
A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

Example

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
isCryptSolution(crypt, solution) = true.

When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.

For crypt = ["TEN", "TWO", "ONE"] and

solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]
the output should be
isCryptSolution(crypt, solution) = false.

Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes, meaning that this is not a valid solution.
"""

crypt = ["SEND", "MORE", "MONEY"]

solution = [
    ["O", "0"],
    ["M", "1"],
    ["Y", "2"],
    ["E", "5"],
    ["N", "6"],
    ["D", "7"],
    ["R", "8"],
    ["S", "9"],
]


# my solution
def isCryptSolution(crypt, solution):
    # for each string get the numbers for each character
    num_arr = []
    nums = ""
    for word in crypt:
        for char in word:
            for sect in solution:
                if char in sect:
                    nums += sect[1]
        if len(nums) > 1 and nums.startswith("0"):
            return False
        num_arr.append(nums)
        nums = ""
    pointer = 0
    total = 0
    while pointer < len(num_arr) - 1:
        total += int(num_arr[pointer])
        pointer += 1
    if total != int(num_arr[len(num_arr) - 1]):
        return False
    return True


# most voted code signal solution
# def isCryptSolution(crypt, solution):
#     dic = {ord(c): d for c, d in solution}
#     *v, = map(lambda x: x.translate(dic), crypt)
#     return not any(x != "0" and x.startswith("0") for x in v) and \
#         int(v[0]) + int(v[1]) == int(v[2])


# print(isCryptSolution(crypt, solution))

"""
Linked lists
"""

"""
*** Remove K from list
----------------------
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
"""

# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#

l = [3, 1, 2, 3, 4, 5]
k = 3


# my solution
def removeKFromList(l, k):
    if l is None:
        return []
    current = l
    prev = None
    while current is not None:
        if current.value == k:
            # if the head has the current value just put the value of
            # next into it and remove next
            if prev is None:
                l = current.next
                current = l
            else:
                prev.next = current.next
                current = current.next
        else:
            prev = current
            current = current.next
    return l


# most voted on codesignal
# def removeKFromList(l, k):
#     c = l
#     while c:
#         if c.next and c.next.value == k:
#             c.next = c.next.next
#         else:
#             c = c.next
#     return l.next if l and l.value == k else l


"""
*** Is list palindrome ***
--------------------------
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;

For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
"""


# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#

# my solution (used google)
def isListPalindrome(l):
    if l is None:
        return True
    head = l
    prev = None
    while l.next:
        l.prev = prev
        prev = l
        l = l.next
    tail = l
    tail.prev = prev
    while head is not tail and head.value == tail.value:
        head = head.next
        tail = tail.prev
    if head is tail:
        return True
    elif head.value == tail.value:
        return True
    else:
        return False


# best voted on codesignal
# def isListPalindrome(l):
#     if not l or not l.next:
#         return True
#     s = 1
#     n = l
#     while n.next:
#         n = n.next
#         s += 1
#
#     middle = s // 2
#
#     n = l
#     for i in range(middle):
#         n = n.next
#
#     if s % 2:
#         n = n.next
#
#     r = n  # reverse n
#     m = r.next
#     for _ in range(middle - 1):  # flip n
#         m.next, r, m = r, m, m.next
#
#     for _ in range(middle):
#         if r.value != l.value:
#             return False
#         r = r.next
#         l = l.next
#
#     return True

"""
*** Add two huge numbers
------------------------
You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.
"""


# Singly-linked lists are already defined with this interface:
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


a = [1]
b = [9999, 9999, 9999, 9999, 9999, 9999]


# my code couldn't get to pass
# def addTwoHugeNumbers(a, b):
#     if a is None and b is None:
#         return [0]
#     if a.value == 0:
#         return b
#
#     cur_a = a
#     cur_b = b
#     a_val = ''
#     b_val = ''
#     a_count = len(str(a.value))
#     b_count = len(str(b.value))
#     count = max(a_count, b_count)
#     print('count:', count)
#     while cur_a is not None:
#         zeros = count - len(str(cur_a.value))
#         a_val += '0'*zeros
#         a_val += str(cur_a.value)
#         cur_a = cur_a.next
#
#     while cur_b is not None:
#         b_val += str(cur_b.value)
#         cur_b = cur_b.next
#
#     result = str(int(a_val) + int(b_val))
#     print('a:', a_val)
#     print('b:', b_val)
#     print(result)
#     n = count
#
#     res_arr = [int(result[i:i+n]) for i in range(0, len(result), n)]
#     print('res arr', res_arr)
#     for num in res_arr:
#         if num > 0:
#             num = int(str(num).rstrip('0'))
#         if len(str(a[0])) == 1:
#             num = int(str(num).rstrip('0'))
#
#     return res_arr
#
# print(addTwoHugeNumbers(a, b))


# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#

# top codesignal passing solution
def addTwoHugeNumbers(a, b):
    a = reverse(a)
    b = reverse(b)

    carry = 0
    result = None

    while a is not None or b is not None or carry > 0:
        raw = (
            (a.value if a is not None else 0)
            + (b.value if b is not None else 0)
            + carry
        )

        node = ListNode(raw % 10000)
        node.next = result

        result = node
        carry = raw // 10000

        if a is not None:
            a = a.next
        if b is not None:
            b = b.next

    return result


def reverse(list):
    current = list
    previous = None

    while current is not None:
        previous, current.next, current = current, previous, current.next

    return previous


"""
Rearrange Last N
----------------
Note: Try to solve this task in O(list size) time using O(1) additional space, since this is what you'll be asked during an interview.

Given a singly linked list of integers l and a non-negative integer n, move the last n list nodes to the beginning of the linked list.

Example

For l = [1, 2, 3, 4, 5] and n = 3, the output should be
rearrangeLastN(l, n) = [3, 4, 5, 1, 2];
For l = [1, 2, 3, 4, 5, 6, 7] and n = 1, the output should be
rearrangeLastN(l, n) = [7, 1, 2, 3, 4, 5, 6].
"""


# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def rearrangeLastN(l, n):
    if l is None:
        return l
    if n == 0:
        return l
    if l.next is None:
        return l
    # set a current, a head, a previous
    new_head = None
    cur = l
    new_last_node = None
    # var to hold length of list
    length = 0
    # get the length of the list by traversing
    while cur is not None:
        cur = cur.next
        length += 1
    # take the last node in the list and point it to the first node in the list
    if n == length:
        return l
    # reinitialize current to l
    cur = l
    for i in range(length):

        # length -n - 1 ( item before the group to move to the head) needs to point to none
        if i == length - n - 1:
            new_head = cur.next
            new_last_node = cur

            # cur = cur.next

        # length - n is the new head
        # if i == length - n:
        #     pass
        # take the last node in the list and point it to the first node in the list
        if i == length - 1:
            cur.next = l
        if cur:
            cur = cur.next

    new_last_node.next = None
    cur = new_head
    return new_head
