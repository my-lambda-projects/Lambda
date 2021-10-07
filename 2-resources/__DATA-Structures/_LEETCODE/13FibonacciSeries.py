# 13. Write a Python Program to display Fibonacci Series upto given number.

# asking user input
number = int(input("Enter the number: "))

# declaring initial values
f1 = 0
f2 = 1

# initializing count
count = 0

# applying condition for fibonacci
if number <= 0:
    print("Enter a valid +ve number: ")
elif number == 1:
    print("FIbonacci series for 1 number is: ", number)
else:
    print("The fibonacci series for the number entered is: ")
    while count < number:
        print(f1, end=" , ")
        fth = f1 + f2

        # now update the values
        f1 = f2
        f2 = fth
        count += 1
