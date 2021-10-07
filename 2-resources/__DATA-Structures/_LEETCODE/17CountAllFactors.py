# 17.Write a Python Program to count all factors of given number.

number = int(input("Enter the number: "))

countOfFactors = 0

for i in range(1, number + 1):
    if number % i == 0:

        countOfFactors += 1

print(countOfFactors)
