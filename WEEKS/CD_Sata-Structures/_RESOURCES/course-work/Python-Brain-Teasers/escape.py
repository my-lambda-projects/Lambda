s1 = "\x61"  # \x - 2 digits
print(s1)  # a

s2 = "\u2122"  # \u - 4 digits (8482 in hex)
print(s2)  # ™

s3 = "\U00002122"  # \U - 8 digits
print(s3)  # ™

s4 = "\N{trade mark sign}"
print(s4)  # ™
