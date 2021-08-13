"""
You are given a non-empty list of words.

Write a function that returns the *k* most frequent elements.

The list that you return should be sorted by frequency from highest to lowest.
If two words have the same frequency, then the word with the lower alphabetical
order should come first.

Example 1:

```plaintext
Input:
words = ["lambda", "school", "rules", "lambda", "school", "rocks"]
k = 2

Output:
["lambda", "school"]

Explanation:
"lambda" and "school" are the two most frequent words.
```

Example 2:

```plaintext
Input:
words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
k = 4

Output:
["the", "is", "cloudy", "sky"]

Explanation:
"the", "is", "cloudy", and "sky" are the four most frequent words. The words
are sorted from highest frequency to lowest.
```

Notes:

- `k` is always valid: `1 <= k <= number of unique elements.
- words in the input list only contain lowercase letters.
```
"""


def top_k_frequent(words, k):
    """
    Input:
    words -> List[str]
    k -> int

    Output:
    List[str]
    """
    # Your code here
    new_map = {}
    # count = 0
    for word in words:
        if word in new_map:
            new_map[word] += 1
        else:
            new_map[word] = 1
    print(new_map)
    sorted_items = sorted(
        new_map, key=lambda x: (-new_map[x], x)
    )  # makes it into an array; x is the key in new_map; now we sort by value
    print(sorted_items)
    return sorted_items[:k]


print(top_k_frequent(["lambda", "school", "rules", "lambda", "school", "rocks"], 2))
print(
    top_k_frequent(
        ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"], 4
    )
)


# uper
# input array of strings
# friquency number k
# output needs to be sorted by frequency from highest to lowest
# plan:
# find the frequencies
# then can we get k most frequent
# build a frequency table / dictionary
# start with an empty dictionary
# write a for loop anf set the words as keys and the counts of the words as the value
# if word exists count += 1
# else add it to the dictionary
# dict.items()
# list(dict)
# sort by value
# if they are the same value / equal -> sort by key
