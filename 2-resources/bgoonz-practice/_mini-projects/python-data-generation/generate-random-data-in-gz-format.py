import os
import gzip
import random
import time

name = ['james', 'stefan', 'steve', 'frank', 'paul', 'jamey', 'stephan', 'paul']

for y in xrange(1000):
    destfile = "people-data_" + str(random.randint(1,10000)) + "-" + time.strftime("%s")
    fo = open(destfile, "a")
    for x in xrange(10000):
        fo.write("%s, %s" % (str(random.randint(1,10000000)), random.choice(name)) + "\n")

    fo.close()

    f_in = open(destfile)
    f_out = gzip.open('./' + destfile + '.gz', 'wb')
    f_out.writelines(f_in)
    f_out.close()
    f_in.close()
    os.remove(destfile)
