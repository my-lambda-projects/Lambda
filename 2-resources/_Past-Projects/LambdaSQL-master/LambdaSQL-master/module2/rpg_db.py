""" Cloud ETL Pipe,  SQL -> Postgres """
import psycopg2
import sqlite3 as sql
from module2.creds import cred


""" Extract """
conn = sql.connect("rpg_db.sqlite3")
curs = conn.cursor()
characters = curs.execute(
    """
SELECT * FROM charactercreator_character
"""
).fetchall()

""" Transform """
info = curs.execute(
    """
PRAGMA table_info(charactercreator_character);
"""
)
print(info)

""" Load """
cloud = psycopg2.connect(
    dbname=cred.dbname, user=cred.user, password=cred.password, host=cred.host
)
cloud_curs = cloud.cursor()
cloud_curs.execute(
    """
CREATE TABLE charactercreator_character (
    character_id    SERIAL PRIMARY KEY,
    name            varchar(30),
    level           INT,
    exp             INT,
    hp              INT,
    strength        INT,
    intelligence    INT,
    dexterity       INT,
    wisdom          INT
);
"""
)
cloud.commit()
for character in characters:
    cloud_curs.execute(
        f"""
    INSERT INTO charactercreator_character
    (name, level, exp, hp, strength, intelligence, dexterity, wisdom)
    VALUES {character[1:]};
    """
    )
cloud.commit()
