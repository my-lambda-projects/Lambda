#
"""
"""


# end_pymotw_header
import importlib.machinery

SUFFIXES = [
    ("Source:", importlib.machinery.SOURCE_SUFFIXES),
    ("Debug:", importlib.machinery.DEBUG_BYTECODE_SUFFIXES),
    ("Optimized:", importlib.machinery.OPTIMIZED_BYTECODE_SUFFIXES),
    ("Bytecode:", importlib.machinery.BYTECODE_SUFFIXES),
    ("Extension:", importlib.machinery.EXTENSION_SUFFIXES),
]


def main():
    tmpl = "{:<10}  {}"
    for name, value in SUFFIXES:
        print(tmpl.format(name, value))


if __name__ == "__main__":
    main()
