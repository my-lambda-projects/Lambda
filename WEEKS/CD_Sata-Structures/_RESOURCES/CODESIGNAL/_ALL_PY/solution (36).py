def amendTheSentence(s):
    out_s = s[0].lower()
    for char in s[1:]:
        if char.islower():
            out_s += char
        else:
            out_s += " " + char.lower()
    return out_s


s = "AHMm"
print(amendTheSentence(s))
