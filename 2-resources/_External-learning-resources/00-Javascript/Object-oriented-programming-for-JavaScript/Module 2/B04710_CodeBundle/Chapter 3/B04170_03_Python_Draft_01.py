class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self.name = name
        self.watchdog_ability = watchdog_ability
        self.favorite_toy = favorite_toy



print(TibetanSpaniel.family)



brian = TibetanSpaniel("Brian", "Talking Minion", 4)
print(brian.family)



TibetanSpaniel.obedience = 4



brian.obedience = 8
print(type(brian).obedience)
print(TibetanSpaniel.obedience)
print(brian.obedience)


class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self._name = name
        self._watchdog_ability = watchdog_ability
        self._favorite_toy = favorite_toy



class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

def __init__(self, name, favorite_toy, watchdog_ability):
    self.__name = name
    self.__watchdog_ability = watchdog_ability
    self.__favorite_toy = favorite_toy



class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self.__name = name
        self.__watchdog_ability = watchdog_ability
        self.__favorite_toy = favorite_toy

    @property
    def name(self):
        return self.__name



merlin = TibetanSpaniel("Merlin", "Talking Smurf", 6)
merlin.name = "brian"



class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self.__name = name
        self.__watchdog_ability = watchdog_ability
        self.__favorite_toy = favorite_toy

    @property
    def name(self):
        return self.__name

    @property
    def favorite_toy(self):
        return self.__favorite_toy

    @favorite_toy.setter
    def favorite_toy(self, favorite_toy):
        self.__favorite_toy = favorite_toy



class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self.__name = name
        self.__watchdog_ability = watchdog_ability
        self.__favorite_toy = favorite_toy

    @property
    def name(self):
        return self.__name

    @property
    def favorite_toy(self):
        return self.__favorite_toy

    @favorite_toy.setter
    def favorite_toy(self, favorite_toy):
        self.__favorite_toy = favorite_toy

    @property
    def watchdog_ability(self):
        return self.__watchdog_ability

    @watchdog_ability.setter
    def watchdog_ability(self, watchdog_ability):
        if watchdog_ability < 0:
            self.__watchdog_ability = 0
        elif watchdog_ability > 10:
            self.__watchdog_ability = 10
        else:
            self.__watchdog_ability = watchdog_ability



hugo = TibetanSpaniel("Hugo", "Tennis ball", 7)
hugo.watchdog_ability = -3
print(hugo.watchdog_ability)
hugo.watchdog_ability = 30
print(hugo.watchdog_ability)
hugo.watchdog_ability = 8
print(hugo.watchdog_ability)



class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self.__name = name
        self.__watchdog_ability = watchdog_ability
        self.__favorite_toy = favorite_toy

    @property
    def name(self):
        return self.__name

    @property
    def favorite_toy(self):
        return self.__favorite_toy

    @favorite_toy.setter
    def favorite_toy(self, favorite_toy):
        self.__favorite_toy = favorite_toy

    @property
    def watchdog_ability(self):
        return self.__watchdog_ability

    @watchdog_ability.setter
    def watchdog_ability(self, watchdog_ability):
        if watchdog_ability < 0:
            self.__watchdog_ability = 0
        elif watchdog_ability > 10:
            self.__watchdog_ability = 10
        else:
            self.__watchdog_ability = watchdog_ability
    
    @property
    def protection_score(self):
        return math.floor((self.__watchdog_ability + type(self).learning_rate + type(self).problem_solving) / 3)



cole = TibetanSpaniel("Cole", "Soccer ball", 4)
print(cole.protection_score)



class TibetanSpaniel:
    family = "Companion, herding"
    area_of_origin = "Tibet"
    learning_rate = 9
    obedience = 3
    problem_solving = 8

    def __init__(self, name, favorite_toy, watchdog_ability):
        self.__name = name
        self.__watchdog_ability = watchdog_ability
        self.__favorite_toy = favorite_toy

    @property
    def name(self):
        return self.__name

    @property
    def favorite_toy(self):
        return self.__favorite_toy

    @favorite_toy.setter
    def favorite_toy(self, favorite_toy):
        self.__favorite_toy = favorite_toy

    @property
    def watchdog_ability(self):
        return self.__watchdog_ability

    @watchdog_ability.setter
    def watchdog_ability(self, watchdog_ability):
        if watchdog_ability < 0:
            self.__watchdog_ability = 0
        elif watchdog_ability > 10:
            self.__watchdog_ability = 10
        else:
            self.__watchdog_ability = watchdog_ability

    @property
    def protection_score(self):
        return math.floor((self.__watchdog_ability + type(self).learning_rate + type(self).problem_solving) / 3)



class MutableVector3D:
    def __init__(self, x, y, z):
        self.__x = x
        self.__y = y
        self.__z = z

    def sum(self, delta_x, delta_y, delta_z):
        self.__x += delta_x
        self.__y += delta_y
        self.__z += delta_z

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, x):
        self.__x = x

    @property
    def y(self):
        return self.__y

    @y.setter
    def y(self, y):
        self.__y = y

    @property
    def z(self):
        return self.__z

    @z.setter
    def z(self, z):
        self.__z = z



class MutableVector3D:
    def __init__(self, x, y, z):
        self.__x = x
        self.__y = y
        self.__z = z

    def sum(self, delta_x, delta_y, delta_z):
        self.__x += delta_x
        self.__y += delta_y
        self.__z += delta_z

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, x):
        self.__x = x

    @property
    def y(self):
        return self.__y

    @y.setter
    def y(self, y):
        self.__y = y

    @property
    def z(self):
        return self.__z

    @z.setter
    def z(self, z):
        self.__z = z

    @classmethod
    def origin_vector(cls):
        return cls(0, 0, 0)



mutableVector3D = MutableVector3D.origin_vector()
mutableVector3D.sum(5, 10, 15)
print(mutableVector3D.x, mutableVector3D.y, mutableVector3D.z)



class ImmutableVector3D:
    def __init__(self, x, y, z):
        self.__x = x
        self.__y = y
        self.__z = z

    def sum(self, delta_x, delta_y, delta_z):
        return type(self)(self.__x + delta_x, self.__y + delta_y, self.__z + delta_z)

    @property
    def x(self):
        return self.__x

    @property
    def y(self):
        return self.__y

    @property
    def z(self):
        return self.__z

    @classmethod
    def equal_elements_vector(cls, initial_value):
        return cls(initial_value, initial_value, initial_value)

    @classmethod
    def origin_vector(cls):
        return cls.equal_elements_vector(0)



vector0 = ImmutableVector3D.origin_vector()
vector1 = vector0.sum(5, 10, 15)
print(vector1.x, vector1.y, vector1.z)
