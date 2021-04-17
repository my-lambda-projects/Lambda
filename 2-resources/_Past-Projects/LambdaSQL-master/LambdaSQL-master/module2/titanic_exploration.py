"""
Titanic Data

"""
import psycopg2
from module2.creds import cred


cloud = psycopg2.connect(
    dbname=cred.dbname,
    user=cred.user,
    password=cred.password,
    host=cred.host,
)

curs = cloud.cursor()

curs.execute("""
SELECT name, age 
FROM Titanic
WHERE Age < 18 and sex = 'female';
""")

print("Kids:", *curs.fetchall(), sep='\n')
