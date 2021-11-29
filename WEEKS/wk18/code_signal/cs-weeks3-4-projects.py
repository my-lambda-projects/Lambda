# slicing

# my_list[start_index:end_index]
# my_list[:]  # This would be all of the items in my_list
# my_list[:5] # This would be the items from index 0 to 4
# my_list[5:] # This would be the items from index 5 to the end of the list

# guided

"""
Given an array of integers `nums`, define a function that returns the "pivot" index of the array.
The "pivot" index is where the sum of all the numbers on the left of that index is equal to the sum of all the numbers on the right of that index.
If the input array does not have a "pivot" index, then the function should return `-1`. If there are more than one "pivot" indexes, then you should return the left-most "pivot" index.
Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (1 + 7 + 3 = 11) is equal to the sum of numbers to the right of index 3 (5 + 6 = 11).
Also, 3 is the first index where this occurs.
Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
"""

nums = [1, 7, 3, 6, 5, 6]


# nums = [1,2,3]

#  O(N^2) solution
# def pivot_index(nums):
#     # iterate array starting at index 1
#     # get sum of items on left of i and compare to sum of items on right of i
#     # if they are equal return i else keep going to the next i
#     for i in range(len(nums)):
#         left = sum(nums[:i])
#         right = sum(nums[i + 1:])
#         if left == right:
#             return i
#     return -1


# O(N) solution
def pivot_index(nums):
    if len(nums) <= 1:
        return -1
    left = 0
    right = sum(nums)
    for i in range(len(nums)):
        right -= nums[i]
        if right == left:
            return i

        left += nums[i]


# print('def pivot_index:', pivot_index(nums))

"""
You are given a non-empty array that represents the digits of a non-negative integer.
Write a function that increments the number by 1.
The digits are stored so that the digit representing the most significant place value is at the beginning of the array. Each element in the array only contains a single digit.
You will not receive a leading 0 in your input array (except for the number 0 itself).
Example 1:
Input: [1,3,2]
Output: [1,3,3]
Explanation: The input array represents the integer 132. 132 + 1 = 133.
Example 2:
Input: [3,2,1,9]
Output: [3,2,2,0]
Explanation: The input array represents the integer 3219. 3219 + 1 = 3220.
Example 3:
Input: [9,9,9]
Output: [1,0,0,0]
Explanation: The input array represents the integer 999. 999 + 1 = 1000.
"""


# def plus_one(digits):
# turn the numbers in the array into an integer
# # The repr() function returns a printable representation of the given object.
# number = (''.join(repr(int(n)) for n in digits))
# result = []
# for num in number:
#     result.append(num)
# print(int(number) + 1)


def plus_one(digits):
    # check the last digit if its not 9 we just add 1
    # if it is a 9 make it 0
    # go left check 2nd to last if its not a 9 add 1
    # if it is a 9

    index = len(digits) - 1
    while index >= 0 and digits[index] == 9:
        digits[index] = 0
        index -= 1

    if index == -1:
        digits.insert(0, 1)
    else:
        digits[index] += 1

    return digits


# print(plus_one([1, 1, 1]))

"""
You are given the prices of a stock, in the form of an array of integers, prices. Let's say that prices[i] is the price of the stock on the ith day (0-based index). Assuming that you are allowed to buy and sell the stock only once, your task is to find the maximum possible profit (the difference between the buy and sell prices).

Note: You can assume there are no fees associated with buying or selling the stock.

Example

For prices = [6, 3, 1, 2, 5, 4], the output should be buyAndSellStock(prices) = 4.

It would be most profitable to buy the stock on day 2 and sell it on day 4. Thus, the maximum profit is prices[4] - prices[2] = 5 - 1 = 4.

For prices = [8, 5, 3, 1], the output should be buyAndSellStock(prices) = 0.

Since the value of the stock drops each day, there's no way to make a profit from selling it. Hence, the maximum profit is 0.

For prices = [3, 100, 1, 97], the output should be buyAndSellStock(prices) = 97.

It would be most profitable to buy the stock on day 0 and sell it on day 1. Thus, the maximum profit is prices[1] - prices[0] = 100 - 3 = 97.
"""

# prices = [6, 3, 1, 2, 5, 4]
# prices = [8, 5, 3, 1]
prices = [3, 100, 1, 97]

#
# prices = []
# prices = [61, 91, 6, 15, 28, 30, 39, 69, 78, 81, 62, 38, 56, 69, 22, 95, 47, 82,
#           52, 64, 74, 97, 60, 68, 5, 23, 45, 55, 66, 57, 26, 4, 21, 65, 55, 50,
#           41, 88, 39, 84, 77, 5, 76, 11, 3, 51, 96, 100, 13, 26, 79, 98, 84, 66,
#           93, 65, 98, 60, 57, 35, 12, 40, 83, 62, 46, 60, 26, 94, 59, 29, 70,
#           34, 83, 98, 89, 57, 71, 44, 23, 43, 55, 1, 70, 29, 44, 10, 70, 83, 95,
#           96, 97, 84, 23, 16, 34, 55, 59, 73, 17, 73]

