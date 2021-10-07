"""
922. Sort Array By Parity II
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 

Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
"""


class Solution:
    def sortArrayByParityII(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """

        # declaring two empty arrays, one for even
        # one for odd numbers
        A1 = []
        A2 = []

        # output array
        result = []

        # diving each elements in A with 2 to see
        # if the number is even or odd
        for i in A:

            if i % 2 == 0:
                A1.append(A[i])
            else:
                A2.append(A[i])

        # appending the first two elements to the result array
        result.append(A1[0])

        result.append(A2[0])

        # checking remaining elements to append into result
        while i > 1:

            if i % 2 == 0:
                result.append(A1[i])

            else:
                result.append(A2[i])

        return result
