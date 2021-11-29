def top_k_frequent(words, k):
    """
  Input:
  words -> List[str]
  k -> int
  Output:
  List[str]
  """
    frequency = {}

    for word in words:
        if word in frequency:
            frequency[word] += 1
        else:
            frequency[word] = 1

    sorted_data = sorted(frequency, key=lambda word: (-frequency[word], word))

    return sorted_data[:k]


def helper(word):

    return word


# Tests
print(
    top_k_frequent(
        ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"], 4
    )
)
print(top_k_frequent(["lambda", "school", "rules", "lambda", "school", "rocks"], 2))


# # Output
#
# ['the', 'is', 'cloudy', 'sky']
# ['lambda', 'school']
