# 18. Write a Python Program to find total of all factors of given number.

# get the user input
number = int(input("Enter the number"))

sum = 0

for i in range(1, number + 1):
    if number % i == 0:

        # incrementing sum with factors
        sum = sum + i

print(sum)
