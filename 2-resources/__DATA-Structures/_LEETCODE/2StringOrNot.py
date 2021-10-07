# 2. Write a Python Program to check if a given number is String or Not

x = input("Enter the input which has to be checked: ")

try:
    val = int(x)
    print("Entered value is an Integer")
except:
    print("Entered value is a String")
