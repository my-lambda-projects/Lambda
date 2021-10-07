# 26. Write a Python Program to check if the given number is Prime number or not.

number = int(input("Enter the number: "))

# init an empty array
f = []


while number > 0:
    # condition for 0
    if number == 0:
        print("0 is not a prime ")
    # condition for 1
    elif number == 1:
        print("1 is not a prime")
    else:
        # getting factors
        for i in range(1, number + 1):
            if number % i == 0:
                # appending to the array
                f.append(i)
if len(f) > 2:
    print("The number entered is NOT a Prime")
else:
    print("The number entered is a Prime")
