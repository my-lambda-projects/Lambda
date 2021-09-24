# i want make new dictionarys by these rquirements
# All the users whose phone number ends in an 8
# All the users that don't have an email address listed

input_d = [
    {"name": "Todd", "phone": "555-1414", "email": "todd@mail.net"},
    {"name": "Helga", "phone": "555-1618", "email": "helga@mail.net"},
    {"name": "Princess", "phone": "555-3141", "email": ""},
    {"name": "LJ", "phone": "555-2718", "email": "lj@mail.net"},
]


def create_dict(seq):

    output = []

    for d in seq:
        if d["phone"][-1] == "8":
            output.append(d)

        if d["email"] == "":
            output.append(d)

    return output


print(create_dict(input_d))
