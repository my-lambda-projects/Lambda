# Given a string text, you need to use the characters of text to form as many instances of the word "lambda" as possible.

# You can use each character in text at most once.

# Write a function that returns the maximum number of instances of "lambda" that can be formed.
# Input: text = "mbxcdatlas"
# Output: 1
# Example 2:

# Input: text = "lalaaxcmbdtsumbdav"
# Output: 2
# Example 3:

# Input: text = "sctlamb"
# Output: 0
# Notes:

# text consists of lowercase English characters only
# [execution time limit] 4 seconds (py3)

# [input] string text

# [output] integer


def csMaxNumberOfLambdas(text):
    sub_string = "lambda"
    lambda_count = {"l": 0, "a": 0, "m": 0, "b": 0, "d": 0, "a": 0}
    counts = []
    for letter in text:
        if letter in lambda_count:
            lambda_count[letter] += 1
    for key, value in lambda_count.items():
        counts.append(value)
    return min(counts)
