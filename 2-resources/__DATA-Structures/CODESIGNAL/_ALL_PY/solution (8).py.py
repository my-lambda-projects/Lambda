from collections import Counter


def getLargestString(s, k):
    d = Counter(s)
    ord_s = sorted(d.keys(), reverse=True)
    out = ""
    l_p = 0
    while l_p < len(ord_s):
        if d[ord_s[l_p]] < k:
            out += ord_s[l_p] * d[ord_s[l_p]]
            l_p += 1
            continue
        else:
            out += ord_s[l_p] * k
            d[ord_s[l_p]] -= k
            if d[ord_s[l_p]] > 0:
                if len(ord_s) - l_p > 0 and d[ord_s[l_p + 1]] > 0:
                    out += ord_s[l_p + 1]
                    d[ord_s[l_p + 1]] -= 1
                else:
                    break
    return out


s = "xxzzxx"
print(getLargestString(s, 4))
