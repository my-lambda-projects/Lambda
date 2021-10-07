# https://repl.it/student/assignments/515954/model_solution?fromSubmissionId=1910097
# https://piazza.com/class/j63w1pdyopf7kj?cid=91
# https://youtu.be/ZmN9F07PjB0

# Recursive solution that duplicates work
# def make_change(amount, denominations, index=0):
#   # base cases
#   if amount == 0:
#     return 1
#   if amount < 0:
#     return 0
#   # otherwise,
#   if index == len(denominations):
#     return 0
#   # choose a coin
#   coin = denominations[index]
#   # see how many possibilities we can get for each number of times to use coin
#   num_possibilities = 0
#   while amount >= 0:
#     num_possibilities += make_change(amount, denominations, index + 1)
#     amount -= coin
#   return num_possibilities


# Solution that memoizes old solutions
# class Change:
#   def __init__(self):
#     self.memo = dict()

#   def make_change(self, amount, denominations, index=0):
#     # check our memo and short-circuit if we've already solved this one
#     memo_key = str((amount, index))
#     if memo_key in self.memo:
#       return self.memo[memo_key]
#     # base cases: we hit the amount spot on, or we overshot the amount left (user too many coins)
#     if amount == 0:
#       return 1
#     if amount < 0:
#       return 0
#     # we're out of denominations
#     if index == len(denominations):
#       return 0
#     # choose a current coin
#     coin = denominations[index]
#     num_possibilities = 0
#     while amount >= 0:
#       num_possibilities += self.make_change(amount, denominations, index + 1)
#       amount -= coin
#     # save this solution in our memo storage
#     self.memo[memo_key] = num_possibilities
#     return num_possibilities


# Bottom-up approach that doesn't waste old solutions we've solved before
def make_change(amount, denominations):
    ways_of_making_n_cents = [0 for i in range(amount + 1)]
    ways_of_making_n_cents[0] = 1

    for coin in denominations:
        for higher_amount in range(coin, amount + 1):
            higher_amount_remainder = higher_amount - coin
            ways_of_making_n_cents[higher_amount] += ways_of_making_n_cents[
                higher_amount_remainder
            ]

    return ways_of_making_n_cents[amount]
