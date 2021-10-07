"""
Unit 3 Sprint 2 SQL Module 1
Part 1 Querying a Database
"""
import statistics
import sqlite3 as sql
from collections import defaultdict


# Connect to local database
connection = sql.connect("rpg_db.sqlite3").cursor()
# connection.row_factory = sql.Row

# How many total Characters are there?
total_characters = connection.execute(
    """
SELECT COUNT(*) FROM charactercreator_character;
"""
).fetchall()
print(f"Number of characters: {total_characters[0][0]}\n")

# How many of each specific subclass?
clerics = connection.execute("SELECT COUNT(*) FROM charactercreator_cleric;").fetchall()
fighters = connection.execute(
    "SELECT COUNT(*) FROM charactercreator_fighter;"
).fetchall()
mages = connection.execute("SELECT COUNT(*) FROM charactercreator_mage;").fetchall()
necros = connection.execute(
    "SELECT COUNT(*) FROM charactercreator_necromancer;"
).fetchall()
thieves = connection.execute("SELECT COUNT(*) FROM charactercreator_thief;").fetchall()
classes = {
    "Clerics": clerics,
    "Fighters": fighters,
    "Mages": mages,
    "Necromancers": necros,
    "Thieves": thieves,
}
print("\n".join(f"{k}: {v[0][0]}" for k, v in classes.items()), end="\n\n")

# How many total Items?
items = connection.execute(
    """
SELECT COUNT(*) FROM armory_item;
"""
).fetchall()[0][0]
print(f"Number of items: {items}\n")

# How many of the Items are weapons? How many are not?
weapons = connection.execute(
    """
SELECT COUNT(*) FROM armory_item, armory_weapon
WHERE armory_item.item_id = armory_weapon.item_ptr_id;
"""
).fetchall()[0][0]
print(f"Number of weapons: {weapons}")
print(f"Number of non-weapon items: {items - weapons}\n")

# How many Items does each character have?
items_by_char = connection.execute(
    """
SELECT cc.name, ai.name
FROM charactercreator_character AS cc, armory_item AS ai,
charactercreator_character_inventory AS cci
WHERE cc.character_id = cci.character_id
AND ai.item_id = cci.item_id;
"""
)
d = defaultdict(int)
for char in items_by_char:
    d[char[0]] += 1
print("Number of items per character: (first 20)")
print("\n".join(f"{k}: {v}" for k, v in list(d.items())[:20]), end="\n\n")

# How many Weapons does each character have?
weapons_by_char = connection.execute(
    """
SELECT cc.name
FROM charactercreator_character AS cc, armory_weapon AS aw,
charactercreator_character_inventory AS cci
WHERE cc.character_id = cci.character_id
AND aw.item_ptr_id = cci.item_id;
"""
)
dw = defaultdict(int)
for char in weapons_by_char:
    dw[char[0]] += 1
print("Number of weapons per character: (first 20)")
print("\n".join(f"{k}: {v}" for k, v in list(dw.items())[:20]), end="\n\n")

# On average, how many Items does each Character have?
print(f"Average number of items per character: {statistics.mean(d.values()):.2f}")

# On average, how many Weapons does each character have?
print(f"Average number of weapons per character: {statistics.mean(dw.values()):.2f}")

# Another approach:
ipc = connection.execute(
    """
SELECT count(cci.item_id), count(distinct cc.name)
FROM charactercreator_character AS cc, armory_item AS ai,
charactercreator_character_inventory AS cci
WHERE cc.character_id = cci.character_id
AND ai.item_id = cci.item_id;
"""
)
n_items, n_chars = ipc.fetchall()[0]
print(f"Average number of items per character: {n_items / n_chars:.2f}")

wpc = connection.execute(
    """
SELECT count(cci.item_id), count(distinct cc.name)
FROM charactercreator_character AS cc, armory_weapon AS aw,
charactercreator_character_inventory AS cci
WHERE cc.character_id = cci.character_id
AND aw.item_ptr_id = cci.item_id
"""
)
n_items, n_chars = wpc.fetchall()[0]
print(f"Average number of weapons per character: {n_items / n_chars:.2f}")


# And yet another, with zeros
wpc2 = connection.execute(
    """
SELECT c.character_id, c.name, count(distinct w.item_ptr_id)
FROM charactercreator_character AS c
LEFT JOIN charactercreator_character_inventory AS inv ON c.character_id = inv.character_id
LEFT JOIN armory_weapon AS w ON w.item_ptr_id = inv.item_id
GROUP BY 1
"""
)
print()
print(*wpc2.fetchall(), sep="\n")
