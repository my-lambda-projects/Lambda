# 3.6 Animal Shelter

# An animal shelter, which holds only dogs and cats, operates on a strictly FIFO basis.  
# People must adopt either the "oldest", based on arrival time, of all animals at the shelter OR
    # they can select whether they would prefer a dog or a cat.  
    # They will receive the oldest animal off that type.
# They cannot select which specific animal they would like. 
# Create the data structures to maintain this system and implement operations such as:
    # enqueue, dequeueAny, dequeueDog, dequeueCat
# You may use the built-in LinkedList data structure.

class Stack(object):

    def __init__(self):
        self.animals = []
        self.cats = []
        self.dogs = []

    def enqueue(self, item, type):
        self.animals.insert(0, item)
        if type == "cat":
            self.cats.insert(0, item)
        elif type == "dog":
            self.dogs.insert(0, item)

    def dequeueAny(self):
        popped = self.animals[0]
        del self.animals[0]
        if self.dogs(popped):
            self.dogs.remove(popped)
        elif self.cats(popped):
            self.cats.remove(popped)
        return popped

    def dequeueDog(self):
        popped = self.dogs[0]
        del self.dogs[0]
        self.animals.remove(popped)

    def dequeueCat(self):
        popped = self.cats[0]
        del self.cats[0]
        self.animals.remove(popped)