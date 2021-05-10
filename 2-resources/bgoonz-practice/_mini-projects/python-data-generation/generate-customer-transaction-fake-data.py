"""
Description:
 Creates 2 tables:
   - customers
   - transactions

Install:
 apt update && apt install python3 python3-pip libmysqlclient-dev -y
 python3 -m pip install mysqlclient

Example Queries:
 select count(*) from shopdb.customers;
 select count(*) from shopdb.transactions;
 select name, IF(matriculated, 'true', 'false') matriculated from shopdb.customers limit 3;
 select name, matriculated, credit_card_num from shopdb.customers where status = 'active' and matriculated = true limit 3;
 select a.name, b.transaction_id, b.product_name, b.spent_total from shopdb.customers as a inner join shopdb.transactions as b on a.credit_card_num = b.credit_card_num where a.credit_card_num = '2340-7058-0559-5835';

Show Database Size:
 SELECT table_schema "DB Name",         ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) "DB Size in MB"  FROM information_schema.tables  GROUP BY table_schema;
"""

import datetime
import random
import MySQLdb

host="172.18.0.1"
user="root"
password="password"
dbname="shopdb"

db = MySQLdb.connect(host, user, password, dbname)

number_of_users = 1000
number_of_transactions_per_user = 10
names = ['ruan', 'stefan', 'james', 'peter', 'silver', 'frank', 'michelle', 'samantha', 'jennifer', 'john', 'frank', 'thomas', 'phill', 'andy', 'bill', 'tom', 'bryan', 'angie', 'nicole', 'jenny', 'penny', 'amber']
surnames = ['smith', 'jacobs', 'james', 'phillips', 'anderson', 'adams', 'marx', 'johnson', 'woods', 'williamson']
countries = ['south africa', 'italy', 'sweden', 'england', 'somoa', 'new york']
job = ['doctor', 'scientist', 'teacher', 'police officer', 'waiter', 'banker', 'it']
os = ['linux', 'windows', 'mac']
banks = ['absa', 'fnb', 'nedbank']
purchase_method = ["credit_card", "debit_card"]

shop_dict = {
    'Edgars': 'Clothing',
    'CNA': 'Stationary',
    'Sportmans Warehouse': 'Sports Equipment',
    'Pick n Pay': 'Groceries',
    'Rage Shoes': 'Shoes',
    'BT Games': 'Games',
    'Dions Wired': 'Electronics',
    'Makro': (
        'Shoes',
        'Clothing',
        'Electronics',
        'Groceries',
        'Stationary',
        'Sports Equipment',
        'Games'
    )
}

city_dict = {
    'Kroonstad': 'Free State',
    'Cape Town': 'Western Cape',
    'Pretoria': 'Gauteng',
    'PE': 'Eastern Cape',
    'Johannesburg': 'Gauteng',
    'Potchefstroom': 'North West',
    'Bloemfontein': 'Free State',
    'Stellenbosch': 'Western Cape',
    'Krugersdorp': 'Gauteng',
    'Somerset West': 'Western Cape',
    'Kimberley': 'Northern Cape',
    'Upington': 'Northern Cape',
    'Klerksdorp': 'North West',
    'Potchefstroom': 'North West',
    'Parys': 'Free State',
    'Gauteng': 'Boksburg'
}

cur = db.cursor()
cur.execute("DROP TABLE IF EXISTS customers")
cur.execute("DROP TABLE IF EXISTS transactions")
cur.execute("CREATE TABLE customers(userid VARCHAR(50), name VARCHAR(50), surname VARCHAR(50), country VARCHAR(50), job VARCHAR(20), age INT(2), matriculated BOOLEAN, credit_card_num VARCHAR(50), status VARCHAR(10))")
cur.execute("CREATE TABLE transactions(credit_card_num VARCHAR(50), transaction_id VARCHAR(50), shop_name VARCHAR(50), product_name VARCHAR(50), spent_total VARCHAR(20), purchase_option VARCHAR(50))")

bunch_users = []
bunch_transactions = []

def gen_id():
    return str(random.randint(0,9999)).zfill(4)

def gen_user(username):
    ccnum = '{0}-{1}-{2}-{3}'.format(gen_id(), gen_id(), gen_id(), gen_id())
    userid = username + '_' + ccnum.split('-')[0] + ccnum.split('-')[2]
    return {"uid": userid, "ccnum": ccnum}

