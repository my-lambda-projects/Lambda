# Lists
# - declaration & length
# - accessing items
# - mutable with append, remove
# - sorting
# - sum, min, max

scores = [159, 210, 188, 76]
print(scores)

teamScore = sum(scores)
print(teamScore)

highestScore = max(scores)
print(highestScore)

lowestScore = min(scores)
print(lowestScore)

averageScores = sum(scores) / len(scores)
print(averageScores)

rankedScores = sorted(scores, reverse=True)
print(rankedScores)
