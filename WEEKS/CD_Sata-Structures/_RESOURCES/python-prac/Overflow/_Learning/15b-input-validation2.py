# Input Validation
# - prompt
# - handle empty string
# - make it a number
# - handle exceptions
# - require valid input

print("Welcome to birthday calculator. Enter 0 to end.")
age = 1
while age:
    age = input("What's your age? ")
    if age:
        try:
            age = int(float(age))
            if age > 0 and age < 120:
                print(f"Cool! You had {age} birthdays.")
            else:
                print("Out of range. Please try again.")
        except:
            print("Please enter a number")
