def fileNaming(names):
    """
    Since two files cannot have equal names, 
    the one which comes later will have an addition 
    to its name in a form of (k), where k is the smallest 
    positive integer such that the obtained name is not 
    used yet. Return an array of names that will be given 
    to the files.
    """
    new_file_names = []
    for name in names:
        if name in new_file_names:
            k = 1
            while "{}({})".format(name, k) in new_file_names:
                k += 1
            name = "{}({})".format(name, k)
        new_file_names.append(name)
    return new_file_names
