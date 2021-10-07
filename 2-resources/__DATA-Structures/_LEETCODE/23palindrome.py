# 23. Write a Python Program to check whether a given number is a Palindrome or Not


num = int(input("Enter a number: "))

temp = num

rev_num = 0

while num > 0:
    digits = num % 10
    rev_num = rev_num * 10 + digits
    num = num // 10

if temp == rev_num:
    print("Entered num is a palindrome")
else:
    print("Entered num is not a palindrome")
