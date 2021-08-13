import threading
from time import sleep


class ValueHolder:
    def __init__(self):
        self._value = 0
        self._lock = threading.Lock()

    # Using Lock.acquire() and Lock.release()
    def increment(self):
        self._lock.acquire()
        # BEGIN CRITICAL SECTION
        v = self._value
        v = v + 1
        sleep(0.1)
        self._value = v
        # END CRITICAL SECTION
        self._lock.release()

    # Using the context manager
    def increment(self):
        with self._lock:
            # BEGIN CRITICAL SECTION
            v = self._value
            v = v + 1
            sleep(0.1)
            self._value = v
            # END CRITICAL SECTION

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
