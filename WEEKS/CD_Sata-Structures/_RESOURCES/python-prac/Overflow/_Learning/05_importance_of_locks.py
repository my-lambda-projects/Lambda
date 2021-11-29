import threading
from time import sleep


class ValueHolder:
    def __init__(self):
        self._value = 0

    def increment(self):
        v = self._value
        v = v + 1
        sleep(0.1)
        self._value = v

    @property
    def value(self):
        return self._value


vh = ValueHolder()

thread1 = threading.Thread(target=vh.increment, daemon=True)
thread2 = threading.Thread(target=vh.increment, daemon=True)

thread1.start()
thread2.start()
print("Threads all started.")
thread1.join()
thread2.join()
print(vh.value)
print("Done with this.")
