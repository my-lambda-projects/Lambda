class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = (
            None
        )  # a variable to call to the next node/pointer/another instance of this class


def add_to_head(head, value):
    # create the new node
    new_node = LinkedListNode(value)
    # link up the nodes
    new_node.next = head
    return new_node  # the start of the linked list/the first node now


def add_to_next(current_node, value):
    # create new node
    new_node = LinkedListNode(value)
    next_node = current_node.next
    # current node points to new node
    current_node.next = new_node
    new_node.next = next_node


def add_to_tail(tail, value):
    # create new node
    new_node = LinkedListNode(value)
    # linked the new node to the tail
    tail.next = new_node
    return new_node  # the end of the linked list


# def print_list(start_node):
#     if start_node is None:
#         return
#     print(start_node.value)
#     print_list(start_node.next)


def print_list(start_node):
    curr_node = start_node

    while curr_node is not None:
        print(curr_node.value)
        # update curent node to next
        curr_node = curr_node.next


linked_list = LinkedListNode(
    3
)  # or head also this is a new instance of the class LinkedListNode
tail = linked_list

linked_list = add_to_head(linked_list, 2)
linked_list = add_to_head(linked_list, 5)
middle = linked_list
linked_list = add_to_head(linked_list, 6)
linked_list = add_to_head(linked_list, 0)
linked_list = add_to_head(linked_list, 2)

add_to_tail(tail, 12)
# print(linked_list.value)
# print(linked_list.next.value)
print(type(linked_list))

add_to_next(middle, 7)
# print(middle.value)
# print(tail.value)

print_list(linked_list)