# def buyAndSellStock(prices):
#     # iterate array, for each item after subtract and store the amount as
#     # highest profit.. replace if needed with a higher profit
#     if prices == sorted(prices, reverse=True) or len(prices) < 2:
#         return 0
#     highest_profit = 0
#     for indx1 in range(len(prices)):
#         rest = prices[indx1 + 1:]
#         for price in range(len(rest)):
#             if highest_profit >= max(rest):
#                 return highest_profit
#             if rest[price] - prices[indx1] > highest_profit:
#                 highest_profit = rest[price] - prices[indx1]
#     if highest_profit < 0:
#         return 0
#     else:
#         return highest_profit

prices = [6, 3, 1, 2, 5, 4]
prices = [8, 5, 3, 1]
prices = [3, 100, 1, 97]


def buyAndSellStock(prices):
    length = len(prices)
    # iterate array, for each item after subtract and store the amount as
    # highest profit.. replace if needed with a higher profit
    if prices == sorted(prices, reverse=True) or len(prices) < 2:
        return 0
    highest_profit = prices[1] - prices[0]
    smallest_number = prices[0]
    for i in range(1, length):
        # only check if the selected number minus the smallest number before
        # it is larger than the highest profit to avoid unnecessary checks
        if prices[i] - smallest_number > highest_profit:
            highest_profit = prices[i] - smallest_number
        if prices[i] < smallest_number:
            smallest_number = prices[i]

    return highest_profit


# print(buyAndSellStock(prices))

"""
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
"""

inputString = "crazy"


def alphabeticShift(inputString):
    new_string = ""
    for letter in inputString:
        new_letter = ord(letter) + 1
        if new_letter == 123:
            new_letter = 97
        new_string += chr(new_letter)
    return new_string


# print(alphabeticShift(inputString))


"""
You are given a parentheses sequence, check if it's regular.

Example

For s = "()()(())", the output should be
validParenthesesSequence(s) = true;
For s = "()()())", the output should be
validParenthesesSequence(s) = false
"""

s = "()()(())"

s = "()()())"


def validParenthesesSequence(s):
    check = []
    if s == "":
        return True
    if s[0] == ")":
        return False
    for paren in s:
        if paren == "(":
            check.append(paren)
        else:
            if len(check) == 0:
                return False
            else:
                check.pop()
    if check != []:
        return False
    return True


# print(validParenthesesSequence(s))


# Guided

"""
Given only a reference to a specific node in a linked list, delete that node from a singly-linked list.
Example:
The code below should first construct a linked list (x -> y -> z) and then delete `y` from the linked list by calling the function `delete_node`. It is your job to write the `delete_node` function.
```python
class LinkedListNode():
    def __init__(self, value):
        self.value = value
        self.next  = None
x = LinkedListNode('X')
y = LinkedListNode('Y')
z = LinkedListNode('Z')
x.next = y
y.next = z
delete_node(y)
```
*Note: We can do this in O(1) time and space! But be aware that our solution will have some side effects...*
"""


class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


def delete_node(node_to_delete):
    next = node_to_delete.next
    next.next = None
    node_to_delete.value = next.value
    node_to_delete.next = next.next


x = LinkedListNode("X")
y = LinkedListNode("Y")
z = LinkedListNode("Z")

x.next = y
y.next = z

# print(delete_node(y))
# print(x.next.value)


"""
Given a reference to the head node of a singly-linked list, write a function
that reverses the linked list in place. The function should return the new head
of the reversed list.
In order to do this in O(1) space (in-place), you cannot make a new list, you
need to use the existing nodes.
In order to do this in O(n) time, you should only have to traverse the list
once.
*Note: If you get stuck, try drawing a picture of a small linked list and
running your function by hand. Does it actually work? Also, don't forget to
consider edge cases (like a list with only 1 or 0 elements).*
"""


class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


def reverse(head_of_list):
    current_node = head_of_list
    previous_node = None
    next_node = None

    # Until we have 'fallen off' the end of the list
    while current_node:
        # Copy a pointer to the next element
        # before we overwrite current_node.next
        next_node = current_node.next

        # Reverse the 'next' pointer
        current_node.next = previous_node

        # Step forward in the list
        previous_node = current_node
        current_node = next_node

    return previous_node


# Singly-linked lists are already defined with this interface:
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


[1, 3, 4, 6]

"""
Note: Your solution should have O(n) time complexity, where n is the number of elements in l, since this is what you will be asked to accomplish in an interview.

You have a singly linked list l, which is sorted in strictly increasing order, and an integer value. Add value to the list l, preserving its original sorting.

Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

Example

For l = [1, 3, 4, 6] and value = 5, the output should be
insertValueIntoSortedLinkedList(l, value) = [1, 3, 4, 5, 6];
For l = [1, 3, 4, 6] and value = 10, the output should be
insertValueIntoSortedLinkedList(l, value) = [1, 3, 4, 6, 10];
For l = [1, 3, 4, 6] and value = 0, the output should be
insertValueIntoSortedLinkedList(l, value) = [0, 1, 3, 4, 6].
"""


