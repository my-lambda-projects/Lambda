from day4 import Player, Room, Item

running = True
player = Player()


def move(player, direction):
    player.move(direction)


# REPL === Parser
while running:
    cmd = input(">>> ")
    # split the cmd in to commands

    # if commands length is 1
    if cmd in ["n", "s", "e", "w"]:
        move(player, cmd)

    # if commands length is 2
    # get, drop
