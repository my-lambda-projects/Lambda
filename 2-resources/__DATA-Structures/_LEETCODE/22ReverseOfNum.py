# 22. Write a Python Program to display the reverse of a given number

number = input("Enter the number: ")

num_str = []

# iterating for individual values
if int(number) < 0:
    print("Please enter a valid positive number: ")
else:
    for i in range(0, len(number)):

        num_str.append(number[i])

        i += 1

print(list(reversed(num_str)))
