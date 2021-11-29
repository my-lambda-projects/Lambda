records = [
    ("Alice", "Engineering"),
    ("Bob", "Sales"),
    ("Carol", "Sales"),
    ("Erin", "Engineering"),
    ("Dave", "Engineering"),
    ("Frank", "Engineering"),
    ("Grace", "Marketing"),
]


def build_index(rec):
    # build the index from the list
    idx = {}

    for r in rec:
        name, dept = r

        if dept not in idx:
            idx[dept] = []

        idx[dept].append(name)

    return idx


idx = build_index(records)

print(idx)
# print all the departments
for i in idx:
    print(i)

# print everyone in Engineering:
idx["Engineering"].sort()
# ['Alice', 'Erin', 'Dave', 'Frank'].sort()
print(f"Engineering: {idx['Engineering']}")
