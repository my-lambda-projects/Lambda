"""
1- filter(fun, par) basically get all the values that evaluates to true
"""
nums = [1, 2, 3, 4, 5, 6, 7]
# get all positive value, (x % 2 == 0) is true for all positive values
pos_val = list(filter(lambda x: x % 2 == 0, nums))
print(pos_val)

names = ["AHMED", "mohamed", "khaled"]
# get all element with upper case in the list
upper_names = list(filter(lambda name: name.isupper(), names))
print(upper_names)

"""
2- map(fun, iterable), applies the fun to every val in the iterable 
"""
str_nums = ["1", "2", "3", "4"]
int_nums = list(map(int, str_nums))
print(int_nums)

# convert grades to pass, fail
grades = [70, 50, 20, 40]
final = list(
    map(lambda x: "pass" if x > 50 else "fail" if x > 30 else "FUCKED UP", grades)
)
print(final)

"""
write documentation for my function 
"""


def grades_state(*args, **kwargs):
    """
    grades_state(grades) --> takes in students grades and returns the state of the grade, pass, fail, fucked up.
    :param grades: a list of integers represents the students grades
    :return: a string that represents the state of the student
    """
    for grade in args:
        print(grade)
    print(kwargs)


print(grades_state.__doc__)
grades_state(*[1, 2, 3, 4, 5], ahmed=10)
