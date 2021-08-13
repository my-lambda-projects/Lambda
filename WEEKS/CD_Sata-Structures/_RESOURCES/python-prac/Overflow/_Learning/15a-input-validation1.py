# Input Validation
# - prompt
# - handle empty string
# - make it a number
# - handle exceptions
# - require valid input

age = 1
while age:
    age = input("What's your age? ")
    if age:
        try:
            age = int(float(age))
            print(f"Cool! You had {age} birthdays.")
        except:
            print("Please enter a number")
