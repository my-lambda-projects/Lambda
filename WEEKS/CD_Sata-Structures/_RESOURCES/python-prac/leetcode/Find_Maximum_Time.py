# You are given a string that represents time in the format hh:mm. Some of the digits are blank
# (represented by ?). Fill in ? such that the time represented by this string is the maximum
# possible. Maximum time: 23:59, minimum time: 00:00. You can assume that input string is always valid.
#
# Example 1:
#
# Input: "?4:5?"
# Output: "14:59"
# Example 2:
#
# Input: "23:5?"
# Output: "23:59"
# Example 3:
#
# Input: "2?:22"
# Output: "23:22"
# Example 4:
#
# Input: "0?:??"
# Output: "09:59"
# Example 5:
#
# Input: "??:??"
# Output: "23:59"


class Solution:
    def findMax(self, time):
        arr = []
        for c in time:
            arr.append(c)

        if arr[0] == "?":
            if arr[1] <= "3" or arr[1] == "?":
                arr[0] = "2"
            else:
                arr[0] = "1"
        if arr[1] == "?":
            if arr[0] <= "1":
                arr[1] = "9"
            else:
                arr[1] = "3"

        if arr[3] == "?":
            arr[3] = "5"
        if arr[4] == "?":
            arr[4] = "9"
        maxtime = ""
        for x in arr:
            maxtime += x
        return maxtime


if __name__ == "__main__":
    times = [
        "23:5?",
        "2?:22",
        "0?:??",
        "1?:??",
        "?4:??",
        "?3:??",
        "??:??",
        "?4:5?",
        "?4:??",
        "?3:??",
        "23:5?",
        "2?:22",
        "0?:??",
        "1?:??",
        "?4:0?",
        "?9:4?",
    ]

    for time in times:
        print(time + "  => " + Solution().findMax(time))
