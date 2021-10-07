# Given a string, you need to reverse the order of characters in each
# word within a sentence while still preserving whitespace and initial
# word order.
#
# Example 1:
#
# Input: "Let's take LeetCode contest"
# Output: "s'teL ekat edoCteeL tsetnoc"
#
# Note: In the string, each word is separated by single space and
# there will not be any extra space in the string.


class Solution:
    def reverseStr(self, s):
        strs = s.split(" ")
        newstr = ""

        for word in strs:
            newstr += word[::-1] + " "

        return newstr[:-1]


if __name__ == "__main__":
    sentence = "Let's take LeetCode contest"
    print(Solution().reverseStr(sentence))
