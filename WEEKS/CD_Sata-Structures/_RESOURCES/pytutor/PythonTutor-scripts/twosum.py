# find the index location of two numbers in given list that sum to target
class twoSum:
    def twoSum(self, nums: list, target: int):
        self.nums = nums
        self.target = target

        result = []
        for i in range(len(nums)):
            for j in range(1, len(nums)):
                if nums[i] + nums[j] == target:
                    #  returns the index tuple
                    result.append((i, j))

        #  If target in list
        if len(result) > 0:
            return result

        return 0


sol = twoSum()
input_list = [1, 3, 2, 4, 7, 5]
tar = 7
print(sol.twoSum(input_list, tar))
