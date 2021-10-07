# Lists
# - declaration & length
# - accessing items
# - mutable with append, remove
# - sorting
# - sum, min, max

# supplies = ['crayons', 'pencils', 'paper', 'Kleenex', 'eraser']
# print(supplies)

# supplies.append('markers')
# print(supplies)

# supplies.remove('crayons')
# print(supplies)

# supplies.sort()
# print(supplies)

# supplies.sort(key=str.lower)
# print(supplies)

colors = ["red", "orange", "blue", "pink"]
alphabetical = sorted(colors)
print(colors)
print(alphabetical)

alphabetical = sorted(colors, reverse=True)
print(alphabetical)

reverseColors = reversed(colors)
reverseAlpha = reversed(alphabetical)
print(reverseColors)
print(reverseAlpha)
print(list(reverseColors))
print(list(reverseAlpha))
