def absolute_value_sum(mylist, x):
    running_sum = 0
    for number in mylist:
        running_sum += abs(number - x)
    return running_sum


def absoluteValuesSumMinimization(a):
    mydict = {}
    for i in range(len(a)):
        mydict[a[i]] = absolute_value_sum(a, a[i])
    return min(mydict, key=mydict.get)
