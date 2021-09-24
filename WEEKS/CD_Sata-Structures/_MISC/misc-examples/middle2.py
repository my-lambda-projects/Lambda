# lets code up a simple solution

"""
- take 2 pointers label 1 `middle` and 1 to be `end`
- start a loop putting both pointer at the initial node
- while `end` pointer is not `None`
- increment the `end` pointer to the next node
- if the `end` pointer is not none and the `end.next` is not None
- increment the `end` pointer and increment the `middle` pointer to their next node respectively
- When the while loop ends print out the value of the node that the `middle` pointer is pointing to

"""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def add(self, value):
        self.next = Node(value)

    def find_middle(self):
        # pointer to middle
        middle = self

        # pointer to end
        end = self

        # while the end is not none
        while end != None:
            # increment end
            end = end.next
            # in the end is not none
            if end and end.next:
                # increment end
                end = end.next
                # increment middle
                middle = middle.next

        # print the value of the middle
        print(f"Middle Value is {middle.value}")


# (4)->(7)->(m9)->(2)->(12)  e = None -> 9
root = Node(4)

current_node = root

current_node.add(7)

current_node = current_node.next

current_node.add(9)

current_node = current_node.next

current_node.add(2)

current_node = current_node.next

current_node.add(12)

current_node = current_node.next

current_node.add(120)

root.find_middle()
# middle and end are now root