names_cc = []

for name in range(number_of_users):
    names_cc.append(gen_user(random.choice(names)))

for user in names_cc:
    userid = user["uid"]
    name = user["uid"].split('_')[0]
    surname = random.choice(surnames)
    country = random.choice(countries)
    job = random.choice(job)
    age = random.randint(24,49)
    matriculated = random.choice([True, False])
    credit_card_num = user["ccnum"]
    status = random.choice(["active", "inactive", "disabled"])

    bunch_users.append((userid, name, surname, country, job, age, matriculated, credit_card_num, status))

# https://mysqlclient.readthedocs.io/user_guide.html
print("writing customers to database")
cur.executemany(
    """INSERT INTO customers(userid, name, surname, country, job, age, matriculated, credit_card_num, status) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)""",
    bunch_users
)

db.commit()

for each_transaction in range(number_of_transactions_per_user):
    print("writing transaction set {}".format(each_transaction))
    bunch_transactions = []
    for user in names_cc:
        credit_card_num = user["ccnum"]
        transaction_id = random.randint(111111,99999999)
        stores_choice = random.choice(list(shop_dict.keys()))
        if stores_choice == 'Makro':
            category_name = shop_dict[stores_choice][random.randint(0,6)]
        else:
            category_name = shop_dict[stores_choice]

        transaction_price = str(random.randint(29, 800)) + '.' + str(random.randint(0, 99)).zfill(2)
        payment_method = random.choice(purchase_method)

        bunch_transactions.append((credit_card_num, transaction_id, stores_choice, category_name, transaction_price, payment_method))

    cur.executemany(
        """INSERT INTO transactions(credit_card_num, transaction_id, shop_name, product_name, spent_total, purchase_option) VALUES(%s, %s, %s, %s, %s, %s)""",
        bunch_transactions
    )

    db.commit()
db.close()
print("done")

"""
mysql> SELECT table_schema "DB Name",         ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) "DB Size in MB"  FROM information_schema.tables  GROUP BY table_schema;
+--------------------+---------------+
| DB Name            | DB Size in MB |
+--------------------+---------------+
| information_schema |           0.2 |
| mysql              |           7.7 |
| performance_schema |           0.0 |
| shopdb             |        1049.6 |
| sys                |           0.0 |
+--------------------+---------------+
5 rows in set (0.05 sec)

mysql> select count(*) from shopdb.customers;
+----------+
| count(*) |
+----------+
|  1000000 |
+----------+
1 row in set (7.35 sec)

mysql> select count(*) from shopdb.transactions;
+----------+
| count(*) |
+----------+
| 10000000 |
+----------+
1 row in set (1 min 14.75 sec)

mysql> select name, IF(matriculated, 'true', 'false') matriculated from shopdb.customers limit 1;
+--------+--------------+
| name   | matriculated |
+--------+--------------+
| thomas | false        |
+--------+--------------+
1 row in set (0.00 sec)

mysql> select name, matriculated, credit_card_num from shopdb.customers where status = 'active' and matriculated = true limit 1;
+------+--------------+---------------------+
| name | matriculated | credit_card_num     |
+------+--------------+---------------------+
| bill |            1 | 5333-6741-0620-9717 |
+------+--------------+---------------------+
1 row in set (0.00 sec)

mysql> select a.name, b.transaction_id, b.product_name, b.spent_total from shopdb.customers as a inner join shopdb.transactions as b on a.credit_card_num = b.credit_card_num where a.credit_card_num = '5333-6741-0620-9717';
+------+----------------+--------------+-------------+
| name | transaction_id | product_name | spent_total |
+------+----------------+--------------+-------------+
| bill | 30978311       | Shoes        | 710.74      |
| bill | 9627644        | Electronics  | 374.26      |
| bill | 99066639       | Electronics  | 716.29      |
| bill | 21231055       | Groceries    | 83.23       |
| bill | 91881116       | Groceries    | 414.03      |
| bill | 76802100       | Shoes        | 302.90      |
| bill | 44964843       | Games        | 571.37      |
| bill | 75882251       | Groceries    | 276.55      |
| bill | 28531160       | Clothing     | 277.51      |
| bill | 64308938       | Groceries    | 557.96      |
+------+----------------+--------------+-------------+
10 rows in set (1 min 27.09 sec)
"""
