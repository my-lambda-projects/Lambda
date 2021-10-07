""" Assignment 16

1. Define your own class. It should have 3-5 fields,
at least one of them should have a default value.
2. Write a method for printing the information from the class. This can be done
with `__str__` or `__repr__` if you use repr here - include a note to indicate why.
3. Print the class info.

Stretch Goals:
1. Derive a new class from your class using inheritance, it should have at least
one additional parameter.
2. What problems do you encounter? If you encountered no problems, add docstrings
to both classes where appropriate.
3. Make sure the classes are available to anyone importing this file as a library,
but also make sure that the printing of the class info only happens when your
script is executed as main and not when it is imported. """


# Possible Answer
class Player:
    def __init__(self, name, level, player_class="Villager"):
        self.Name = name
        self.Class = player_class
        self.Level = min(max(1, level), 20)  # Min: 1, Max: 20
        self.Health = self.Level * 8

    def __str__(self):
        _fields = (f"{k}: {v}" for k, v in self.__dict__.items())
        return "\n  ".join(_fields) + "\n"


# Stretch Goal
class Wizard(Player):
    def __init__(self, name, level, wizard_school):
        super().__init__(name, level, f"Wizard of {wizard_school}")
        self.Mana = self.Level * 10


if __name__ == "__main__":
    print(Player("George", 1))
    print(Wizard("Jim Darkmagic", 10, wizard_school="Illusion"))
    """
    One problem I encountered was the syntax for the super function. I forgot
    the `.__init__()` part. Once I got that solved everything worked great!
    """
