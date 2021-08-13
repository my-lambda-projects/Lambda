class Solution:
    def find(self, arr):
        dic = {}
        for num in arr:
            dic[num] = dic.get(num, 0) + 1
        for num in arr:
            if dic[num] == 1:
                return num


if __name__ == "__main__":
    arr = [2, 2, 3, 4, 2, 3, 4, 1, 5, 5, 6, 6]
    print(Solution().find(arr))
