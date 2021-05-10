from faker import Factory
import time
import random

fake = Factory.create()

destfile = "people-data_" + time.strftime("%s")
year = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']

fo = open(destfile, "a")

for x in xrange(13557):
    fo.write("%s| %s| %s| %s| %s| %s \n" % (random.choice(year), fake.name(), fake.country(), fake.company(), fake.job(), fake.ssn()))

fo.close()

# example:
# Year, Name, Country, Company, SSN
# 2014| Victor Sutton| Turkmenistan| Thomas LLC| Teaching laboratory technician| 707-28-7569
# 2008| Savannah Hogan| Slovakia (Slovak Republic)| Hansen and Sons| Exhibition designer| 373-01-4781
