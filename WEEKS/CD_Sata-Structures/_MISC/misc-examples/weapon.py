from item import Item


class Weapon(Item):
    def __init__(self, name, description, power):
        super().__init__(name, description)
        self.power = power

    def __str__(self):
        return f"{self.name}\n{self.description}\n with a power of {self.power}"
