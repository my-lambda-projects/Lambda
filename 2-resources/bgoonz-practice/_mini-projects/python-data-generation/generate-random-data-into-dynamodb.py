import boto.dynamodb2
from boto.dynamodb2.table import Table
from boto.dynamodb2.fields import HashKey
from boto.regioninfo import RegionInfo
from boto.dynamodb2.layer1 import DynamoDBConnection
from faker import Factory
import uuid
import time

try:
    sessions = Table(
        table_name='usertable',
        schema=[HashKey('id')],
        connection=DynamoDBConnection(
        region=RegionInfo(name='eu-west-1',
                          endpoint='dynamodb.eu-west-1.amazonaws.com')
        ))

except:
    print("connection not successful")

def create_session():
    id = str(uuid.uuid4())
    timestamp = time.strftime("%Y%m%d%H%M%S")
    ipv4 = Factory.create().ipv4()
    users_id = Factory.create().slug()
    users_name = Factory.create().first_name()
    users_surname = Factory.create().last_name()
    res = sessions.put_item(data={
        'username': id,
        'data': {
            'user_id': users_id,
            'name' : users_name,
            'surname' : users_surname,
            'ip': str(ipv4),
            'datetime': timestamp
        }
    })

    print('Created: ' + str(res))

if __name__ == '__main__':

    for x in range(20):
        create_session()
