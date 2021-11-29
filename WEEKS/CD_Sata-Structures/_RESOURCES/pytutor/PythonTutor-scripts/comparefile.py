# expected output is 'Line 0:\nabc\n^\n\n'
def singleline_diff(line1, line2):
    shorter_length = min(len(line1), len(line2))
    if line1 == line2:
        return -1
    for i in range(shorter_length):
        if line1[i] != line2[i]:
            return i

    return shorter_length


# print(singleline_diff("abcd", "abcde"))


def singleline_diff_format(line1, line2, idx):
    total = ""
    length1 = len(line1)
    length2 = len(line2)
    shorter_length = min(length1, length2)
    longer_length = max(length1, length2)
    if ("\n" in line1) or ("\n" in line2) or ("\r" in line1) or ("\r" in line2):
        return ""
    if not (0 <= idx <= shorter_length):
        return ""
    for i in range(longer_length):
        if i < idx:
            total = total + "="
    total = total + "^"
    return "{}\n{}\n{}\n".format(line1, total, line2)


# print(singleline_diff_format("abcd", "abef", 2))


def multiline_diff(lines1, lines2):
    list1 = lines1
    list2 = lines2
    shorter_length = min(len(list1), len(list2))
    if list1 == list2:
        return -1, -1
    for i in range(shorter_length):
        if list1[i] != list2[i]:
            return i, singleline_diff(list1[i], list2[i])
    return shorter_length, 0


# print(multiline_diff(['abc', 'def', 'gh'],['abc', 'def']))


def get_file_lines(filename):
    projectfile = open(filename, "rt")
    lines = projectfile.readlines()
    projectfile.close()
    list0 = []
    for line in lines:
        list0.append(line.rstrip())
    return list0


# print(get_file_lines("file1.txt"))


def file_diff_format(filename1, filename2):
    list1 = get_file_lines(filename1)
    list2 = get_file_lines(filename2)

    if list1 == list2:
        return "No differences\n"
    else:
        try:
            op1 = multiline_diff(list1, list2)
            op2 = singleline_diff_format((list1[op1[0]]), (list2[op1[0]]), op1[1])

        except IndexError:
            if not list1:
                return (
                    "Line "
                    + str(op1[0])
                    + ":"
                    + "\n"
                    + "\n"
                    + "^"
                    + "\n"
                    + "".join(list2)
                )

            elif not list2:
                return "Line " + str(op1[0]) + ":" + "\n" + "".join(list1) + "\n" + "^"

        else:
            return "Line " + str(op1[0]) + ":" + "\n" + op2


print(file_diff_format("file8.txt", "file9.txt"))
