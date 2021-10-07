from threading import Thread
from time import sleep


def printer():
    for i in range(3):
        print(i, end=" ")
        sleep(0.1)


thr = Thread(target=printer, daemon=True)
thr.start()
print()  # Add newline
