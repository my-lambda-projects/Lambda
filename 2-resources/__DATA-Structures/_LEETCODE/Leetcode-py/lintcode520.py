import bisect
import random


class Solution:
    """
    @param {int} n a positive integer
    @param {int} k a positive integer
    @return {Solution} a Solution object
    """

    @classmethod
    def create(cls, n, k):
        solution = cls()
        solution.ids = {}
        solution.machines = {}
        solution.n = n
        solution.k = k
        return solution

    """
    @param: machine_id: An integer
    @return: a list of shard ids
    """

    def addMachine(self, machine_id):
        ids = []
        for i in range(self.k):
            index = random.randint(0, self.n - 1)
            while index in self.ids:
                index = random.randint(0, self.n - 1)

            ids.append(index)
            self.ids[index] = 0
            ids.sort()
            self.machines[machine_id] = ids
        return ids

    """
    @param: hashcode: An integer
    @return: A machine id
    """

    def getMachineIdByHashCode(self, hashcode):
        machine_id = None
        distance = self.n - 1

        for key, value in self.machines.items():
            index = bisect.bisect_left(value, hashcode) % len(value)
            d = value[index] - hashcode
            if d < 0:
                d += self.n

            if d < distance:
                distance = d
                machine_id = key
        return machine_id
