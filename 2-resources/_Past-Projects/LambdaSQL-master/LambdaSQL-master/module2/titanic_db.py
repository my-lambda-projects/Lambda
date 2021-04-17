import psycopg2
import pandas as pd
from psycopg2.extras import execute_values
from module2.creds import cred
from psycopg2.extensions import register_adapter
import numpy as np


url = "https://github.com/BrokenShell/DS-Unit-3-Sprint-2-SQL-and-Databases/raw/master/module2-sql-for-analysis/titanic.csv"

titanic = pd.read_csv(url).rename({
    "Siblings/Spouses Aboard": "SiblingsSpouses",
    "Parents/Children Aboard": "ParentsChildren",
}, axis=1)

titanic['Name'] = titanic["Name"].str.replace("'", "")

cloud = psycopg2.connect(
    dbname=cred.dbname,
    user=cred.user,
    password=cred.password,
    host=cred.host,
)
cursor = cloud.cursor()

cursor.execute("""
DROP TABLE IF EXISTS Titanic;
CREATE TABLE Titanic (
    Survived            INT8,
    Pclass              INT8,
    Name                varchar(120),
    Gender              varchar(10),
    Age                 INT8,
    SiblingsSpouses     INT8,
    ParentsChildren     INT8,
    Fare                FLOAT8);
""")

# for row in titanic.values:
#     cursor.execute(f"""
#     INSERT INTO Titanic
#     (Survived, Pclass, Name, Gender, Age, SiblingsSpouses, ParentsChildren, Fare)
#     VALUES {tuple(row)};
#     """)

# for row in titanic.values:
#     cursor.execute("""
#     INSERT INTO Titanic
#     (Survived, Pclass, Name, Gender, Age, SiblingsSpouses, ParentsChildren, Fare)
#     VALUES %s;
#     """, [tuple(row)])

execute_values(cursor, """
    INSERT INTO Titanic
    (Survived, Pclass, Name, Gender, Age, SiblingsSpouses, ParentsChildren, Fare)
    VALUES %s;
""", [tuple(row) for row in titanic.values])

# register_adapter(np.int64, psycopg2._psycopg.AsIs)
# execute_values(cursor, """
#     INSERT INTO Titanic
#     (Survived, Pclass, Name, Gender, Age, SiblingsSpouses, ParentsChildren, Fare)
#     VALUES %s;
# """, list(titanic.to_records(index=False)))

cloud.commit()

cursor.execute("""
SELECT *
FROM Titanic
LIMIT 1;
""")

print(cursor.fetchall())
