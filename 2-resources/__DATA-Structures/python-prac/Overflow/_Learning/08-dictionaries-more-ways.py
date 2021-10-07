# Dictionaries
# - mapping iterable
# - declare
# - add/remove items
# - loop through all items
# - dict()
# - zip()
# - dir()
# - duck typing revisited

pond = dict(depth=10, area="210 square feet", fish=["Mary", "Bob", "Billy"])
print(pond)

alligator = dict(
    [
        ("lifespan", 50),
        ("length", 3.4),
        ("lengthUnits", "m"),
        ("species", ["American Alligator", "Chinese Alligator"]),
        (
            "funFact",
            "As an alligator's teeth are worn down, they are replaced. "
            + "An alligator can go through 3,000 teeth in a lifetime.",
        ),
    ]
)
print(alligator)

keys = ["name", "home runs", "strikeouts", "rbi"]
values = ["Babe Ruth", 7214, 1330, 2214]
player = dict(zip(keys, values))
print(player)

print(dir(player))
