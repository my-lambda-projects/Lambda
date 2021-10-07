# 24. Write a Python program to check if a number is a Amstrong number or note

number = int(input("Enter a number: "))

temp = number

res = 0

while number > 0:

    digit = number % 10
    res = res + (digit * digit * digit)
    number = number // 10

if res == temp:
    print("Entered number is amstrong!")
else:
    print("Not a amstrong!")
