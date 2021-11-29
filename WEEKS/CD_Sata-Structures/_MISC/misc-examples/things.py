class Thing:
    def __init__(self, x, y, name):
        self.x = x
        self.y = y
        self.name = name


t = Thing(12, 34, "dave")

print(vars(t))  # {'x': 12, 'y': 34, 'name': 'dave'}
