# insertion sort

my_book = {"title": "Food for thought", "author": "jon jones", "genre": "food"}


class Book:
    def __init__(self, title, author, genre):
        self.title = title
        self.author = author
        self.genre = genre

    def __str__(self):
        return f"{self.genre}: {self.title} by {self.author}"


b1 = Book("Food for thought", "jon jones", "food")
b2 = Book("My life in reality", "don davis", "life")
b3 = Book("Apples, how you like them?", "stan simpson", "food")
b4 = Book("Just Do It", "shia le boeuf", "inspirational")
b5 = Book("What is this code anyway", "tom jones", "programming")

books = [b1, b2, b3, b4, b5]

# lets get sorting some books
def in_sort(books):
    # loop through len - 1 elements
    for i in range(1, len(books)):
        # code up some logic
        # save current i to a temp var
        temp = books[i]
        j = i
        pass

        # iterate over books looking for title
        while j > 0 and temp.title < books[j - 1].title:
            # shift left until correct tile is found
            books[j] = books[j - 1]
            # decrement j
            j -= 1
        # insert book in correct position
        books[j] = temp

    # return books
    return books


# for b in books:
#     print(b)

# print('---------------------')

# in_sort(books)


# for b in books:
#     print(b)

"""
- **Insertion Sort** is an _in-place_ algorithm, meaning that it 
  does not require any additional memory to perform the sort operation.
- It works by conceptually dividing the array into _sorted_ and _unsorted_ pieces.
    1. Consider element at index 0 to be our  _sorted_ piece. The rest of the array is our _unsorted_ piece.
    2. Save the 1st element in the _unsorted_ piece in a temp variable.
    3. Shift elements in the _sorted_ piece over to the right until we find where the element 
       from step 2 should go.
    4. Insert the element from step 2 into its correct index within the _sorted_ piece.
    5. Repeat steps 2-4 until all elements have been processed.
"""
# a more generic insertion sort


def in_sort2(lst):
    # loop over n - 1 elements
    for i in range(1, len(lst)):
        # save initial element to temp variable
        temp = lst[i]
        # set inner loop index to current index
        j = i
        # inner loop
        while j > 0 and temp < lst[j - 1]:
            # shift left until correct position found
            lst[j] = lst[j - 1]
            # decrement inner index
            j -= 1
        # insert temp at correct position
        lst[j] = temp
    # return our list
    return lst


my_nums = [23, 34, 60, 1, 4, 5, 2]
my_names = ["Dave", "Steve", "Bob"]

print(my_nums)

in_sort2(my_nums)

print(my_nums)

print(my_names)

in_sort2(my_names)

print(my_names)
