"""
MongoDB was way easier in general, once it's setup.
It does take a little longer to setup though.
"""
from pymongo import MongoClient
import sqlite3 as sql
from module3.creds import M_PWD


conn = sql.connect("rpg_db.sqlite3")
curs = conn.cursor()
characters = curs.execute(
    "SELECT * FROM charactercreator_character"
).fetchall()

keys = (
    'name', 'level', 'exp', 'hp', 'strength',
    'intelligence', 'dexterity', 'wisdom',
)

db = MongoClient(
    f"mongodb+srv://brokenshell:{M_PWD}@cluster0-xz3sf.mongodb.net/test?retryWrites=true&w=majority"
).rpg_db.characters

db.insert_many(
    {k: v for k, v in zip(keys, char[1:])} for char in characters
)

print(*db.find(), sep='\n')
"""
Stretch Goal: See monsterDB.py
"""
