#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sqlite3

# SQLite
# test.db
# ，:
conn = sqlite3.connect("test.db")
# Cursor:
cursor = conn.cursor()
# SQL，user:
cursor.execute("create table user (id varchar(20) primary key, name varchar(20))")
# SQL，:
cursor.execute("insert into user (id, name) values ('1', 'Michael')")
# rowcount:
print("rowcount =", cursor.rowcount)
# Cursor:
cursor.close()
# :
conn.commit()
# Connection:
conn.close()

# ：
conn = sqlite3.connect("test.db")
cursor = conn.cursor()
# :
cursor.execute("select * from user where id=?", "1")
# :
values = cursor.fetchall()
print(values)
cursor.close()
conn.close()
