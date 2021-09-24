class Entity:
    def __init__(self, id, x, y):
        self.id = id
        self.x = x
        self.y = y

    def __str__(self):
        return f"{self.id}: ({self.x}, {self.y})"


class Mob(Entity):
    def __init__(self, id, x, y, speed):
        super().__init__(id, x, y)
        self.speed = speed

    def move(self, direction):
        if direction == "n":
            self.y -= self.speed
        if direction == "s":
            self.y += self.speed
        if direction == "e":
            self.x += self.speed
        if direction == "w":
            self.x -= self.speed

    def __str__(self):
        return f"{super().__str__()}, {self.speed}"


class Player(Mob):
    def __init__(self, id, name, x, y, speed, hp, atk):
        super().__init__(id, x, y, speed)
        self.name = name
        self.health = hp
        self.attack = atk

    def __str__(self):
        return f"[{self.name}] {super().__str__()}, {self.health}, {self.attack}"


class Tile(Entity):
    def __init__(self, id, x, y, image, solid=False):
        super().__init__(id, x, y)
        self.image = image
        self.solid = solid


m = Mob(0, 12, 10, 1)  # is_a Entity

p = Player(1, "Player 1", 10, 10, 2, 10, 5)

t = Tile(200, 0, 0, "grass.png")

print(m)
print(p)
