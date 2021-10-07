# 21. Write a Python Program to find sum of digits of a number

number = input("Enter a Number: ")

sum = 0

if int(number) < 0:
    print("Please enter a valid positive number")

else:
    for i in range(0, len(number)):

        sum += int(number[i])

        i += 1

    print("The sum of digits is:", sum)
