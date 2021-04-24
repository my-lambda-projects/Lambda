
## Installation

1. Install Postgres and a simple UI 

    ```bash
    brew install postgresql
    # https://youtu.be/xaWlS9HtWYw?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN&t=192
    brew cask install psequel 
    ```

2. Start Postgres
    ```bash
    brew services start postgresql
    ```

3. Initialize the database
    ```bash
    createdb sample_db
    psql sample_db 
    ```

## Creating the first table
https://youtu.be/w4HEVY_GjqY?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN&t=317

[Postgres Dataype Table](https://www.postgresql.org/docs/9.5/static/datatype.html#DATATYPE-TABLE)

```sql
VARCHAR(N) /*Where n is maximum amount of characters that will be stored in the field*/
```

## Delete a table
```sql
DROP TABLE people
```

## Populate data
https://youtu.be/fA0jpjwi4J8?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN

It is possible to insert data with or without fieldnames.

```sql
INSERT INTO people VALUES (3, 'Dave')
INSERT INTO people (id, name) VALUES (3, 'Dave')
```

## SELECT DATA
https://youtu.be/-FPVPcq28r4?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN&t=68


### Get all data
```sql
SELECT * from poeple
```

### Get specific columns
```sql
SELECT first_name, age from poeple
```

### Multiple condition where statement
```sql
SELECT * FROM PEOPLEs
WHERE last_name = 'Backstrom'
AND age < 37
```

### ORDER BY

```sql
SELECT * FROM PEOPLE
WHERE age < 35
ORDER BY age;
```

The order will be ascending by default. To revert the order add the ```DESC``` keyword at the end 
of the ```ORDER BY``` statement, like so: 
```sql
SELECT * FROM PEOPLE
WHERE age < 35
ORDER BY age DESC;
```


SELECT * FROM PEOPLE
WHERE age < 35
ORDER BY Last_name, first_name;

### Update
```sql
UPDATE people
SET age=37
WHERE first_name = 'Joakim'
```

### DELETE
```sql
DELETE FROM people
WHERE first_name = 'Joakim'
```

