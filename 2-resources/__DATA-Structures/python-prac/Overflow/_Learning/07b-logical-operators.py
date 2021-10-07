# Logical Operators
# We use the keywords 'and', 'or', and 'not' in Python instead of &&, ||, and !
print(True and False)  # > False
print(True or False)  # > True
print(True and not False)  # > True

# Grouping Conditions
# Parentheses can group our conditions, just like JavaScript
print(False and (True or True))  # > False
print((False and True) or True)  # > True

# Short Circuiting
# If we can already determine the overall outcome of a compound conditional
# Python will not bother evaluating the rest of the statement
False and print(
    "not printed"
)  # False and (anything else) is always False, so the print is not evaluated
False or print(
    "printed #1"
)  # Cannot determine overall value so we have to evaluate the right side
True and print(
    "printed #2"
)  # Cannot determine overall value so we have to evaluate the right side
True or print(
    "not printed"
)  # True or (anything else) is always True, so the print is not evaluated

# JavaScript use case of short circuiting
# const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
