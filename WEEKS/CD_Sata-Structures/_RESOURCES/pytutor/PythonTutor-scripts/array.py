def transform_array(array, f):
    """Args; 2D array e.g. [[2,2],[2,2]],
    f = function e.g lambda x: x*2
    return [[4,4], [4,4]]"""

    height = len(array)
    width = len(array[0])

    for col in range(width):
        for row in range(height):
            val = array[row][col]
            array[row][col] = f(val)

    return array


# # test
# # this works
# array = [[2, 2], [2, 2]]


# def f(x): return x * 2


# print(transform_array(array, f))
# try this


# Commentary
# Instead of having to use a function as a parameter (f)
# in transform_array(array, f)
# I want to make a nested function below,
# which substitue parameter f


def num_multiply(array, n):
    """Args; array - 2d Array [[2,2],[2,2]], n = number to
    mulitply with, just want to change the array"""

    def num2(x):
        return n * x

    # return num_multiply(array, n) ?

    return transform_array(array, num2)


# I just want to change my array


# TEST
array = [[1, 1], [-1, -1]]
n = 2
print(num_multiply(array, n))

# Expected changed list is [[2,2], [-2,2]]
