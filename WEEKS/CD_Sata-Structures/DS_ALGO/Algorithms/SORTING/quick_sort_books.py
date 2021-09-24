from book import Book

# Divide a problem in to subproblems (of the same type)
# Solve the subproblems
# Combine the results of the subproblems
# to get the solution to the original problem


def quick_sort(data, low, high):
    # check base case
    # if low is greater than or equal to high
    if low >= high:
        # return the data
        return data
    # otherwise
    else:
        # divide
        pivot_index = low

    # for each element in sub list
    for i in range(low, high):
        # check if data at index is less than data at pivot index
        if data[i].genre < data[pivot_index].genre:
            # double swap to move smaller elements to the correct index
            # move current element to right of pivot
            temp = data[pivot_index + 1]
            data[pivot_index + 1] = data[i]
            data[i] = temp
            # swap the pivot with the element to its right
            temp = data[pivot_index]
            data[pivot_index] = data[pivot_index + 1]
            data[pivot_index + 1] = data[i]
            data[i] = temp

    # conqure
    # quick sort the left
    data = quick_sort(data, low, pivot_index)
    # quick sort the right
    data = quick_sort(data, pivot_index + 1, high)

    # return the data
    return data


b1 = Book("Food for thought", "jon jones", "food")
b2 = Book("My life in reality", "don davis", "life")
b3 = Book("Apples, how you like them?", "stan simpson", "food")
b4 = Book("Just Do It", "shia le boeuf", "inspirational")
b5 = Book("What is this code anyway", "tom jones", "programming")

books = [b1, b2, b3, b4, b5]

for b in books:
    print(b)

quick_sort(books, 0, 5)


print("----------------------------------------------------------")
for b in books:
    print(b)
