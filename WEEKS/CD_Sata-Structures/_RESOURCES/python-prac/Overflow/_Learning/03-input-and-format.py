# Simple Input and Formatted Printing
# - Prompt for input()
# - Formatted printing 4 ways

name = input("What is your name?\n")

print("Hi, " + name + ".")
print("Hi, %s." % name)
print("Hi, {fname} {lname}.".format(lname="Doe", fname="John"))
print(f"Hi, {name}.")
