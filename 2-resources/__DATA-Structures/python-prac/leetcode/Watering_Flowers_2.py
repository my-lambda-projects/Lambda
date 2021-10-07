# https://leetcode.com/discuss/interview-question/394347/
# Watering Flowers 2.0


class Solution:
    def waterPlants(self, plants, capacity1, capacity2):

        if len(plants) == 0:
            return 0

        pointer1 = 0
        pointer2 = len(plants) - 1

        can1 = capacity1
        can2 = capacity2
        count = 2

        while pointer1 != pointer2:
            if can1 >= plants[pointer1]:
                can1 -= plants[pointer1]
                pointer1 += 1
            else:
                can1 = capacity1
                can1 -= plants[pointer1]
                pointer1 += 1
                count += 1

            if can2 >= plants[pointer2]:
                can2 -= plants[pointer2]
                pointer2 -= 1
            else:
                can2 = capacity2
                can2 -= plants[pointer2]
                pointer2 -= 1
                count += 1

            if pointer1 == pointer2:
                if (can1 + can2) >= plants[pointer1]:
                    return count
                else:
                    return count + 1

            elif pointer2 < pointer1:
                return count


if __name__ == "__main__":
    arr = [2, 4, 1, 2]
    c1 = 5
    c2 = 7
    print(Solution().waterPlants(arr, c1, c2))
