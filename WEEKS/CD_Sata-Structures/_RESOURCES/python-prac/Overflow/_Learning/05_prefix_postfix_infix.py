# In order to convert an expression, no matter how complex, to either prefix or postfix
# notation, fully parenthesize the expression using the order of operations. Then move
# the enclosed operator to the position of either the left or the right parenthesis
# depending on whether you want prefix or postfix notation.

#    Infix expression	     Prefix expression	    Postfix expression
# 1.  A + B * C + D           + + A * B C D	         A B C * + D +
# 2. (A + B) * (C + D)        * + A B + C D	         A B + C D + *
# 3.  A * B + C * D           + * A B * C D	         A B * C D * +
# 4.  A + B + C + D           + + + A B C D	         A B + C + D +

#        1.     (A + B) * C - (D - E) * (F + G)
#                           |
#            (((A + B) * C) - ((D - E) * (F + G)))
#              /                              \
# Pre: (- + A B C * - D E + F G)   Post: (A B + C * D E - F G + * -)
# ----
# Note: Only the operators change position during conversion

# Conversion Steps - Assume infix expression is a string of tokens delimited by spaces
# - Operator Tokens: *, /, +, -, (, )
# - Operand Tokens: Single character identifiers such as A, B, C...
# - Postfix:
#    1. Create empty stack for operators and create empty list for output
#    2. Convert the input infix string to a list by using 'split' method
#    3. Scan the token list from left to right:
#       3a. If token == operand, append to output list
#       3b. If token == '(', push onto operation stack
#       3c. If token == ')', pop operation stack until '(' is removed.
#            Then append each operator to the end of output list
#       3d. If token == operator, push onto operation stack
#            However, first remove any operators already on stack that have
#            higher or equal precedence and append them to output list
#    4. When input is processed, check operation stack.  Any stragglers can
#        be removed and appended to the end of the output list

import operator

PRECEDENCE = {"*": 3, "/": 3, "+": 2, "-": 2, "(": 1}
CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
DIGITS = set("0123456789")
LEFT_PAREN = "("
RIGHT_PAREN = ")"


def infix_to_postfix(infix_expression):
    operation_stack = []
    postfix = []
    tokens = infix_expression.split()

    for token in tokens:
        if token in CHARACTERS or token in DIGITS:
            postfix.append(token)
        elif token == LEFT_PAREN:
            operation_stack.append(token)
        elif token == RIGHT_PAREN:
            top_token = operation_stack.pop()
            while top_token != LEFT_PAREN:
                postfix.append(top_token)
                top_token = operation_stack.pop()
        else:
            # backslash allows us to continue on next line in same statement
            # append higher precedence first
            while operation_stack and (
                PRECEDENCE[operation_stack[-1]] >= PRECEDENCE[token]
            ):
                postfix.append(operation_stack.pop())
            operation_stack.append(token)
    while operation_stack:
        postfix.append(operation_stack.pop())
    print(" ".join(postfix))
    return " ".join(postfix)


print(infix_to_postfix("A * B + C * D"))  # => 'A B * C D * +'
print(infix_to_postfix("( A + B ) * C - ( D - E ) * ( F + G )"))
# => 'A B + C * D E - F G + * -'
print(infix_to_postfix("( A + B ) * ( C + D )"))  # => 'A B + C D + *'
print(infix_to_postfix("( A + B ) * C"))  # => 'A B + C *'
print(infix_to_postfix("A + B * C"))  # => 'A B C * +'

# Evaluate Postfix
#  Whenever an operator is seen on the input, the two most recent operands will
#  be used in the evaluation.
#  Consider: 4 5 6 * +:
#   1. You encounter 4 and 5, but don't know what to do until we see the next symbol
#      Placing each on the stack ensures they're available if an operator comes next
#       - In this case, the next symbol is another operand, so we push and check the
#         next symbol
#   2. Now we see an operator(*), which means the two most recent operands need to be
#      used in a multiplication operation
#        - By popping the stack twice, we can get the proper operands and perform
#   3. We can now handle this result by placing it back on the stack so it can be used
#      as an operand for the later operators in the expression
#   4. When the final operator is processed, there will be only one value left on stack
#   5. Pop and return it as the result of the expression

# Pseudocode - Assume expression is a string of tokens delimited by spaces and an int
#  1. Create empty operand stack
#  2. Convert string to list with split
#  3. Scan token list from left -> right
#     - If token is an operand, convert it from string to int and push on stack
#     - If token is an operator(*,/,+,-), it will need two operands
#        - First pop = second operand, Second pop = first operand
#        - Perform arithmetic operation and push result back to operand stack
#  4. When input expression is processed, result is on stack, pop stack and return

# To assist with the arithmetic, we importer the handy operator module from the Python
# standard library to specify functions that will take two arguments and return the
# result of the proper arithmetic operation.


OPERATION = {
    "*": operator.mul,
    "/": operator.truediv,
    "-": operator.sub,
    "+": operator.add,
}


def evaluate_postfix(postfix_expression):
    operand_stack = []

    for token in postfix_expression.split():
        if token in DIGITS:
            operand_stack.append(int(token))
        else:
            b = operand_stack.pop()
            a = operand_stack.pop()
            result = OPERATION[token](a, b)
            operand_stack.append(result)
    return operand_stack.pop()


print(evaluate_postfix("7 8 + 3 2 + /"))  # => 3.0
print(evaluate_postfix(infix_to_postfix("2 + ( 1 * 4 ) - 1 ")))
