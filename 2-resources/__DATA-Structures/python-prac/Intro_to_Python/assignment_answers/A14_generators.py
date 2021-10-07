""" Assignment 14

1. Create a generator or generator expression that will count from zero to 100
by increments of 5.
2. Print the output on one line without casting it to another structure type.
3. What happens when you attempt to print it a second time?

Stretch Goals:
1. Create a generator expression that does the same thing as above but make it
reusable.
2. Prove that your second solution is reusable.
3. Parameterize this solution so that it can count from any number to any
number by any number. The step input should have a default value of 1.
4. What logical problems might occur if no error handling
is implemented? What happens when you feed it strange input?
5. Before you turn in the assignment - comment out any error examples. """


# Answer
my_gen = (i for i in range(0, 101, 5))
print("My Gen 1:", *my_gen)
print("My Gen 2:", *my_gen)  # Nothing is printed.


# Stretch Goals:
my_reusable_gen = lambda: (i for i in range(0, 101, 5))
print("Reusable 1:", *my_reusable_gen())
print("Reusable 2:", *my_reusable_gen())

my_param_gen = lambda begin, end, step=1: (i for i in range(begin, end, step))
print("Param Gen:", *my_param_gen(0, 11, 2))
# Possible logic errors:
# 1. The end number could be smaller than the begin number.
# print('Strange Input 1:', *my_param_gen(10, 0))  # Nothing is printed.
# 2. Strings do not work. Type error.
# print('Strange Input 2:', *my_param_gen('1', '10', '2'))  # Nothing is printed.
# 3. Floats do not work. Type error.
# print('Strange Input 3:', *my_param_gen(1.1, 2.1, 0.1))  # Nothing is printed.
