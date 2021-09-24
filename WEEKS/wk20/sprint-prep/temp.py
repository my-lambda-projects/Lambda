# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def condense_linked_list(node):

    head = node
    curr_node = head.next

    while curr_node is not None:
        if curr_node.value == head.value:

            curr_node = curr_node.next
            curr_node.next = None

        curr_node = curr_node.next
        head = head.next

    return head

    # curr_node = curr_node.next
    # print(curr_node.value)

    # if curr_node.value == head.value:

    # while tracker_node:
    #     print(tracker_node.value, "tracker")
    #     if tracker_node.value == curr_node.value:
    #         curr_node.next = tracker_node.next.next

    #     tracker_node = tracker_node.next

    # curr_node = curr_node.next

    # return curr_node
