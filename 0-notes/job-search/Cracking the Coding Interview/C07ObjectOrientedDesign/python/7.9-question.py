# 7.9 Circular Array

# Implement a CircularArray class that supports an array-like data 
    # structure which can be efficiently rotated.
# If possible, the class should use a generic type (also called a 
    # template) and should support iteration via the standard for
    # (Obj o:  circularArray) notation.

# CircularArray
    # items, head
    # convert (index), rotate (shift_right), get (i), set(i, item)

class CircularArray:
    def __init__(self, head, items=[]):
        self.items = items
        self.head = head
    
    def convert(self, index):
        if index == 0:
            index += self.items.length

    def rotate(self, shift_right):
        head = self.convert(shift_right)
    
    def get(self, i):
        if i < 0 or i >= self.items.length:
            return "error"
        item_index = self.convert(i)
        return items[item_index]

    def set(self, i, item):
        item_index = self.convert(i)
        items[item_index] = item
        