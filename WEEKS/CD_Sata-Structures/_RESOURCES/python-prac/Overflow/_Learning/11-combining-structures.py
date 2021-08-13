# Sets
# - declare
# - union, intersection, symmetric_difference, difference
# - Examples
# -- unique tags
# -- users taking two actions

posts = [
    {"title": "All About Lists", "tags": ("fun", "informative", "lists")},
    {"title": "Tuple Trouble", "tags": ("fun", "tuples")},
    {"title": "Sparkling Sets", "tags": ("informative", "numbers")},
]

allTags = []
for i in range(len(posts)):
    print(posts[i]["tags"])
    allTags.extend(posts[i]["tags"])

print(allTags)
allTags = list(set(allTags))
allTags.sort()
print(allTags)
