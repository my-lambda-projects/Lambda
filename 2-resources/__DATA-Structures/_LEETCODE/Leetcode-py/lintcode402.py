class Solution:
    """
    @param: A: An integer array
    @return: A list of integers includes the index of the first number and the index of the last number
    """

    def continuousSubarraySum(self, A):
        result = float("-inf")
        sum = 0
        start, end = 0, -1
        output = None
        for i in A:
            if sum < 0:
                sum = i
                start = end + 1
                end = start
            else:
                sum += i
                end += 1
            if sum > result:
                result = sum
                output = [start, end]
        return output
