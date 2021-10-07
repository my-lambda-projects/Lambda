def get_attr(obj, name):
    """Emulate built in getattr"""
    if name in obj.__dict__:
        print(f"found {name} in obj")
        return obj.__dict__[name]

    if name in obj.__class__.__dict__:
        print(f"found {name} in class")
        return obj.__class__.__dict__[name]

    for cls in obj.__class__.__mro__:
        if name in cls.__dict__:
            print(f"found {name} in {cls.__name__}")
            return cls.__dict__[name]

    raise AttributeError(name)


class A:
    a = 1


class B(A):
    b = 2

    def __init__(self):
        self.c = 3


b = B()
get_attr(b, "a")
get_attr(b, "b")
get_attr(b, "c")
