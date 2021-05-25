# 2.6 Palindrome

# Implement a function to check if a linked list is a palindrome.


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None
    
    def isPalindrome(self):
        current_head = self.head
        check_if_palindrome = ""

        while current_head:
            check_if_palindrome = check_if_palindrome + str(current_head)
            current_head = self.head.next
            
        length = len(check_if_palindrome)

        for x in range(0, length):
            for y in range(length, 0, -1):
                if check_if_palindrome[x] == check_if_palindrome[y]:
                    check_if_palindrome[1:-1]
                else:
                    return False
        if len(check_if_palindrome) == 1 or len(check_if_palindrome) == 0:
            return True
        
        return False 

