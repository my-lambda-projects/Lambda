# Write a function that reverses a string. The input string is given as an array of characters char[].
# Do not allocate extra space for another array, you must do this by modifying the input array in-place
# with O(1) extra memory.  You may assume all the characters consist of printable ascii characters.
#
# Example 1:
# Input: ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]
# Example 2:
# Input: ["H","a","n","n","a","h"]
# Output: ["h","a","n","n","a","H"]


class Solution:
    def reversefun(self, arr):
        left, right = 0, len(arr) - 1

        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left, right = left + 1, right - 1

        return arr


if __name__ == "__main__":
    strs = ["H", "e", "l", "l", "o"]
    print(Solution().reversefun(strs))
