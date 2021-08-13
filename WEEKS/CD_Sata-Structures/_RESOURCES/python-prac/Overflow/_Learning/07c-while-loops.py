# While loops follow a very similar structure to JavaScript
i = 0
while i < 5:
    print(f"{i+1}. Hello, world.")
    i += 1

# The 'continue' keyword goes to the next loop
# The 'break' keyword exits out of the loop completely
i = 0
while True:
    print(f"{i+1}. Hello, world.")
    if i < 4:
        i += 1
        continue
    print("You've printed 5 times. Goodbye.")
    break
