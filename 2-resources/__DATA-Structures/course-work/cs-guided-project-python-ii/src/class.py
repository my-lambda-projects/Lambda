class Animal:
    def __init__(self, kind, color, name):
        # constructor method/a new instance of animal
        # slef is like this from JS
        self.kind = kind
        self.name = name
        self.color = color

    def description(self):
        print("%s is a %s with color %s" % (self.name, self.kind, self.color))
        # or f"{self.name} is a {self.kind} with a color {self.color}"


cat = Animal("cat", "orange", "CAty")
dog = Animal("dog", "black", "HIM")

print(cat.kind)
print(dog.color)
cat.description()
