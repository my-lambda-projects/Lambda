# Longest Substring Without 3 Contiguous Occurrences of Letter

# Given a string s containing only a and b, find longest substring of s such that 
    # s does not contain more than two contiguous occurrences of a and b.

## time complexity:  O(n)
## space complexity:  O(1)

'''
Example 1:  Input: "aabbaaaaabb"   |   Output: "aabbaa"
Example 2:  Input: "aabbaabbaabbaa"   |   Output: "aabbaabbaabbaa"
'''
def longest_substring(s):
    # initialize final string
    final_string = ""
    length = len(s)
    x = 0
    # loop through s
    while len(s) >= 2:
        beginning = s[0]
        middle = s[1]
        if len(s) > 2:
            end = s[2]
        # if current index + 1 != value of current index 
        if beginning != middle:
            # add value of current index to final string
            final_string = final_string + beginning
        # if current index + 1 == value of current index 
        elif beginning == middle:
            # check current index + 2 
            # if current index + 2 == value of current index
            if beginning == end:
                # add value of current & current + 1 to final string
                final_string = final_string + beginning + middle
                # return string
                return final_string
            # if current index + 2 != value of current index
            else: 
                # add value of current & current + 1 to final string
                final_string = final_string + beginning + middle
                # add 1 to index
                s = s[2:]
        elif len(s) == 2:
            final_string = final_string + beginning + middle
    # return string
    return final_string

## aabbaa
print(longest_substring("aabbaaaaabb"))
## aabbaabbaabbaa
print(longest_substring("aabbaabbaabbaa"))
