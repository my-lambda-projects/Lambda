# lets parse some numbers
# argv and argc take in command line args
import sys

import sys

if len(sys.argv) != 2:
    print("usage: 02-fileio.2.py <filename>")
    sys.exit(1)
try:
    with open(sys.argv[1]) as f:
        for line in f:
            # split the comment out
            comment_split = line.split("#")

            num = comment_split[0].strip()

            if num == "":
                continue

            i_num = int(num, 2)

            print(f"{i_num:08b}: {i_num:d}")
except FileNotFoundError:
    print("file not found!!!")
    sys.exit(2)
