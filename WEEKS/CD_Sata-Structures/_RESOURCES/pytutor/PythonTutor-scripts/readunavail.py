# python tutor
def count_unavailable_info(filename):
    import os
    import pprint

    # read file
    with open(os.path.join(os.getcwd(), filename), "r") as inFile:

        # store data in stack
        data = []

        # split data using delimiter "," every line
        for line in inFile:
            data.extend(line.split(","))

        # check data, can be uncommented
        pprint.pprint(data)

        # # stack for unavailable data (i.e. "0")
        # unavail = []

        # alternative, without using stack
        zeroes = 0

        # check for any data that is unavailable, i.e. "0"
        for item in data:
            # add the condition 'item == "0\n"'
            # to account for zeroes in the end of the line
            # with suffix \n
            if item == "0" or item == "0\n":
                zeroes += 1

        # return number of unavailable data (i.e. "0")
        return zeroes


fn = "data.csv"
print(count_unavailable_info(fn))
