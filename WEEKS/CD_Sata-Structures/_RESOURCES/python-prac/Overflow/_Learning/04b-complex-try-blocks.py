# More complex try blocks
import sys

a = "False"
b = 6
c = 2
try:
    print(len(a))
    print(b / c)
    print(a[47])
except TypeError:
    print(f"{a} has no length")
except ZeroDivisionError as err:
    print(f"Cannot divide by zero! Error: {err}")
except:
    print(f"Uh oh, unknown error: {sys.exc_info()}")
else:
    print("No errors! Nice!")
finally:
    print("Thanks for using the program!")
