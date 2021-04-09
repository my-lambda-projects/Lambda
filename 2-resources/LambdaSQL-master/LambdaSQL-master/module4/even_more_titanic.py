import psycopg2
from module4.creds import cred


def psyco_q(query):
    pg_conn = psycopg2.connect(
        dbname=cred.dbname,
        user=cred.user,
        password=cred.password,
        host=cred.host,
    )
    pg_curs = pg_conn.cursor()
    pg_curs.execute(query)
    result = pg_curs.fetchall()
    pg_curs.close()
    return result


# How many passengers survived, and how many died?
query1 = "SELECT count(Survived) FROM Titanic WHERE Survived = 1;"
query2 = "SELECT count(Survived) FROM Titanic WHERE Survived = 0;"
# How many passengers were in each class?
query3 = "SELECT Pclass,count(*) FROM Titanic GROUP BY Pclass;"
# How many passengers survived/died within each class?
query4 = "SELECT Pclass,count(*) FROM Titanic WHERE Survived = 1 GROUP BY Pclass;"
query5 = "SELECT Pclass,count(*) FROM Titanic WHERE Survived = 0 GROUP BY Pclass;"
# What was the average age of survivors vs nonsurvivors?
query6 = "SELECT avg(Age) FROM Titanic WHERE Survived = 1;"
query7 = "SELECT avg(Age) FROM Titanic WHERE Survived = 0;"
# What was the average age of each passenger class?
query8 = "SELECT Pclass,avg(Age) FROM Titanic WHERE Survived = 1 GROUP By Pclass;"
# What was the average fare by passenger class? By survival?
query9 = "SELECT Pclass,avg(Fare) FROM Titanic GROUP BY Pclass;"
query10 = "SELECT Survived,avg(Fare) FROM Titanic GROUP BY Survived;"
# How many siblings/spouses aboard on average, by passenger class? By survival?
query11 = "SELECT Pclass,avg(SiblingsSpouses) FROM Titanic GROUP BY Pclass;"
query12 = "SELECT Survived,avg(SiblingsSpouses) FROM Titanic GROUP BY Survived;"
# How many parents/children aboard on average, by passenger class? By survival?
query13 = "SELECT Pclass,avg(ParentsChildren) FROM Titanic GROUP BY Pclass;"
query14 = "SELECT Survived,avg(ParentsChildren) FROM Titanic GROUP BY Survived;"
# Do any passengers have the same name?
query15 = "SELECT Name,count(*) FROM Titanic GROUP BY Name HAVING count(Name) > 1;"
# (Bonus! Hard, may require pulling and processing with Python) How many married couples were aboard the Titanic?
# Assume that two people (one Mr. and one Mrs.) with the same last name and with at least 1 sibling/spouse aboard
# are a married couple.


print(f'Question 1 - Survived: {psyco_q(query1)[0][0]}, Died: {psyco_q(query2)[0][0]}')
print(f'Question 2 - Passengers per class: {psyco_q(query3)}')
print(f'Question 3 - Survived(Per Class):{psyco_q(query4)} Died(Per Class):{psyco_q(query5)}')
print(f'Question 4 - Average Age Survivors:{psyco_q(query6)} Died:{psyco_q(query7)}')
print(f'Question 5 - Average Age Per Class:{psyco_q(query8)}')
print(f'Question 6 - Average Fare Per Class:{psyco_q(query9)}\n\t Average Fare per Survival:{psyco_q(query10)}')
print(f'Question 7 - Average SS Per Class:{psyco_q(query11)}\n\t Average SS per Survival:{psyco_q(query12)}')
print(f'Question 8 - Average PC Per Class:{psyco_q(query13)}\n\t Average PC per Survival:{psyco_q(query14)}')
print(f'Question 9 - Same Name:{psyco_q(query15)}')

married_females = psyco_q("""
SELECT Name, count(*)
FROM Titanic
WHERE Name LIKE 'Mrs.%'
GROUP BY Name
""")
married_names = {name[0].split(' ')[-1] for name in married_females}
all_names = psyco_q(f"""
SELECT Name
FROM Titanic
""")
last_names = [name[0].split(' ')[-1] for name in all_names]
married_couples = []
for name in married_names:
    if last_names.count(name) >= 2:
        married_couples.append(name)
print(f'Estimated Number of Married Couples: {len(married_couples)}')
