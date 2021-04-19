# Return Strings That Do Not Contain Identical Neighbors

# Consider all words of length N, consisting only of letters "b' and/or "c", 
    # that do not contain two identical neighbouring letters. 
# For example, "aba' is such a word but "abb" is not (two letters "b" occur 
    # next to each other).
# We are interested in finding the K alphabetically smallest words of length 
    # N that do not contain two identical neighbouring letters. 
# For example, the first four words consisting of two letters are: "ab', 
    # "ac•, "ba", "bc•. 
    # All correct two-letters words are: "ab", "ac", "ba•, "bc", "ca•, "cb".

# Find and fix bug(s) in a given implementation of a function:
    
    # class Solution { public String[] solution(int N, int K) }

    # that, given integers N and K, retums an array of strings: the first 
        # K words of the alphabetically sorted sequence of words of length 
        # N, in which no two neighbouring letters are the same. If K is 
        # bigger than the sequence's length, the entire sequence is returned.
    
# Examples:
    # 1 . Given N = 2 and K = 4, the function should retum tab", "ac", "ban, 
        # 'bc'] as explained above.
    # 2. Given N = 3 and K = 20, the function should retum ['aba", •abc", 
        # •aca", •acb", "bab", "bac", 'bca", "bcb', "cab", •cac•, "cba", 
        # "cbcl.
    # 3. Given N = 5 and K = 6, the function should retum ['ababa", "ababc•, 
        # "abaca', "abacb", "abcab", •abcac"].

# The attached code is still incorrect for some inputs. 
# Despite the error(s), the code may produce a correct answer for the 
    # example test cases.
# The goal of the exercise is to find and fix the bug(s) in the 
    # implementation.
# You can modify at most two lines.

# Assume that:
    # N is an integer within the range [1..101;
    # K is an integer within the range [1..100].

# In your solution, focus on correctness.
