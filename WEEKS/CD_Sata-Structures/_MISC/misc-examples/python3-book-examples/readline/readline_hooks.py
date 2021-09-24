#
"""
"""


# end_pymotw_header
try:
    import gnureadline as readline
except ImportError:
    import readline


def startup_hook():
    readline.insert_text("from startup_hook")


def pre_input_hook():
    readline.insert_text(" from pre_input_hook")
    readline.redisplay()


readline.set_startup_hook(startup_hook)
readline.set_pre_input_hook(pre_input_hook)
readline.parse_and_bind("tab: complete")

while True:
    line = input('Prompt ("stop" to quit): ')
    if line == "stop":
        break
    print("ENTERED: {!r}".format(line))
