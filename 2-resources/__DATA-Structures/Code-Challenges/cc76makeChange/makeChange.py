# cc75 makeChange https://repl.it/student/submissions/1910097
'''
Write a function that, given an amount of money and a list of coin denominations,
returns an integer representing the number of ways that change can be made from
those denominations for the given amount.

For example, given amount = 4 (let's assume 4 cents) and denominations = [1, 2, 3],
your program would return 4, i.e. the number of ways to make 4 cents from the given denominations:

  1) 1, 1, 1, 1
  2) 1, 1, 2
  3) 1, 3
  4) 2, 2

This problem lends itself well to being solved recursively by breaking it down
into smaller subproblems. You can imagine that for each denomination, we can use
it once, twice, three time; as many as it takes to reach or exceed the given
amount with coins of that denomination alone.

For each of those choices of how many times to include coins of each denomination,
we have the subproblem of seeing how many ways we can get the remaining amount
from the remaining denominations.

Here's that logic in pseudocode to help get you started:

function make_change(amount, denominations):
  answer = 0
  for each denomination in denominations:
    for each number_of_times_to_use_denomination in possible_number_of_times_to_use_denomination_without_overshooting:
      answer += make_change(amount_remaining, other_denominations)
  return answer

If you figure out a working solution, think about whether you're duplicating a
lot of work that isn't necessary. How could that be cut down?
'''

def make_change(amount, denominations):
    # # Recursive solution - redundancies
    # # BASE CASE
    # if (amount < 0):
    #     return 0
    # elif (amount == 0):
    #     return 1
    # else:
    #     return sum([make_change(amount - denom, denominations) for denom in denominations])

    # # Iterative solution
    combinations = [1] + [0] * amount
    print('start: ', combinations)
    for denom in denominations:
        print('active denomination: ', denom)
        for i in range(denom, amount + 1):
            print(combinations[i], '+=', combinations[i - denom])
            combinations[i] += combinations[i - denom]
            print('iterate: ', combinations)
    return combinations[amount]

# TEST SUITE
print(make_change(4, [1,2,3]))
print(make_change(5, [1,2,3]))
