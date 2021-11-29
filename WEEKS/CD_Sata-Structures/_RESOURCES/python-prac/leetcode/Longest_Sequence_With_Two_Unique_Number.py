# Longest Sequence with two unique numbers


class Solution:
    def findSequence(self, arr):
        last_num = -1
        second_last_num = -1
        last_num_count = 0
        current_max = 0
        maximum = 0

        for num in arr:
            if num == last_num or num == second_last_num:
                current_max += 1
            else:
                current_max = last_num_count + 1

            if num == last_num:
                last_num_count += 1
            else:
                last_num_count = 1
                second_last_num = last_num
                last_num = num
            maximum = max(current_max, maximum)
        return maximum


if __name__ == "__main__":
    arr = [1, 3, 5, 3, 1, 3, 1, 5]
    print(Solution().findSequence(arr))
    arr = [1, 1, 6, 5, 6, 6, 1, 1, 1, 1]
    print(Solution().findSequence(arr))