def insertValueIntoSortedLinkedList(l, value):
    # create a new node with the value
    node = ListNode(value)
    # if there is no list return the new node
    if l == None:
        return node
    else:
        # else if the list.value (first item in the list) > the new value
        if l.value > value:
            # set new values as the first item in the list
            node.next = l
            return node
        else:
            # else create a temp value for the current list item and the previous set to None
            temp, prev = l, None
            # while the there is a next item and current item value is less
            # than the value iterate
            while temp.next and temp.value <= value:
                # set previous to temp and temp to next
                prev = temp
                temp = temp.next
            # check if temp.next is None (last item) and still not larger than the value
            if temp.next == None and temp.value <= value:
                # if so add the value as the last item in the list since it is the largest
                temp.next = node
            else:
                # else if the next item is larger than the value set the next item as the next item of the new value
                node.next = prev.next
                # and set the previous item to point to the new value next
                prev.next = node
            # return the list
            return l


"""
Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
"""


# Singly-linked lists are already defined with this interface:
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


def mergeTwoLinkedLists(l1, l2):
    # create empty node to hold the new merged list
    merged_node = ListNode(0)
    # end will hold the end node
    end = merged_node
    while True:
        # if either list becomes empty join lists
        if l1 is None:
            end.next = l2
            break
        if l2 is None:
            end.next = l1
            break
        # merge the smaller list to the end of the larger and create a head from the merged list
        if l1.value <= l2.value:
            end.next = l1
            l1 = l1.next
        else:
            end.next = l2
            l2 = l2.next
        # iterate the end node
        end = end.next
    return merged_node.next


"""
Note: Your solution should have O(n) time complexity, where n is the number of elements in l, and O(1) additional space complexity, since this is what you would be asked to accomplish in an interview.

Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that is less than or equal to the length of l. If the number of nodes in the linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.

You may not alter the values in the nodes - only the nodes themselves can be changed.

Example

For l = [1, 2, 3, 4, 5] and k = 2, the output should be
reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5];
For l = [1, 2, 3, 4, 5] and k = 1, the output should be
reverseNodesInKGroups(l, k) = [1, 2, 3, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and k = 3, the output should be
reverseNodesInKGroups(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11].
"""


# Singly-linked lists are already defined with this interface:
class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


def reverseNodesInKGroups(l, k):
    # create an empty node to hold the new list
    new_node = ListNode(0)
    # set the next value to the list
    new_node.next = l
    # set the previous node to the new list
    prev = new_node

    while True:
        # set the start to the new node next
        start = prev.next
        # set the end to the prev
        end = prev
        # iterate k times
        for i in range(0, k):
            # set end to the value its pointing to
            end = end.next
            # if the last node
            if end == None:
                # return
                return new_node.next
        # set the new reverse list at the end of the last reversed list
        new_reversed = end.next
        # call the reverse_list function passing in the start and end
        reverse_list(start, end)
        # set pointer of prev to end
        prev.next = end
        # set pointer of start to the new list
        start.next = new_reversed
        # set prev value to the start value
        prev = start


# # function to reverse the list
def reverse_list(start, end):
    # set the last reversed group to the new start
    old_reversed = start
    # set the new current to the start
    current = start
    # set next node to the node start is pointing to
    next_node = start.next
    # while the current node is not the last node
    while current != end:
        # iterate
        current = next_node
        next_node = next_node.next
        # set the current pointer to the last reversed
        current.next = old_reversed
        # set the last reversed to the current
        old_reversed = current


"""
Refactor the Queue class below by adding an `is_empty` method. After writing this method, refactor your other methods to use this method in your other methods.
"""


class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, item):
        new_node = LinkedListNode(item)
        # check if queue is empty
        if self.is_empty():
            self.front = new_node
            self.rear = new_node
        else:
            # add new node to rear
            self.rear.next = new_node
            # reassign rear to new node
            self.rear = new_node

    def dequeue(self):
        # check if queue is empty
        if not self.is_empty():
            # keep copy of old front
            old_front = self.front
            # set new front
            self.front = old_front.next

        # check if the queue is now empty
        if self.is_empty():
            # make sure rear is also None
            self.rear = None

        return old_front

    # my code to check if the queue is empty
    def is_empty(self):
        return self.front is None and self.rear is None


"""
Add a peek method to the Stack class. The peek method should return the value of the top item in the stack without actually removing it from the stack.
"""


class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    # my code for peek method
    def peek(self, item):
        return self.data[-1]

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"


"""
Add a peek method to the Stack class below. The peek method should return the value of the node that is at the top of the stack without actually removing it from the stack.
"""


class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        # create new node with data
        new_node = LinkedListNode(data)
        # set current top to new node's next
        new_node.next = self.top
        # reset the top pointer to the new node
        self.top = new_node

    def pop(self):
        # make sure stack is not empty
        if self.top is not None:
            # store popped node
            popped_node = self.top
            # reset top pointer to next node
            self.top = popped_node.next
            # return the value from the popped node
            return popped_node.data

    # my code for peek method
    def peek(self):
        if self.top is not None:
            return self.top


"""
Queues and stacks guided
"""

