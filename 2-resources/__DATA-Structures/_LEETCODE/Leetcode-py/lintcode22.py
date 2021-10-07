class Solution(object):

    # @param nestedList a list, each element in the list
    # can be a list or integer, for example [1,2,[1,2]]
    # @return {int[]} a list of integer
    def flatten(self, nestedList):
        stack = [nestedList]
        result = []
        while stack:
            top = stack.pop()
            if isinstance(top, list):
                stack.extend(top[::-1])
            else:
                result.append(top)
        return result
