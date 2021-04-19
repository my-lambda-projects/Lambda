# You are given a string s of length n containing only characters a and b. 
# A substring of s called a semi-alternating substring if it does not 
    # contain three identical consecutive characters. 
# Return the length of the longest semi-alternating substring.

# Example 1:  Input: "baaabbabbb"   |   Output: 7
    # Explanation: "aabbabb"
# Example 2:  Input: "abaaaa"   |   Output: 4
    # Explanation: "abaa"

# time complexity:  O(n)
# space complexity:  O(1)

def longest_semialternating_ss(s):
    length = len(s)
    if not s or length == 0:
        return 0
        
    if length < 3:
        return length
    
    beginning = 0
    end = 1
    # first character
    comparison_char = s[0] 
    # count the occurrence of the first char
    count_first_char = 1   
    max_length = 1

    while end < length:
        end_char = s[end]
        if end_char == comparison_char:
            # add one to char count
            count_first_char += 1
            # if char found at least two times
            if count_first_char == 2:
                x = end - beginning + 1
                if x > max_length:
                    max_length = x
            elif count_first_char > 2:
                # reset beginning pointer
                beginning = end - 1  
        else:
            comparison_char = end_char
            count_first_char = 1
            if end - beginning + 1 > max_length:
                max_length = end - beginning + 1
        end += 1
    
    return max_length

# alternate solution
def longest_semi(s):
    max_length = 0
    left = 0
    for right in range(len(s)):
        if right - left + 1 >= 3 and s[right] == s[right-1] == s[right-2]:
            left = right - 1
        max_length = max(max_length, right-left+1)
    return max_length

# 7 
print(longest_semialternating_ss("baaabbabbb"))

# 4
print(longest_semialternating_ss("abaaaa"))