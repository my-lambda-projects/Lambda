"""
given a list of tasks associated with their profit and deadline, perform as many tasks as you can to
get the max profit and keep right deadlines in mind.
"""


def jobSeq(profit, deadline):
    """
    :param profit: sorted list represents the profit gained from each task if done.
    :param deadline: unsorted list represents the deadline for each task.
    :return: max profit possible from a set of tasks given their deadline
    """
    free_slots = max(deadline)
    slots = [0] * free_slots
    ans = 0
    for i in range(len(profit)):
        free = deadline[i] - 1
        while (free >= 0) and (slots[free] != 0):
            free -= 1
        if not slots[free]:
            ans += profit[i]
            slots[free] = profit[i]
            free_slots -= 1
        if not free_slots:
            return ans
    return ans


# the profit is a sorted list
profit = [35, 40, 25, 20, 15, 10]
deadline = [3, 4, 4, 2, 3, 1]
print(jobSeq(profit, deadline))
