class Seeker:
    def __getattribute__(self, name):
        if name not in self.__dict__:
            return "<not found>"
        return self.__dict__[name]


s = Seeker()
print(s.id)
