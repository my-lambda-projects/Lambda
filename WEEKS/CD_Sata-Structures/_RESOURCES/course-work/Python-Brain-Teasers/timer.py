class timer:
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        ...

    def __exit__(self, exc_type, exc_value, traceback):
        result = "OK" if exc_type is None else "ERROR"
        print(f"{self.name} - {result}")
        return True


with timer("div"):
    1 / 0
