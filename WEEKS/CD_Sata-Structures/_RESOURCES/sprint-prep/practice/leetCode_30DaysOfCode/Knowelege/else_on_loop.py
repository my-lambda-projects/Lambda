"""
Use else with a loop (for or while) as no_break found.
It can replace the tasks working with an ind = False and when you hit a case you change the val of ind = True.
"""

for i in range(5):
    print(i)
    if i == 3:
        break
else:
    print("there was no break")