"""
You've encountered a situation where you want to easily be able to pull the
largest integer from a stack.
You already have a `Stack` class that you've implemented using a dynamic array.
Use this `Stack` class to implement a new class `MaxStack` with a method
`get_max()` that returns the largest element in the stack. `get_max()` should
not remove the item.
*Note: Your stacks will contain only integers. You should be able to get a
runtime of O(1) for push(), pop(), and get_max().*
"""


class Stack(object):
    def __init__(self):
        """Initialize an empty stack"""
        self.items = []

    def push(self, item):
        """Push a new item onto the stack"""
        self.items.append(item)

    def pop(self):
        """Remove and return the last item"""
        # If the stack is empty, return None
        # (it would also be reasonable to throw an exception)
        if not self.items:
            return None

        return self.items.pop()

    def peek(self):
        """Return the last item without removing it"""
        if not self.items:
            return None
        return self.items[-1]


class MaxStack(object):
    def __init__(self):
        # Your code here
        self.stack = Stack()
        # self.head = []
        self.max_stack = Stack()

    def push(self, item):
        """Add a new item onto the top of our stack."""
        # Your code here
        # self.head.append(item)
        # self.max_value = max(max(self.head), item)
        current_max = self.get_max()
        if current_max is None or current_max < item:
            self.max_stack.push(item)
        self.stack.push(item)

    def pop(self):
        """Remove and return the top item from our stack."""
        # Your code here
        # if not self.head:
        #     return None
        # self.head.pop()
        # self.max_value = max(self.head)
        item = self.stack.pop()
        self.max_stack.pop()
        return item

    def get_max(self):
        """The last item in maxes_stack is the max item in our stack."""
        # Your code here
        return self.max_stack.peek()


max_stack = MaxStack()
max_stack.push(1)
max_stack.push(2)
max_stack.push(5)
max_stack.pop()
# print(max_stack.get_max())

"""
Your goal is to define a `Queue` class that uses two stacks. Your `Queue` class
should have an `enqueue()` method and a `dequeue()` method that ensures a
"first in first out" (FIFO) order.
As you write your methods, you should optimize for time on the `enqueue()` and
`dequeue()` method calls.
The Stack class that you will use has been provided to you.
"""


class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"


class QueueTwoStacks:
    def __init__(self):
        # Your code here
        self.stack1 = Stack()
        self.stack2 = Stack()

    def enqueue(self, item):
        # Your code here
        self.stack1.push(item)

    def dequeue(self):
        # Your code here
        if len(self.stack1.data) != 0:
            shifted = self.stack1.pop()
            self.stack2.push(shifted)
            return self.dequeue()
        else:
            if len(self.stack2.data) != 0:
                last_item = self.stack2.pop()
                return last_item


# queue = QueueTwoStacks()
# queue.enqueue(1)
# queue.enqueue(3)
# queue.enqueue(5)
# print('deque:', queue.dequeue())
# print('stack1:', queue.stack1.data)
# print('stack2:', queue.stack2.data)

"""
A colleague of yours keeps including incorrect JavaScript code in pull
requests. You are getting tired of parsing through their code to make sure
they've included correct brackets, braces, and parentheses.
In order to save yourself time, you decide to write a function that can parse
the code to make sure it includes the correct amount of opening and closing
characters.
We will call `(`, `{`, and `[` "openers".
We will call `)`, `}`, and `]` "closers".
Your input will be a string and your function needs to make sure that there is
a correct number of openers and closers and that they are properly nested.
Examples:
`"{ [ ] ( ) }"` should return `True`
`"{ [ ( ] ) }"` should return `False`
`"{ [ }"` should return `False`
You should be able to do this in one pass with O(n) time and O(n) space
complexity.
*Note: Remember that just making sure that each opener has a corresponding
closer is not enough. You also have to confirm that they are ordered and nested
correctly. For example, "{ [ ( ] ) }" should return False, even though each
opener can be matched to a closer.*
"""

code = "{ [ ] ( ) }"

code = "{ [ ( ] ) }"

code = "{ [ }"


def is_valid(code):
    check = []
    if code == "":
        return True
    if code[0] == ")" or code[0] == "}" or code[0] == "]":
        return False

    for paren in code:
        if paren == " ":
            continue
        if paren == "(" or paren == "{" or paren == "[":
            print("paren:", paren)
            check.append(paren)
            print("append:", check)
        elif (
            paren == ")"
            and check[-1] == "("
            or paren == "}"
            and check[-1] == "{"
            or paren == "]"
            and check[-1] == "["
        ):

            if len(check) == 0:
                print("len:", len(check))
                return False
            else:
                print("pop:", paren)
                check.pop()
        else:
            print("else check:", paren, check)
            return False

    if check:
        print("check:", check)
        return False
    return True


# print(is_valid(code))

"""
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Implement a queue using two stacks.

You are given an array of requests, where requests[i] can be "push <x>" or "pop". Return an array composed of the results of each "pop" operation that is performed.

Example

For requests = ["push 1", "push 2", "pop", "push 3", "pop"], the output should be
queueOnStacks(requests) = [1, 2].

After the first request, the queue is {1}; after the second it is {1, 2}. Then we do the third request, "pop", and add the first element of the queue 1 to the answer array. The queue becomes {2}. After the fourth request, the queue is {2, 3}. Then we perform "pop" again and add 2 to the answer array, and the queue becomes {3}.
"""

