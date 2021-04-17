import sqlite3 as sql


connection = sql.connect("rpg_db.sqlite3")
print(*connection.execute("""
SELECT cc.name, ai.name
FROM charactercreator_character AS cc, armory_item AS ai,
charactercreator_character_inventory AS cci
WHERE cc.character_id = cci.character_id
AND ai.item_id = cci.item_id
LIMIT 10;
"""), sep='\n', end='\n\n')

# Creates a database
conn = sql.connect("toy_db.sqlite3")
# Adds a cursor
curs = conn.cursor()
# Creates a Table - don't do this more than once!!!
query = """
CREATE TABLE toy (name varchar(30), size int);
"""
curs.execute(query)

# Creates 2 Columns inside the Table and populates the first row.
query = """
INSERT INTO toy (name, size)
VALUES ("Awesome", 27);
"""
curs.execute(query)
# Commits Changes and closes the cursor
curs.close()
conn.commit()
# Gets new cursor
curs = conn.cursor()
# Makes selection and prints the results
#   Should be `("Awesome", 27)`
query = """
SELECT * FROM toy;
"""
print(*curs.execute(query), sep='\n')
