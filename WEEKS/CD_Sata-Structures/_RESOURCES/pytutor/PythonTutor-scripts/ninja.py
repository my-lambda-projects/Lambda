import random


def try_tutorial():
    print("You have the following elements available to you!")
    el_list = ["fire", "water", "snow"]
    for i in el_list:
        user_inp = input("What elements would you like to play: ")
        if user_inp == "fire":
            print("Well Done, you have played fire")
        if user_inp == "water":
            print("Well done, you have played water")
        if user_inp == "snow":
            print("you have unleashed the snow jitsu in you.")


def jitsu_tutorial():
    print("First the elements that you can play are only these few:")
    el_list = ["fire", "water", "ice"]
    for i in el_list:
        print(i)
    print(
        "You can win by elements: fire beats snow, snow beats water and water beats fire"
    )
    print(
        "You get it? Now, you can challenge our very own sensei and herbert the polar bear!"
    )
    print("Let's try!")
    try_tutorial()
    print("Now that you have managed to try and play the elements, let's head back!")


class SM:
    def start(self):
        self.state = self.start_state  # set state as startState

    def step(self, input):
        # print("Step function called")
        (next_state, output) = self.get_next_values(self.state, input)
        self.state = (
            next_state
        )  # updates the current state to be equal to the next state
        return output

    def transduce(self, inputs):
        self.start()
        outputs = []
        for input_value in inputs:
            output = self.step(input_value)
            if self.done(self.state):
                break
            else:
                outputs.append(output)

        return outputs

    def done(self, inp):
        pass


# define the character involve in the game
# states will be passed in form of integer values between 5 and 12
# the idea across is to regenerate the next value of the card elements
# let the card numbers range in the form of

# Every player starts as a ninja character


class elemental(SM):
    def __init__(self):
        self.attack = rand.choice(5, 12)
        self.defence = 1
        self.health = 1

    def elemental_attack(self, enemy):
        damage = self.attack
        enemy.health -= damage // 4
        return enemy_health

    def get_next_values(self, state, inp):  # the input should be between 1 to 5
        if state >= 9:
            if inp < 5:
                next_state = 6
                self.attack -= 5
        elif state < 9:
            if inp <= 5:
                self.attack += inp * 1.5
                next_state = 8

        return self.attack  # output


class Ninja(elemental):
    def __init__(self, name, val):
        self.name = name
        self.health = 7
        self.attack = 10
        self.start_state = int(input("choose a number you would like to put in "))

    def quit_game(self):
        self.health = 0
        return "You have quit the game and you will not earn any of the values even from the saved game."

    def elemental_posession(self, enemy):
        self.health -= 1

    def elemental_check(self, value):
        self.attack = value * 1.5 + 7
        return self.attack

    def get_next_values(self, state, inp):  # the input should be between 1 to 5
        if state >= 9:
            if inp < 5:
                next_state = 6
                self.attack -= 5
        elif state < 9:
            if inp <= 5:
                self.attack += inp * 1.5
                next_state = 8

        return self.attack  # output


class enemy:
    def __init__(self):
        self.health = 7
        self.attack = 12

    def element_choice(self):
        elements = ["fire", "snow", "water"]
        self.element = random.choice(elements)
        return self.element

    def element_magnitude(self):
        self.attack -= random.randrange(1, 5)
        return self.attack


def print_win():
    print("you win!")


def print_lose():
    print("you lose :<")


def print_draw():
    print("you draw")


def play_the_game():

    user_tut = input("Would you like a jitsu tutorial?")
    if user_tut == "yes":
        jitsu_tutorial()
        player_in_game()
    else:
        player_in_game()


def player_in_game():
    name = input("what is your name?")
    player = Ninja(name, 5)
    challenger = enemy()
    # this happens for the first time
    el = ["fire", "water", "snow"]
    el_dict = {"f": "fire", "s": "snow", "w": "water"}
    # following lists are to compare the elements between the players and attack magnitudes between the players
    player_lst = []
    player_win = []
    enemy_lst = []
    enemy_win = []

    num_turns = 7
    enemy_num_turns = 7
    inp = int(input("choose a random number between 5 to 12 to start with"))
    # instantiate what happens next
    st = int(inp)
    # name = player.__init__()
    print("you have just started the game")
    print("choose from the following elements available to you.")
    for i in el:
        print(i)
    start_el = input("type f for fire, w for water and s for snow ")
    player_lst.append(el_dict[start_el])
    enemy_lst.append(challenger.element_choice)

    # compare between the two elements

    if player_lst[0] != enemy_lst[0]:
        if player.elemental_check(inp) > challenger.element_magnitude():
            print_win()
            num_turns += 1
            player_list = []
            player_win.append("win")
        elif player.elemental_check(inp) < challenger.element_magnitude():
            print_lose()
            num_turns -= 1
            player_win.append("lose")
        else:
            print_draw()

    next_card_val = player.get_next_values(inp, inp)

    # this confirms the next card played
    print("the next value is {}".format(next_card_val))

    while num_turns > 0 and enemy_num_turns > 0:

        next_card_val = player.get_next_values(next_card_val, new_card_val)
        player_list = []
        enemy_list = []
        print("the enemy has attacked, yet again.")
        print("Now choose an element")
        el = input("type f for fire, w for water and s for snow ")
        player_list.append(el_dict[el])
        enemy_list.append(challenger.element_choice())

        if player_list[0] == enemy_list[0]:
            if next_card_val > challenger.element_magnitude():
                print_win()
                num_turns += 1
                enemy_num_turns -= 1
                player_win.append("win")

        elif next_card_val < challenger.element_magnitude():
            print_lose()
            num_turns -= 1
            enemy_num_turns += 1
            player_win.append("lose")

        else:
            print_draw()
            num_turns += 0
            enemy_num_turns += 0

    # compute the number of coins earned based on who lost their life first
    if enemy_num_turns == 0 and player_num_turns > 0:
        num_coins = 7
        write_to_fb(name, num_coins)
    if player_num_turns == 0 and enemy_num_turns > 0:
        num_coins = 3
        write_to_fb(name, num_coins)
    if player_num_turns == 0 and enemy_num_turns == 0:
        num_coins = 0


play_the_game()
