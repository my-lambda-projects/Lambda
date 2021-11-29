The accepted answer doesn't make any sense to me, since it refers to a bunch of stuff that doesn't seem to exist (`number`, `node`, `len` as a number rather than a function). Since the homework assignment this was for is probably long past, I'll post what I think is the most effective code.

This is for doing a destructive reversal, where you modify the existing list nodes:

```
def reverse_list(head):
    new_head = None
    while head:
        head.next, head, new_head = new_head, head.next, head # look Ma, no temp vars!
    return new_head

```

A less fancy implementation of the function would use one temporary variable and several assignment statements, which may be a bit easier to understand:

```
def reverse_list(head):
    new_head = None  # this is where we build the reversed list (reusing the existing nodes)
    while head:
        temp = head  # temp is a reference to a node we're moving from one list to the other
        head = temp.next  # the first two assignments pop the node off the front of the list
        temp.next = new_head  # the next two make it the new head of the reversed list
        new_head = temp
    return new_head

```

An alternative design would be to create an entirely new list without changing the old one. This would be more appropriate if you want to treat the list nodes as immutable objects:

```
class Node(object):
    def __init__(self, value, next=None): # if we're considering Nodes to be immutable
        self.value = value                # we need to set all their attributes up
        self.next = next                  # front, since we can't change them later

def reverse_list_nondestructive(head):
    new_head = None
    while head:
        new_head = Node(head.value, new_head)
        head = head.next
    return new_head
```
