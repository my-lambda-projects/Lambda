"""
MongoDB

Map & Reduce

remember to install dnspython

CRUD
    Create
    Read
    Update
    Delete

"""
from pymongo import MongoClient
import sqlite3 as sql


conn = sql.connect("rpg_db.sqlite3")
curs = conn.cursor()
characters = curs.execute("SELECT * FROM charactercreator_character").fetchall()

keys = ("name", "level", "exp", "hp", "strength", "intelligence", "dexterity", "wisdom")

db = MongoClient(
    "mongodb+srv://brokenshell:8vwd7zWNyvtk4RKN@cluster0-xz3sf.mongodb.net/test?retryWrites=true&w=majority"
).rpg_db.characters

db.insert_many({k: v for k, v in zip(keys, char[1:])} for char in characters)

print(*db.characters.find(), sep="\n")
