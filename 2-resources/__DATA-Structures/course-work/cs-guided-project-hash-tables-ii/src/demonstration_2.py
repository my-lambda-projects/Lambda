"""
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

```plaintext
Input:
"free"

Output:
"eefr"

Explanation:
'e' appears twice while 'f' and 'r' appear once.
So 'e' must appear before 'f' and 'r'. Therefore, "eerf" is also a valid answer.
```

Example 2:

```plaintext
Input:
"dddbbb"

Output:
"dddbbb"

Explanation:
Both 'd' and 'b' appear three times, so "bbbddd" is also a valid answer.
Note that "dbdbdb" is incorrect, as the same characters must be together.
```

Example 3:

```plaintext
Input:
"Bbcc"

Output:
"ccBb"

Explanation:
"ccbB" is also a valid answer, but "Bbcc" is incorrect.
Note that 'B' and 'b' are treated as two different characters.
```
"""

# Returns count of character in the string


def frequency_sort(s):
    """
    Inputs:
    s -> str

    Output:
    str
   
     """
    # Your code here
    freq_dict = {}
    for ch in s:
        if ch in freq_dict:
            freq_dict[ch] += 1
        else:
            freq_dict[ch] = 1
    items = sorted(freq_dict.items(), key=lambda kv: kv[1], reverse=True)
    string = ""
    for item in items:
        if item[1] != 0:
            string = string + item[0] * item[1]
    return string


print(frequency_sort("dddbbb"))
print(frequency_sort("Bbcc"))
print(frequency_sort("free"))
