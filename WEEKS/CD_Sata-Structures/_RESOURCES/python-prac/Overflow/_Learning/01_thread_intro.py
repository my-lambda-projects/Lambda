import threading


def func():
    for _ in range(100):
        print("In the thread.")


thread = threading.Thread(target=func)
thread.start()

for _ in range(100):
    print("In the main program.")
