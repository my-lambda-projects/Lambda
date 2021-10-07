# Dictionaries
# - mapping iterable
# - declare
# - add/remove items
# - loop through all items
# - dict()
# - zip()
# - dir()
# - duck typing revisited

book = {
    "title": "Goodnight Moon",
    "ratings": 7492,
    "stars": 4.8,
    "author": {"firstName": "Margaret", "lastName": "Wise Brown"},
    "images": ["goodnight1.png", "goodnight2.png"],
}
print(book)

print(len(book))

del book["stars"]
print(book)

book["stars"] = 4.8
print(book)

for i in book:
    print(i, book[i])