requests = ["push 1", "push 2", "pop", "push 3", "pop"]


class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()


def queueOnStacks(requests):
    left = Stack()
    right = Stack()

    def insert(x):
        left.push(x)
        print("queue:", left.items)

    def remove():
        if len(right.items) == 0:
            while len(left.items) > 0:
                shifted = left.pop()
                right.push(shifted)
        return right.items.pop()

    ans = []
    for request in requests:
        req = request.split(" ")
        if req[0] == "push":
            insert(int(req[1]))
        else:
            ans.append(remove())
            print("add to ans:", ans)

    return ans


# print(queueOnStacks(requests))

"""
Given a string sequence consisting of the characters '(', ')', '[', ']', '{', and '}'. Your task is to determine whether or not the sequence is a valid bracket sequence.

The Valid bracket sequence is defined in the following way:

An empty bracket sequence is a valid bracket sequence.
If S is a valid bracket sequence then (S), [S] and {S} are also valid.
If A and B are valid bracket sequences then AB is also valid.
Example

For sequence = "()", the output should be validBracketSequence(sequence) = true;
For sequence = "()[]{}", the output should be validBracketSequence(sequence) = true;
For sequence = "(]", the output should be validBracketSequence(sequence) = false;
For sequence = "([)]", the output should be validBracketSequence(sequence) = false;
For sequence = "{[]}", the output should be validBracketSequence(sequence) = true.
"""
sequence = "()"


def validBracketSequence(sequence):
    pairs = dict(zip("(,[,{", "),],}"))
    stack = []
    for item in sequence:
        if item in pairs:
            stack.append(pairs[item])
        elif not (stack and item == stack.pop()):
            return False
    return not stack


# print(validBracketSequence(sequence))


"""
For a given positive integer n determine if it can be represented as a sum of two Fibonacci numbers (possibly equal).

Example

For n = 1, the output should be
fibonacciSimpleSum2(n) = true.

Explanation: 1 = 0 + 1 = F0 + F1.

For n = 11, the output should be
fibonacciSimpleSum2(n) = true.

Explanation: 11 = 3 + 8 = F4 + F6.

For n = 60, the output should be
fibonacciSimpleSum2(n) = true.

Explanation: 11 = 5 + 55 = F5 + F10.

For n = 66, the output should be
fibonacciSimpleSum2(n) = false
"""


def fibonacciSimpleSum2(n):
    # if 0 is less than n and n is less than 5 then we know we can return
    # true because n will be 1-4 which can be created with 2 fib numbers
    if 0 < n < 5:
        return True

    # first get fibonacci sequence up to n
    seq = [0, 1]
    # starting from 2 and ending at n
    for i in range(2, n):
        # add seq at i - 2 (0 to start) and seq at i - 1 (1 to start)
        fib = seq[i - 2] + seq[i - 1]
        # if n is greater than fib
        if n >= fib:
            # we can append fib to the sequence
            seq.append(fib)
            # if fib is greater than or equal to n we can stop
        else:
            break
    print(seq)

    # The check I googled
    # for i, number in enumerate(seq[:-1]):
    #     paired = n - number
    #     if paired in seq[i + 1:]:
    #         return True

    # check if any 2 of the numbers in seq add up to n
    # My check
    for i in range(len(seq) - 1):  # O(n^2)
        j = 0
        while (seq[i] + seq[j]) != n:
            if j == len(seq) - 1:
                break
            else:
                j += 1
        if seq[i] + seq[j] == n:
            return True

    return False


print(fibonacciSimpleSum2(5))

"""
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search for target in nums. If target exists, then return its index, otherwise, return -1.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Note:

All elements in nums are unique.
The length of nums will be <= 100
The value of each element in nums will be in the range [1, 10000]
"""


def csBinarySearch(nums, target):
    min = 0
    max = len(nums) - 1
    while not max < min:
        guess = (max + min) // 2

        if nums[guess] == target:
            return guess
        elif nums[guess] < target:
            min = guess + 1
        else:
            max = guess - 1

    return -1


# print(csBinarySearch([-1, 0, 3, 5, 9, 12], 9))


"""
Given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You should search for target in nums and if found return its index, otherwise return -1.

Example 1:
Input: nums = [6,7,0,1,2,3,4,5], target = 0
Output: 2

Example 2:
Input: nums = [6,7,0,1,2,3,4,5], target = 3
Output: 5

Example 3:
Input: nums = [1], target = 0
Output: -1

Note:

1 <= nums.length < 100
1 <= nums[i] <= 100
All values of nums are unique.
"""


