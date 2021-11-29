class Room:
    def __init__(
        self, id, name, description, n_to=None, s_to=None, e_to=None, w_to=None
    ):
        self.id = id
        self.name = name
        self.description = description
        self.n_to = n_to
        self.s_to = s_to
        self.e_to = e_to
        self.w_to = w_to

    # def __repr__(self):
    #     pass

    # def __str__(self):
    #     pass


class World:
    def __init__(self, rooms=None):
        self.rooms = rooms
        pass

    def move(self, direction):
        pass


entrance = Room(
    0,
    "The Entrance",
    "You are presented with the front door to an old rickety house to the north which looks like it could fall down at any time. A low lit street beacons you to the east, and a deafening sound is comming from the west!",
)
w_rooms = [entrance]
w = World(w_rooms)

print(entrance)
