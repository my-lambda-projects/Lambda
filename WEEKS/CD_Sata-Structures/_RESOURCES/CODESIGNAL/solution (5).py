# """
# given a string, find and return the len of the max sub_str you can create using two elements of the string only,
# with the condition that any element you choose should alter:
# Ex: aababe
# here a is not a valid char because it doesn't alter, while b and e are valid.
# Ans: 3
# """
#


import re
from collections import Counter


def alternate(s):
    d = Counter(s)
    i = 0
    # validate that each letter is not duplicate next to itself
    while i < len(s):
        if s[i] in d:
            if i + 1 < len(s) and s[i + 1] == s[i]:
                del d[s[i]]
        i += 1
    occ = d.values()
    if len(occ) < 2:
        return 0
    m_1 = max(occ)
    m_2 = 0
    ind = True
    for v in occ:
        if ind and v == m_1:
            ind = False
            continue
        elif m_2 < v <= m_1:
            m_2 = v
    return m_1 + m_2


print(alternate("asdcbsdcagfsdbgdfanfghbsfdab"))
