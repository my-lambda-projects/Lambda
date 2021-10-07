"""
More Titanic Data

"""
import psycopg2
from module4.creds import cred


cloud = psycopg2.connect(
    dbname=cred.dbname, user=cred.user, password=cred.password, host=cred.host
)
curs = cloud.cursor()

"""
X   How many passengers survived, and how many died?
X   How many passengers were in each class?
X   How many passengers survived/died within each class?

O   What was the average age of survivors vs nonsurvivors?
O   What was the average age of each passenger class?
O   What was the average fare by passenger class? By survival?
O   How many siblings/spouses aboard on average, by passenger class? By survival?
O   How many parents/children aboard on average, by passenger class? By survival?
O   Do any passengers have the same name?

(Bonus! Hard, may require pulling and processing with Python) How many married 
couples were aboard the Titanic? Assume that two people (one Mr. and one Mrs.) 
with the same last name and with at least 1 sibling/spouse aboard are a married 
couple.
"""

curs.execute("SELECT COUNT(*) FROM Titanic;")
passengers = curs.fetchone()[0]
print("\nTotal number of passengers:", passengers)

curs.execute(
    """
SELECT COUNT(*) FROM Titanic
WHERE Survived = 0;
"""
)
deaths = curs.fetchone()[0]
print("Total number of deaths:", deaths)
print("Total number of survivors:", passengers - deaths)

for p_class in range(1, 4):
    curs.execute(
        f"""
    SELECT COUNT(*) FROM Titanic
    WHERE Pclass = %s;
    """,
        (p_class,),
    )
    n_class = curs.fetchone()
    curs.execute(
        """
    SELECT COUNT(*) FROM Titanic
    WHERE Pclass = %s
    AND Survived = 0;
    """,
        (p_class,),
    )
    n_class_dead = curs.fetchone()
    t, d = *n_class, *n_class_dead
    s = t - d
    print(f"Number of Pclass {p_class}: {s}/{t} survived, {d} died")

curs.close()
cloud.close()
