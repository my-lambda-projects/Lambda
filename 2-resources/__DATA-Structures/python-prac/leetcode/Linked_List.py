# Linked list is usually a list of nodes. And each node has a "Value" and a "Next"
# where "Next" stores the address of the next node. That is how they can be chained
# together. So a whole Linked List is essentially just chained up Nodes.
# Program for traversal of linked list


class ListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __str__(self):
        node = self
        output = ""
        while node:
            output += str(node.data) + " "
            node = node.next
        return output


def list2linkedlist(l):
    if l == []:
        return None
    head = ListNode(l[0])
    n = head
    for i in range(1, len(l)):
        new = ListNode(l[i])
        n.next = new
        n = n.next
    return head


# Reversing a linked list
def reverse(node):
    prev = None
    curr = node
    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    return prev


if __name__ == "__main__":
    l1 = [1, 3, 5, 7, 9]
    l2 = [2, 4, 6, 8, 10]
    n1 = list2linkedlist(l1)
    n2 = list2linkedlist(l2)
    print(n1)
    print(n2)
    # adding a new node in n1

    print("Lets add a new node in n1")
    newnode = ListNode(1)
    print(newnode)
    newnode.next = n1
    print(newnode)
    print("Deleting from the linked list")
    newnode.next = newnode.next.next
    print(newnode)
    print("Now reversing the linked list")
    print(n1)
    print(reverse(n1))
