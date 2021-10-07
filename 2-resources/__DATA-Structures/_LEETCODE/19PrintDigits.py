# 19. Write a Python Program to accept a number and print its digits

number = input("Enter the number: ")

# iterating for individual values
if int(number) < 0:
    print("Please enter a valid positive number: ")
else:
    for i in range(0, len(number)):
        print(number[i])
        i += 1
