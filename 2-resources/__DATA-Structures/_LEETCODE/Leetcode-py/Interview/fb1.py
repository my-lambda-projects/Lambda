def cmp_to_key(mycmp):
    "Convert a cmp= function into a key= function"

    class K(object):
        def __init__(self, obj, *args):
            self.obj = obj

        def __lt__(self, other):
            return mycmp(self.obj, other.obj) < 0

        def __gt__(self, other):
            return mycmp(self.obj, other.obj) > 0

        def __eq__(self, other):
            return mycmp(self.obj, other.obj) == 0

        def __le__(self, other):
            return mycmp(self.obj, other.obj) <= 0

        def __ge__(self, other):
            return mycmp(self.obj, other.obj) >= 0

        def __ne__(self, other):
            return mycmp(self.obj, other.obj) != 0

    return K


def mycmp(s1, s2):
    if not s1 and not s2:
        return 0
    if not s1:
        return 1
    if not s2:
        return -1

    l1, l2 = len(s1), len(s2)
    i, j = 0, 0
    while i < l1 and j < l2:
        if s1[i].isdigit() and s2[j].isdigit():
            v1, v2 = 0, 0
            while i < l1 and s1[i].isdigit():
                v1 = v1 * 10 + int(s1[i])
                i += 1
            while j < l2 and s2[j].isdigit():
                v2 = v2 * 10 + int(s2[j])
                j += 1
            if v1 < v2:
                return -1
            if v1 > v2:
                return 1
        else:
            if s1[i] < s2[j]:
                return -1
            if s1[i] > s2[j]:
                return 1
            i += 1
            j += 1
    if i == l1 and j == l2:
        return 0
    return -1 if i == l1 else 1


s = ["ab012b", "ab12a"]
s.sort(key=cmp_to_key(mycmp))
print(s)
