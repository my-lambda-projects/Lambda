"""
Monster Database

Random Sample of 1 Million Monsters
"""
from pymongo import MongoClient
from MonsterFactory import Monster


# Connect
monsters = MongoClient(
    f"mongodb+srv://brokenshell:{input('password: ')}@cluster0-xz3sf.mongodb.net/test?retryWrites=true&w=majority"
).monster_db.monsters

# Create & Push a million monsters
# monsters.insert_many(Monster().get_data() for _ in range(1000000))

# Get 100 CR 1/2 Minions
print()
for monster in monsters.find({"CR": "1/2", "Type": "Minion"}, limit=100):
    print("\n".join(f"{k}: {v}" for k, v in monster.items() if k != "_id"), end="\n\n")
