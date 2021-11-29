#
"""
"""


# end_pymotw_header
try:
    import gnureadline as readline
except ImportError:
    import readline

readline.parse_and_bind("tab: complete")
readline.parse_and_bind("set editing-mode vi")

while True:
    line = input('Prompt ("stop" to quit): ')
    if line == "stop":
        break
    print("ENTERED: {!r}".format(line))
