from faker import Factory
from datetime import datetime
from elasticsearch import Elasticsearch
import json

esDomainEndpoint = "http://search-endpoint:80"
es = Elasticsearch(esDomainEndpoint)
def create_names(fake):
    for x in range(100):
        genUname = fake.slug()
        genName = fake.name()
        genJob = fake.job()
        genCountry = fake.country()
        genText = fake.text()
        genProfile = fake.profile()
        go = es.index(
            index="profiles",
            #doc_type="users",
            id=genUname,
            body={
                "name": genName,
                "job": genJob,
                "country": genCountry,
                "notes": genText,
                "profile_details": genProfile,
                "timestamp": datetime.now()
            }
        )
        print(json.dumps(go))
if __name__ == '__main__':
    fake = Factory.create()
    create_names(fake)
