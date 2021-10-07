import threading
from time import sleep
from random import randint


def func(s):
    print(f"Hello, {s}!")
    sleep_time = randint(0, 3)
    print(f"Sleeping for {sleep_time} seconds")
    sleep(sleep_time)
    print(f"Good-bye, {s}!")


thread1 = threading.Thread(target=func, args=("Judy",), daemon=True)
thread2 = threading.Thread(target=func, args=("Petra",), daemon=True)

thread1.start()
thread2.start()
print("Threads all started.")
sleep(1)
print("Done with this.")
