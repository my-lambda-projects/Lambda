""" Assignment 10

First import A09_modules.py this should add the dice function you created
to the namespace.

Create a class hierarchy consisting of 1 base class and 3 derived classes.
Create a fourth class that embeds one of the derived classes.

Use your dice function somewhere in this module to spice things up.

You should exercise what you've learned about polymorphism and
inheritance. In addition, you should use at least three different
magic methods.

In the (if __name__ == "__main__":) block you should instantiate some of
your classes and show them off. """


# Possible Answer
from assignment_answers.A09_modules import dice


class Character:
    health = 0
    damage = 0

    def attack(self):
        return dice(1, self.damage)


class Knight(Character):
    health = 10
    damage = 6

    def __repr__(self):
        return "Knight"


class Ranger(Character):
    health = 8
    damage = 8

    def __repr__(self):
        return "Ranger"


class Warlock(Character):
    health = 6
    damage = 10

    def __repr__(self):
        return "Warlock"


class Player:
    def __init__(self, name: str, class_type: Character, level: int):
        self.name = name
        self.class_type = class_type
        self.level = level
        self.health = self.class_type.health * self.level

    def attack(self):
        return self.class_type.attack()

    def __str__(self):
        output = (
            f"Name: {self.name}",
            f"Class: {self.class_type}",
            f"Level: {self.level}",
            f"Health: {self.health}",
            f"",
        )
        return "\n".join(output)


if __name__ == "__main__":
    characters = (
        Player("Sir Gallop", Knight(), dice(3, 6)),
        Player("Strider", Ranger(), dice(3, 6)),
        Player("Jinx", Warlock(), dice(3, 6)),
    )
    for player in characters:
        print(player)
