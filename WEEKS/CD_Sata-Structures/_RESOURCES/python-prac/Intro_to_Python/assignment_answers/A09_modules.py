""" Assignment 9

Import the random module and design a dice function. The dice function should
take two arguments, one for the number of rolls and one for the size or number
of sides of the dice. The function should simulate rolling the dice and finally
return the sum of all the rolls.

When this file is imported it should only add the dice function to the target
namespace. However, when this file is run from the terminal it should also do
the following:

Print the result of rolling eight six sided dice (8d6). Format the result as if
this was the damage dealt by a fireball spell in an RPG. Or come up with your
own creative usage of the dice function.

Hint: You may need to search online for the following:
    __all__
    if __name__ == "__main__"

Prepare to defend you choice of import style. """


# Answer
import random

__all__ = ("dice",)


def dice(rolls: int, sides: int) -> int:
    return sum(random.randint(1, sides) for _ in range(rolls))


if __name__ == "__main__":
    print(f"Jim's fireball deals: {dice(8, 6)} fire damage to the Troll.")
