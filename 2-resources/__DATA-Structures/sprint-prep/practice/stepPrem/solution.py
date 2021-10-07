def stepPerms(n):
    """
    given n number of stairs, determine the total number of ways to climb the
    stairs if you can take 1, 2, or 3 steps at a time
    """
    if n < 0:
        return 0
    if n == 0:
        return 1
    else:
        return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)


memo = {}


def stepPermsDP(n):
    """
    given n number of stairs, determine the total number of ways to climb the
    stairs if you can take 1, 2, or 3 steps at a time
    """
    if n in memo:
        return memo[n]
    if n < 0:
        return 0
    if n == 0:
        return 1
    else:
        f = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)
    memo[n] = f
    return f


print(stepPermsDP(20))
print(stepPerms(20))
