import threading
from random import randint
from time import sleep


def func(s):
    print(f"Hello, {s}!")
    sleep_time = randint(0, 3)
    print(f"Sleeping for {sleep_time} seconds")
    sleep(sleep_time)
    print(f"Good-bye, {s}!")


thread1 = threading.Thread(target=func, args=("Judy",))
thread2 = threading.Thread(target=func, args=("Petra",))

thread1.start()
thread2.start()
print("Threads all started.")
