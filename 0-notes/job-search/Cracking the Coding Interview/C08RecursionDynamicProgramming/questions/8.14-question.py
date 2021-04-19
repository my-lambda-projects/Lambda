# 8.14 Boolean Evaluation

# Given a boolean expression consisting of the symbols:
    # 0 (false), 1 (true), & (AND), | (OR), ^(XOR)

# AND a desired boolean result value, result, implement a
    # function to count the number of ways of parenthesizing the expression
    # such that it evaluates to result.
# The expression should be fully parenthesized (e.g. ()^())), but not 
    # extraneously (e.g. (((0))^(1))).

# Example
    # countEval("1^0|0|1", false) --> 2
    # countEval("0&0&0&1^1|0", true) --> 10
