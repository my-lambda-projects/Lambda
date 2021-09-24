# argv and argc take in command line args
import sys

if len(sys.argv) != 2:
    print("usage: 02-fileio02.py <filename>")
    sys.exit(1)


try:
    with open(sys.argv[1]) as f:
        for line in f:
            print(line)
except FileNotFoundError:
    print(f"{sys.argv[0]}: {sys.argv[1]} not found")