def csSearchRotatedSortedArray(nums, target):
    min = 0
    max = len(nums) - 1

    while not max < min:
        guess = (max + min) // 2
        # print(f'min: {nums[min]} max: {nums[max]} guess:{nums[guess]} target:'
        #       f' {target}')
        # if the guess is the target we got it and return the guess
        if nums[guess] == target:
            # print('guessed the target')
            return guess
        # if min is less than or equal to the guess
        elif nums[min] <= nums[guess]:
            # print('min less than guess')
            # if min is less than or equal to the target and less than the guess
            if nums[min] <= target < nums[guess]:
                # print('min less than or equal to target and less than guess')
                # we can set max to the guess because nothing past the guess
                # can be the target
                max = guess
                # else we can set min to guess + 1 because nothing before it
                # can be the target
            else:
                # print('min is greater than target and greater than or equal '
                #       'to guess')
                min = guess + 1
        # else if min is greater than the guess
        else:
            print("min is greater than or equal to guess")
            # if max - 1 is greater than the target and greater than the guess
            if nums[max - 1] >= target > nums[guess]:
                # print('max - 1 greater than or equal to target and greater '
                #       'than guess')
                # we can set min to guess plus one because nothing before it
                # can be the target
                min = guess + 1
            else:
                # print('max -1 less than target and less than or equal to guess')
                # else we set max equal to guess because nothing after it can
                # be the target
                max = guess

    return -1


# print(f'search rotate'
#       f'd array: '
#       f''
#       f'{csSearchRotatedSortedArray([45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], 48)}')

"""
Challenge
Write a logarithmic expression that is identical to this exponential expression:

2^n = 64
log_2 64 = 6

Write an exponential expression that is identical to this logarithmic expression:

log_2 128 = n
2^7 = 128

What keywords should you look out for that might alert you that logarithms are involved?
doubles, halves
"""

"""
Rewrite the implementation of linear search below so that the algorithm searches from the end of the list to the beginning.
"""


def linear_search(arr, target):
    # loop through each item in the input array
    i = len(arr) - 1
    for idx in range(len(arr)):
        # check if the item at the current index is equal to the target
        if arr[i] == target:
            # return the current index as the match
            return i
        i -= 1
    # if we were able to loop through the entire array, the target is not present
    return -1


arr = [1, 2, 3, 4, 5, 6]
target = 3
# print(linear_search(arr, target))


"""
Write a recursive search function that receives as input an array of integers and a target integer value. This function should return True if the target element exists in the array, and False otherwise.
What would be the base case(s) we'd have to consider for implementing this function?
How should our recursive solution converge on our base case(s)?

In your own words, write out the three rules for recursion and how you can identify when a problem is amenable to using a recursive method.
- problem has an obvious base case
- the data changes predictably on the way to the base case 
- the function must call itself
"""


def recursive_search(arr, target):
    if arr[0] == target:
        return True
    elif len(arr[1:]) > 1:
        return recursive_search(arr[1:], target)
    return False


# print(recursive_search(arr, target))


"""
Binary Search
"""


def binary_search(arr, target):
    # 1. Declare min = 0 and max = length of array - 1
    min = 0
    max = len(arr) - 1
    while not max < min:
        # 2. Figure out the guess value by getting the middle integer between min and max
        guess = (max + min) // 2
        # 3. if array[guess] equals the target, we found the element, return the index
        if arr[guess] == target:
            return guess
        # 4. if the guess was too low, reset min to be one more than the guess
        elif arr[guess] < target:
            min = guess + 1
        # 5. if the guess was too high, reset max to be one less than the guess
        else:
            max = guess - 1
    # no match was found
    return -1


# target = 5
# print(binary_search(arr, target))

"""
What is the time complexity of our binary_search function above?
- logN
Can you turn the function above into a recursive function? Any variables tracked/updated in the while loop will have to become parameters for the recursive function.
"""
arr = [1, 2, 3, 4, 5, 6]
target = 55


def binary_recursive_search(arr, target, min_index, max_index):
    if min_index >= max_index:
        return -1
    guess = (max_index + min_index) // 2
    if arr[guess] == target:
        return guess
    elif target < arr[guess]:
        return binary_recursive_search(arr, target, min_index, guess - 1)
    else:
        return binary_recursive_search(arr, target, guess + 1, max_index)


# print(binary_recursive_search(arr, target, 0, len(arr)))

"""
Searching-recursion guided
"""

"""
I was bored one day and decided to look at last names in the phonebook for my
area.
I flipped open the phonebook to a random page near the middle and started
perusing. I wrote each last name that I was unfamiliar with down on paper in
increasing order. When I got to the end of the phonebook, I was having so much
fun I decided to start from the beginning and keep going until I reached the
page where I had started.
When I was finished, I had a list of interesting last names that were mostly
alphabetical. The problem was that my list starts somewhere near the middle of
the alphabet, reaches the end, and then starts from the beginning of the
alphabet. In other words, my list of names is sorted, but it is "rotated."
Example:
surnames = [
    'liu',
    'mcdowell',
    'nixon',
    'sparks',
    'zhang',
    'ahmed',  # <-- rotates here!
    'brandt',
    'davenport',
    'farley',
    'glover',
    'kennedy',
]
Write a function that finds the index of the "rotation point". The "rotation
point" is where I started working from the beginning of the phone book. The
list I came up was absolutely huge, so make sure your solution is efficient.
*Note: you should be able to come up with a solution that has O(log n) time
complexity.*
"""

surnames = [
    "sparks",
    "zhang",
    "liu",
    "ahmed",  # <-- rotates here!
    "brandt",
    "davenport",
    "farley",
    "glover",
    "kennedy",
    "mcdowell",
    "nixon",
]


