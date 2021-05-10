from pymongo import MongoClient
from faker import Factory
import time

client = MongoClient('mongodb://user:pass@host.domain.com:27017/db')
db = client.db
def create_names(fake):
    for x in range(10):
        genName = fake.first_name()
        genSurname = fake.last_name()
        genJob = fake.job()
        genCountry = fake.country()
        result = db.col1.insert_one(
            {
                'name': genName,
                'surname': genSurname,
                'job': genJob,
                'country': genCountry
                }
            )
            
        print 'id: ' + str(result.inserted_id) + ' name: ' + genName
        time.sleep(1)
        
if __name__ == '__main__':
    fake = Factory.create()
    create_names(fake)
