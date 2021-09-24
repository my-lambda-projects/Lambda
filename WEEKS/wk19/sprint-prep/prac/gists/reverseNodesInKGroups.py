def reverseList(head, tail):
    prev = None
    while prev != tail:
        prev, prev.next, head = head, prev, head.next
    return prev


def reverseNodesInKGroups(l, k):
    if k < 2:
        return l

    p = ListNode(-1)
    p.next = l
    ret = p
    while True:
        flag = True
        tmp = p
        for i in range(k):
            if tmp.next:
                tmp = tmp.next
            else:
                flag = False
                break

        if flag:
            q = tmp.next
            t = p.next
            reverseList(t, tmp)
            p.next = tmp
            t.next = q
            p = t
        else:
            break

    return ret.next
