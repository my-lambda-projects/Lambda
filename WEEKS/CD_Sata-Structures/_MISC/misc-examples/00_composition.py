# lets do some composition and inheritance

# entity


class Entity:
    def __init__(self, id, x, y):
        self.id = id
        self.x = x
        self.y = y

    def __str__(self):
        return f"{self.id}: position({self.x}, {self.y})"


class Mob(Entity):
    def __init__(self, id, x, y, speed):
        super().__init__(id, x, y)
        self.speed = speed

    def move(self, dir):
        if dir == "n":
            self.y -= self.speed
        elif dir == "s":
            self.y += self.speed
        elif dir == "w":
            self.x -= self.speed
        elif dir == "e":
            self.x += self.speed

    def __str__(self):
        return f"{super().__str__()} {self.speed}mph"


e = Entity(0, 10, 10)
m = Mob(1, 10, 20, 2)

# adventure


class Room:
    def __init__(self, name, description):
        self.name = name  # has_a name (String)
        self.description = description  # has_a description (String)
        self.contents = []  # make a space to put items of some sort has_a ?


class Item:
    def __init__(self):  # what things could this have / properties ?
        pass


# Weapon is_a Item
class Weapon(Item):
    def __init__(self):  # what properties would we use here?
        pass


# Treasure is_a Item
class Treasure(Item):
    def __init__(self):  # what properties could you have in this init function?
        pass


# player
class Player:
    def __init__(self, starting_room):
        self.current_room = starting_room
        self.inventory = []  # has_a relationship (Items?)
        self.gold = 0  # has_a number

    def move(self, direction):
        # check if the current room has direction_to
        # return the current room at the direction to
        # otherwise
        # Tell the player they can not go that way
        pass

    def pick_up(self):  # what could we pass in to this function?
        # TODO: how would you pick an item up?
        # Think of Instances of objects...
        pass

    def drop(self):  # what would you pass in here?
        # TODO: how would you drop an item?
        # think again of instances and how to delete an object...
        pass
