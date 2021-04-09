import psycopg2
import sqlite3 as sql


# connection = psycopg2.connect(
#     dbname="rphzklxx",
#     user="rphzklxx",
#     password="J0i83etc3hsiBVaNQ5F999zzJJcFxluM",
#     host="rajje.db.elephantsql.com",
#     port="5432",
# )
# curs = connection.cursor()
# curs.execute("""
# CREATE TABLE test_table (
#     id      SERIAL PRIMARY KEY,
#     name    varchar(40) NOT NULL,
#     data    JSONB
# );
# """)
# connection.commit()
# curs.execute("""
# INSERT INTO test_table (name, data) VALUES
# (
#     'A row name',
#     null
# ),
# (
#     'Another row with JSON',
#     '{"a":1, "b":2, "c":3}'::JSONB
# );
# """)
# connection.commit()
# curs.execute("SELECT * FROM test_table;")
# print(*curs.fetchall(), sep='\n')

""" Cloud ETL Pipe,  SQL -> Postgres """

""" Extract """
conn = sql.connect("rpg_db.sqlite3")
curs = conn.cursor()
# print(curs.execute("""
# SELECT COUNT(*) FROM charactercreator_character;
# """).fetchall())
characters = curs.execute("""
SELECT * FROM charactercreator_character
""").fetchall()

""" Transform """
# info = curs.execute("""
# PRAGMA table_info(charactercreator_character);
# """)
# print(info)

""" Load """
cloud = psycopg2.connect(
    dbname="rphzklxx",
    user="rphzklxx",
    password="J0i83etc3hsiBVaNQ5F999zzJJcFxluM",
    host="rajje.db.elephantsql.com",
    port="5432",
)
cloud_curs = cloud.cursor()
cloud_curs.execute("""
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
""")
cloud.commit()
for character in characters:
    cloud_curs.execute(f"""
    INSERT INTO charactercreator_character
    (name, level, exp, hp, strength, intelligence, dexterity, wisdom)
    VALUES {character[1:]};
    """)
cloud.commit()
