# O(1) constant time!
def print_one_item(items):
    print(items[0])


# liniar O(n)
def print_every_item(items):
    for item in items:
        print(item)


# n = number of steps

# quadratic O(n^2)
def print_pairs(items):
    for item_one in items:
        for item_two in items:
            print(item_one, item_two)


def do_a_bunch_of_stuff(items):
    last_idx = len(items) - 1  # O(1)
    middle_idx = len(items) / 2  # O(1)
    idx = 0  # O(1)

    for item in items:
        print(item)  # O(1)

    for item in items:
        for item in items:
            print(item, item)

    while idx < middle_idx:  # O(n/2) = O(1/2 * n) = O(n)
        print("s")
        idx = idx + 1


# ADD em
# O(n) + O(n^2) + O(n) + O(4)
# == O(n^2) + O(n) + O(1)
# O(n^2) is the most significant one = total run time

# Big O = the worst thing that could happen
