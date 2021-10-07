# 16. Write a Python Program to enter a number and display all its factors

number = int(input("Enter the number"))

for i in range(1, number + 1):
    if number % i == 0:
        print(i)
