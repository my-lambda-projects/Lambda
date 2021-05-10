from faker import Factory
import random
import time

fake = Factory.create()

years = ["2005", "2006", "2007", "2008", "2009"]
destfile = "people-data-2009_" + time.strftime("%s") + '.json'

for x in xrange(5500000):
    fo = open(destfile, "a")
    fo.write("{\"yr\": \"" + str(random.choice(years)) + "\", \"name\": \"" + str(fake.name()) + "\", \"country\": \"" + str(fake.country()) + "\", \"job\": \"" + str(fake.job()) + "\"} \n")
    fo.close()
