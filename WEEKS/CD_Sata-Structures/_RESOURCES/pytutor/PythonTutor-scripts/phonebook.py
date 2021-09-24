def read_phonebook(filename):
    with open(filename, "r") as f:
        file_context = f.read()
        lst1 = file_context.splitlines()
        d1 = {x.split(",")[0].lstrip(): x.split(",")[1].lstrip() for x in lst1}
        # in here I want to change 01011111111 -> 010-1111-1111

        # split numbers to designated pattern
        nums = [
            "-".join(n)
            for n in [[num[0:3], num[3:7], num[7:]] for name, num in d1.items()]
        ]

        # update the dictionary
        d1 = {name: n for n in nums for name, num in d1.items()}

        # dictionary comprehension is equivalent to for block bellow
        # for name, num in d1.items():
        #     for n in nums:
        #         d1[name] = n

        number = 0
        for n in d1.keys():
            number += 1
        print(number, "people on the list")
        print()

    return d1


def find_phonenumber(phonebook, name):
    for x in phonebook.keys():
        if name == x:
            return phonebook[x] + "\n"
        else:
            return f"{name} is not on the list.\n"


my_phonebook = read_phonebook("phonenumbers.txt")
print("My phonebook:", my_phonebook)
print()
# my_phonebook = {'Alice':'010-1111-2222'}
print(find_phonenumber(my_phonebook, "Alice"))
print(find_phonenumber(my_phonebook, "Bob"))
