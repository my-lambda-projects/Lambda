# a basic mock adventure to demonstrat the idea of class interactions
from room import Room
from player import Player

outside = Room(
    "Outside", "This room is outside you see some castle entrance to the north"
)
castle = Room(
    "Castle",
    "You have entered the castle and see a starway to the east and a large door to the north",
)
treasure_room = Room(
    "TreasureRoom",
    "you have found the treasure room here you have only an exit to the south",
)
landing = Room(
    "Landing",
    "This is a broken old landing in the castle and only has exits west down the stairs",
)

outside.n_to = castle
castle.s_to = outside
castle.e_to = landing
castle.n_to = treasure_room
landing.w_to = castle

# print(hasattr(outside, "e_to"))
playing = True


player = Player("Dave the Adventurer", outside)

while playing:
    # Print out some room data
    print(player.current_room)
    print("\n")

    # READ in some input
    cmd = input(" >>> ")

    # EVAL the command from the input
    # if cmd == "n":
    #     print("moving North")
    # elif cmd == "s":
    #     print("moving South")
    # elif cmd == "e":
    #     print("moving East")
    # elif cmd == "w":
    #     print("moving West")
    if cmd in ["n", "s", "e", "w"]:
        print(f"moving {cmd}")
    elif cmd == "q":
        playing = False
        print("goodbye!")
    else:
        print(f"I do not understand {cmd}")
