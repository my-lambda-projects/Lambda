# dict = data structiors that alow us to store key value pairs

phonebook = {"ADela": 832723, "Tyler": 28362}

if "Herb" in phonebook:
    print("Yes")
else:
    print("no")

phonebook["Herb"] = 6783512873
phonebook["ADela"] = 2222222

del phonebook["Tyler"]

print(phonebook.keys())

for k in phonebook.keys():
    print(k)

print(phonebook.items())
print(phonebook.values())

for key, value in phonebook.items():
    print(key)
    print(value)