# works w numbers not names
def find_rotation_point(surnames):
    # Your code here
    min = 0
    max = len(surnames) - 1
    while not max < min:
        guess = (min + max) // 2
        if (
            surnames[guess] < surnames[guess + 1]
            and surnames[guess] < surnames[guess - 1]
        ):
            return guess
        else:
            if surnames[guess] > surnames[0]:
                min = guess + 1
            elif surnames[guess] < surnames[0]:
                max = guess - 1


# print('rotation', find_rotation_point([6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5]))


def find_rotation_point(surnames):
    # Your code here
    # UNDERSTAND
    # [ 6,   7, 8, 0, 1, 2, 3, 4, 5]
    #           min max
    #           mid
    # [ 7, 0, 1,  2, 3, 4, 5, 6]
    #  min
    # max
    # mid
    # Plan:
    # we should use some kind of a binary search
    # max and min indices
    min = 0
    max = len(surnames) - 1
    # find the middle index
    mid = (min + max) // 2
    # if the middle surname is the rotation point:  (base case)
    # middle surname is rotation if prev element is > than current
    # return the index
    # otherwise:
    # have we rotated yet?
    # we can tell that by comparing to the first element in the array
    first_element = surnames[0]
    while not max <= min:
        current_element = surnames[mid]
        # if current element >= first element: we haven't rotated yet, rotation point is "still ahead of us"
        if current_element >= first_element:
            # search right
            # move the min index to middle + 1
            min = mid + 1
        # else if current element < first element: we have rotated
        else:
            # current_element < first_element
            # search left:
            # move the max index to middle index
            max = mid
    # keep going until max and min cross
    return min


"""
You are a new author that is working on your first book. You are working on a
series of drafts. Each draft is based on the previous draft. The latest draft
of your book has a serious typo. Since each newer draft is based on the
previous draft, all the drafts after the draft containing the typo also include
the typo.
Suppose you have `n` drafts `[1, 2, 3, ..., n]` and you need to find out the
first one containing the typo (which causes all the following drafts to have
the typo as well).
You are given access to an API tool `containsTypo(draft)` that will return
`True` if the draft contains a typo and `False` if it does not.
You need to implement a function that will find the *first draft that contains
a typo*. Also, you have to pay a fee for every call to `containsTypo()`, so
make sure that your solution minimizes the number of API calls.
Example:
Given `n = 5`, and `draft = 4` is the first draft containing a typo.
containsTypo(3) -> False
containsTypo(5) -> True
containsTypo(4) -> True
"""

n = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def firstDraftWithTypo(n):
    # Your code here
    pass
    contains_typo = 4
    min = 0
    max = len(n) - 1
    while not max < min:
        guess = (min + max) // 2
        # if containsTypo were real this line would be:
        # if containsTypo(n[guess]) and not containsTypo(n[guess -1]):
        if n[guess] == contains_typo and n[guess - 1] != contains_typo:
            # resulting in the first occurrence where the typo exists
            return n[guess]
        # if containsTypo were real this line would be:
        # if not containsTypo(n[guess]):
        elif n[guess] < contains_typo:
            min = guess + 1
        else:
            max = guess - 1
    return -1


# print(firstDraftWithTypo(n))

"""
Cookie Monster can eat either 1, 2, or 3 cookies at a time. If he were given a
jar of cookies with `n` cookies inside of it, how many ways could he eat all
`n` cookies in the cookie jar? Implement a function `eating_cookies` that
counts the number of possible ways Cookie Monster can eat all of the cookies in
the jar.
For example, for a jar of cookies with n = 3 (the jar has 3 cookies inside it),
there are 4 possible ways for Cookie Monster to eat all the cookies inside it:
He can eat 1 cookie at a time 3 times
He can eat 1 cookie, then 2 cookies
He can eat 2 cookies, then 1 cookie
He can eat 3 cookies all at once.
Thus, eating_cookies(3) should return an answer of 4.
Can you implement a solution that has a O(n) time complexity and a O(n) space
complexity?
*Note: Since this question is asking you to generate a bunch of possible
permutations, you'll probably want to use recursion for this. Think about base
cases that we would want our recursive function to stop recursing on (when do
you know you've found a "way" to eat the cookies versus when you have not?).*
"""

"""
1
1 once
= 1
********
2
1 twice
2 once
= 2
*********
3
1 1 1 
1 and 2
2 and 1
3 once
********
"""

n = 3


def eating_cookies(n, cache=None):
    # if n < 0:
    #     return 0
    # if n == 0:
    #     return 1
    # return eating_cookies(n-1) + eating_cookies(n - 2) + eating_cookies(n -3)

    # let the cache be 2 longer than n
    cache = [0] * (n + 2)
    print(cache)
    cache[0] = 1
    cache[1] = 1
    cache[2] = 2
    for i in range(3, n + 1):
        print("*******i:", i)
        print(
            f"cache[i]: {cache[i]} = cache[i - 1]: {cache[i - 1]} + cache[i - 2]: {cache[i - 2]} + cache[i - 3]: {cache[i - 3]}"
        )
        cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3]
    return cache[n]


