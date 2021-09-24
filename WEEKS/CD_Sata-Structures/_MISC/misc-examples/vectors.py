class Vector2f:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def __add__(self, other):
        v = Vector2f()
        v.x = self.x + other.x
        v.y = self.y + other.y
        return v

    def __mul__(self, other):
        v = Vector2f()
        v.x = self.x * other.x
        v.y = self.y * other.y
        return v

    def __sub__(self, other):
        v = Vector2f()
        v.x = self.x - other.x
        v.y = self.y - other.y
        return v

    def __div__(self, other):
        v = Vector2f()
        v.x = self.x / other.x
        v.y = self.y / other.y
        return v

    def __str__(self):
        return f"X: {self.x}, Y: {self.y}"

    def __repr__(self):
        return f"Vector2f({self.x}, {self.y})"


class Vector3f:
    pass


class Vector4f:
    pass


class Stats:
    def __init__(self, health, attack, defence, stamina, strength, mana, speed):
        self.health = health
        self.attack = attack
        self.defence = defence
        self.stamina = stamina
        self.strength = strength
        self.mana = mana
        self.speed = speed


barbarian_stats = Stats(100, 70, 200, 20, 100, 1, 3)


class Enitity:
    def __init__(self, id, position, stats):
        self.id = id
        self.position = position


class Mob(Entity):
    def __init__(self, position, stats):
        super().__init__(id, position)
        self.stats = stats

    def move(self, x, y):
        self.position.x += x
        self.position.y += y


class Player(Mob):
    def __init__(self, position, stats):
        super().__init__(position, stats)


v1 = Vector2f(12.0, 10.0)
v2 = Vector2f(10.2, 3.9)

v3 = v1 + v2

print(v1)
print(v2)
print(v3)
print(repr(v3))
