# 25. Write a Python Program to chekck whether a given number is strong or not

number = int(input("Enter the number: "))
# store in temp variable
temp = number

# initiate result as 0
res = 0

# while loop for getting individual digits
while number:

    i = 1
    f = 1

    digit = number % 10

    # while loop for factorial
    while i <= digit:
        f = f * i
        i = i + 1
    res = res + f
    number = number // 10

# comparing res and temp
if res == temp:
    print("Entered number is strong!")
else:
    print("Entered number is not strong!")