"""
when he has n cookies, he has three options: eat 1 cookie, eat 2 cookie, or eat 3 cookies. So if you go down each of those options, he then has n - x more cookies to eat, and y ways to eat that amount of cookies. So you can basically sum up the number of ways to eat (n-1) cookies + ways to eat (n-2) cookies + ways to eat (n-3) cookies
"""

# print(eating_cookies(n))

"""
Sprint 1
"""

"""
Given a string, remove adjacent duplicate characters.

Example

For s = "aaaaa", the output should be
removeAdjacent(s) = "a";
For s = "abccaaab", the output should be
removeAdjacent(s) = "abcab".
"""


# s = "aaaaa"
# s = "abccaaab"


def removeAdjacent(s):
    # add first letter to new string
    if s == "":
        return s
    new_str = s[0]
    # iterate the string
    for letter in s:
        # if the next letter is the same as previous continue
        if letter == new_str[len(new_str) - 1]:
            continue
        else:
            new_str += letter
    return new_str


# print(removeAdjacent(s))

"""
Write a function to reverse the given string (the input string is given as an array of characters) and return the result.

Note: your solution should be "in-place" with O(1) space complexity. Although many in-place functions do not return the modified input, in this case you should.

Hint: you should try using a "two-pointers approach".

[execution time limit] 4 seconds (py3)

[input] array.char input

[output] array.char
"""

str = "reverse"


def reverse_String(str):
    i, j = 0, len(str) - 1
    print(i, j)
    while i < j:
        str[i], str[j] = str[j], str[i]
        i += 1
        j -= 1
    return str


# print(reverse_String(str))

"""
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
"""

inputString = "aabaa"
# inputString = "abac"
# inputString = "a"
inputString = "hlbeeykoqqqqokyeeblh"


def checkPalindrome(inputString):
    return inputString == inputString[::-1]


# print(checkPalindrome(inputString))

"""
*** Data Structures and Algorithms Sprint ***
---------------------------------------------
"""

"""
*** Reverse Linked List ***
---------------------------

Note: Your solution should have O(l.length) time complexity and O(1) space complexity, since this is what you will be asked to accomplish in an interview.

Given a singly linked list, reverse and return it.

Example

For l = [1, 2, 3, 4, 5], the output should be
reverseLinkedList(l) = [5, 4, 3, 2, 1].
"""


# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def reverseLinkedList(l):
    cur = l
    prev = None
    next = None

    while cur:
        next = cur.next

        cur.next = prev

        prev = cur
        cur = next

    return prev


"""
*** check Blanagrams ***
------------------------
Two words are blanagrams if they are anagrams but exactly one letter has been substituted for another.

Given two words, check if they are blanagrams of each other.

Example

For word1 = "tangram" and word2 = "anagram", the output should be
checkBlanagrams(word1, word2) = true;

For word1 = "tangram" and word2 = "pangram", the output should be
checkBlanagrams(word1, word2) = true.

Since a word is an anagram of itself (a so-called trivial anagram), we are not obliged to rearrange letters. Only the substitution of a single letter is required for a word to be a blanagram, and here 't' is changed to 'p'.

For word1 = "silent" and word2 = "listen", the output should be
checkBlanagrams(word1, word2) = false.

These two words are anagrams of each other, but no letter substitution was made (the trivial substitution of a letter with itself shouldn't be considered), so they are not blanagrams.
"""

word1 = "tangpam"
word2 = "anagram"


def checkBlanagrams(word1, word2):
    if word1 == "" or word2 == "":
        return False
    work_string = ""
    diff = 0
    sort1 = sorted(word1)  # O(n) space O(nlogn) time
    sort2 = sorted(word2)  # O(n) space O(nlogn) time
    for i in range(len(word1)):  # O(n)
        # check for substitutions
        if sort1[i] != sort2[i]:
            diff += 1
        work_string += word1[i]  # O(n) space
    print(work_string)
    print(word1)
    count = 0
    # check if there was more than 1 substitution made
    for i in range(len(work_string)):  # O(n)
        if work_string[i] not in word2:
            count += 1
    print("count:", count)
    # if more than 1 substitution return False
    if count > 1:
        return False
    # if no substitutions return false
    if diff == 0:
        return False
    if sorted(work_string) == sorted(word1):
        return True
    return False


# print(checkBlanagrams(word1, word2))

"""
*** Find value sorted shifted array ***
---------------------------------------
You are given a sorted array in ascending order that is rotated at some unknown pivot (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]) and a target value.

Write a function that returns the target value's index. If the target value is not present in the array, return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
"""

nums = [4, 5, 6, 7, 0, 1, 2]
target = 0


def findValueSortedShiftedArray(nums, target):
    min = 0
    max = len(nums) - 1

    while not max < min:
        guess = (max + min) // 2

        if nums[guess] == target:
            return guess
        elif nums[min] <= nums[guess]:
            if nums[min] <= target < nums[guess]:
                max = guess
            else:
                min = guess + 1
        else:
            if nums[max - 1] >= target > nums[guess]:
                min = guess + 1
            else:
                max = guess

    return -1
