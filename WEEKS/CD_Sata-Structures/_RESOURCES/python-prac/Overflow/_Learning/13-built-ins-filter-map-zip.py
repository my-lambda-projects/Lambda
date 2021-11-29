# Processing Lists
# - any, all
# - filter
# - map
# - zip
# - custom sort

scores = [90, 86, 75, 91, 62, 99, 88, 90]
print(scores)


def isA(num):
    return num >= 90


aScores = filter(isA, scores)
print(aScores)
print(list(aScores))


def getGrade(num):
    if num >= 90:
        return "A"
    elif num < 90 and num >= 80:
        return "B"
    elif num < 80 and num >= 70:
        return "C"
    elif num < 70 and num >= 60:
        return "D"
    else:
        return "F"


grades = list(map(getGrade, scores))
print(grades)

print("ZIPPED GRADES AND SCORES")
combined = list(zip(scores, grades))
print(combined)
