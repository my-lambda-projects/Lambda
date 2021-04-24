# Converts an enumeration to a printable string.
#
def enumToString(constants, enum, elem):
    all = constants.all_values(enum)
    for e in all.keys():
        if str(elem) == str(all[e]):
            return e
    return "<unknown>"
