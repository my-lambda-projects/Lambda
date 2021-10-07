#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from sqlalchemy import Column, String, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# :
Base = declarative_base()

# User:
class User(Base):
    # :
    __tablename__ = "user"

    # :
    id = Column(String(20), primary_key=True)
    name = Column(String(20))


# :
engine = create_engine("mysql+mysqlconnector://root:password@localhost:3306/test")
# DBSession:
DBSession = sessionmaker(bind=engine)

# session:
session = DBSession()
# User:
new_user = User(id="5", name="Bob")
# session:
session.add(new_user)
# :
session.commit()
# session:
session.close()

# Session:
session = DBSession()
# Query，filterwhere，one()，:
user = session.query(User).filter(User.id == "5").one()
# name:
print("type:", type(user))
print("name:", user.name)
# Session:
session.close()
