class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        result = [0] * num_people
        give = 0
        given_candies = 0
        while given_candies < candies:
            result[give % num_people] += min(candies - given_candies, give + 1)
            give += 1
            given_candies += give
        return result
