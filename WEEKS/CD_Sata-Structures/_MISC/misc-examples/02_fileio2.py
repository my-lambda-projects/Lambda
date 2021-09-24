# argv and argc take in command line args
import sys

if len(sys.argv) != 2:
    print("usage: 02_fileio2.py filename")

try:
    # print(sys.argv[1])
    with open("somefile.abc") as f:
        for line in f:
            print(line)

except:
    print("can not find it!")
