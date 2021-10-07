"""
Unit 3 Sprint 2 SQL Module 1
Part 2 Creating a Database
"""
import sqlite3 as sql
import pandas as pd


connection = sql.connect("buddymove_holidayiq.sqlite3")
curs = connection.cursor()

buddy = pd.read_csv(
    "https://github.com/BrokenShell/DS-Unit-3-Sprint-2-SQL-and-Databases/raw/master/module1-introduction-to-sql/buddymove_holidayiq.csv"
)
buddy.to_sql("review", con=connection, index=False)

print("\nNumber of rows:", *curs.execute("SELECT COUNT(*) FROM review;").fetchone())

nature_and_shopping = """
SELECT COUNT(*) FROM review
WHERE Nature > 100
AND Shopping > 100;
"""
print("\nBoth Nature & Shopping > 100:", *curs.execute(nature_and_shopping).fetchone())

print("\nAverages (Stretch Goal):")
cols = ["Sports", "Religious", "Nature", "Theatre", "Shopping", "Picnic"]
print(
    "\n".join(
        [
            f"{col}: {curs.execute(f'SELECT AVG({col}) FROM review;').fetchone()[0]:.2f}"
            for col in cols
        ]
    )
)
