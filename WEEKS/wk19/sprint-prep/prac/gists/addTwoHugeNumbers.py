# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def addTwoHugeNumbers(a, b):
    lst_a = {}
    lst_b = {}
    i = 0
    while a.value != None:
        i += 1
        lst_a[i] = a.value
        if a.next != None:
            a = a.next
        else:
            break
    j = 0
    while b.value != None:
        j += 1
        lst_b[j] = b.value
        if b.next != None:
            b = b.next
        else:
            break

    carry = 0

    ret = [0] * max(i, j)

    for k in range(max(i, j), 0, -1):
        val_a = 0
        val_b = 0
        if i > 0:
            val_a = lst_a[i]
            i -= 1
        if j > 0:
            val_b = lst_b[j]
            j -= 1

        ret[k - 1] = (val_a + val_b + carry) % 10000

        carry = (val_a + val_b + carry) // 10000

    return [carry] + ret if carry > 0 else ret
