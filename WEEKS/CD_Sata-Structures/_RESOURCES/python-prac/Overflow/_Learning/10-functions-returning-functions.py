def greeting_maker(salutation):
    print(salutation)

    def greeting(name):
        return f"{salutation} {name}"

    return greeting


# print(salutation) # Error, salutation is not defined at this scope

hello = greeting_maker("Hello")
hiya = greeting_maker("Hiya")

print(hello("Monica"))
print(hello("Raja"))

print(hiya("Raul"))
print(hiya("Tariq"))
