# Given a string, what is the minimum number of adjacent swaps required to convert a string into 
    # a palindrome. 
# If not possible, return -1.

'''
Example 1:  Input: "mamad"  | Output:  3
Example 2:  Input: "asflkj" | Output: -1
Example 3:  Input: "aabb"   | Output:  2
Example 4:  Input: "ntiin"  | Output:  1
    Explanation: swap 't' with 'i' => "nitin"
'''

# time complexity:  O(n^2)
# space complexity: O(1)

def min_swap(string):
    # convert string to list
    list_of_string = list(string)
    # check if list_of_string can be palindrome
    odd = 0
    letter = [0] * 26

    for i in list_of_string: 
        # get unicode char of current letter
        unicode_i = ord(i)
        # get unicode char of letter 'a'
        unicode_a = ord('a')
        # get alphabet index
        alphabet_index = unicode_i-unicode_a
        # get current letter count for each letter in string
        letter[alphabet_index] += 1

    for l in letter:
        if l & 1 == 1: 
            odd += 1

    if odd > 1:
        return -1
        
    i, j, res = 0, len(list_of_string) - 1, 0

    while i < j:
        if list_of_string[i] == list_of_string[j]:
            i, j = i + 1, j - 1
            continue
        t = j - 1

        # find same letter with list_of_string[i] from right to left
        while t > i and list_of_string[t] != list_of_string[i]:
            t -= 1

        # if t == i, means this is the only letter in the list_of_string, should be swap to the middle
        # otherwise should be swap to the position of j

        target = len(list_of_string) // 2 if t == i else j

        while t < target:
            # swap
            tmp = list_of_string[t]
            list_of_string[t] = list_of_string[t+1]
            list_of_string[t+1] = tmp
            res, t = res + 1, t + 1

    return res

print(min_swap('racecra'))