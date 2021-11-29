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


class Fork:
    c_var = 42

    def __init__(self):
        self.i_var = "forty two"

    def __str__(self):
        return f"{self.i_var}, {self.c_var}"

    def __call__(self):
        return self.c_var

    def some_method(self):
        return True


fork = Fork()
print(fork())
