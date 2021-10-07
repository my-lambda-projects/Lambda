from threading import Barrier, Semaphore


class H2O:
    def __init__(self):
        self.b = Barrier(3)
        self.h = Semaphore(2)
        self.o = Semaphore(1)

    def hydrogen(self, releaseHydrogen: "Callable[[], None]") -> None:
        with self.h:
            self.b.wait()
            # releaseHydrogen() outputs "H". Do not change or remove this line.
            releaseHydrogen()

    def oxygen(self, releaseOxygen: "Callable[[], None]") -> None:
        with self.o:
            self.b.wait()
            # releaseOxygen() outputs "O". Do not change or remove this line.
            releaseOxygen()
