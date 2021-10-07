# 20. Write a Python Program to accept a number and count number of digits.

number = input("Enter a Number: ")

count = 0

if int(number) < 0:
    print("Please enter a valid positive number")

else:
    for i in range(0, len(number)):

        count += 1

        i += 1
    print("The number of digits is:", count)
