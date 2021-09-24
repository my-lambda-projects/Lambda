# in this file we will read in a file and print the lines
import sys

with open("somefile.abc") as f:
    for line in f:
        print(line)
