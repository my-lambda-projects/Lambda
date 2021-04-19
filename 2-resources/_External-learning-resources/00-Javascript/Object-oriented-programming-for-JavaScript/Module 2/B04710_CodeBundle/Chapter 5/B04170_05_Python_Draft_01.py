class ComicCharacter:
    def __init__(self, nick_name):
        self._nick_name = nick_name

    @property
    def nick_name(self):
        return self._nick_name

    def draw_speech_balloon(self, message, destination):
        pass

    def draw_thought_balloon(self, message):
        pass


class GameCharacter:
    def __init__(self, full_name, initial_score, x, y):
        self._full_name = full_name
        self.score = initial_score
        self.x = x
        self.y = y

    @property
    def full_name(self):
        return self._full_name

    def draw(self, x, y):
        pass

    def move(self, x, y):
        pass

    def is_intersecting_with(self, other_character):
        pass

		
		
class Alien:
    def __init__(self, number_of_eyes):
        self.number_of_eyes = number_of_eyes

    def appear(self):
        pass

    def disappear(self):
        pass

		
		
class Wizard:
    def __init__(self, spell_power):
        self.spell_power = spell_power

    def disappear_alien(self, alien):
        pass

		
		
class Knight:
    def __init__(self, sword_power, sword_weight):
        self.sword_power = sword_power
        self.sword_weight = sword_weight

    def unsheath_sword(self, target):
        pass

		
		
class AngryDog(ComicCharacter):
    def _speak(self, message):
        print(self.nick_name + ' -> "' + message + '"')

    def _think(self, message):
        print(self.nick_name + ' ***' + message + '***')

    def draw_speech_balloon(self, message, destination):
        if destination is None:
            composed_message = message
        else:
            composed_message = destination.nick_name + ", " + message
        self._speak(composed_message)

    def draw_thought_balloon(self, message):
        self._think(message)



class AngryCat(ComicCharacter):
    def __init__(self, nick_name, age):
        super().__init__(nick_name)
        self.age = age

    def draw_speech_balloon(self, message, destination):
        if destination is None:
            composed_message = self.nick_name + ' -> "'
            if self.age > 5:
                composed_message += 'Meow'
            else:
                composed_message += 'Meeeooow Meeeooow'
            composed_message += ' ' + message + '"'
        else:
            composed_message = \
                destination.nick_name + ' === ' + \
                self.nick_name + ' ---> "' + message + '"'
        print(composed_message)

    def draw_thought_balloon(self, message):
        print(self.nick_name + ' thinks: ' + message)



class AngryCat(ComicCharacter, GameCharacter):
	def __init__(self, nick_name, age, full_name, initial_score, x, y):
		ComicCharacter.__init__(self, nick_name)
		GameCharacter.__init__(self, full_name, initial_score, x, y)
		self.age = age

	def draw(self, x, y):
		self.x = x
		self.y = y
		print("Drawing AngryCat " + self.full_name +
			  " at x: " + str(self.x) +
			  ", y: " + str(self.y))

	def move(self, x, y):
		self.x = x
		self.y = y
		print("Moving AngryCat " + self.full_name +
			  " to x: " + str(self.x) +
			  ", y: " + str(self.y))

	def is_intersecting_with(self, other_character):
		return self.x == other_character.x and self.y == other_character.y
		
		

class AngryCatAlien(AngryCat, Alien):
    def __init__(self, nick_name, age, full_name, initial_score, x, y, number_of_eyes):
        AngryCat.__init__(self, nick_name, age, full_name, initial_score, x, y)
        Alien.__init__(self, number_of_eyes)

    def appear(self):
        print("I'm " + self.full_name +
              " and you can see my " + str(self.number_of_eyes) +
              " eyes.")

    def disappear(self):
        print(self.full_name + " disappears.")

	
	
class AngryCatWizard(AngryCat, Wizard):
    def __init__(self, nick_name, age, full_name, initial_score, x, y, spell_power):
        AngryCat.__init__(self, nick_name, age, full_name, initial_score, x, y)
        Wizard.__init__(self, spell_power)

    def disappear_alien(self, alien):
        print(self.full_name + " uses his " +
              str(self.spell_power) + " to make the alien with " +
              str(alien.number_of_eyes) + " eyes disappear.")

			  
			  
class AngryCatKnight(AngryCat, Knight):
    def __init__(self, nick_name, age, full_name, initial_score, x, y, sword_power, sword_weight):
        AngryCat.__init__(self, nick_name, age, full_name, initial_score, x, y)
        Knight.__init__(self, sword_power, sword_weight)

    def _write_lines_about_the_sword(self):
        print(self.full_name + " unsheaths his sword.")
        print("Sword Power: " + str(self.sword_power) +
              " Sword Weight: " + str(self.sword_weight))

    def unsheath_sword(self, target):
        self._write_lines_about_the_sword()
        if target is not None:
            print("The sword targets an alien with " +
                  str(target.number_of_eyes) + " eyes.")



angry_dog_1 = AngryDog("Brian")
angry_dog_2 = AngryDog("Merlin")
angry_dog_1.draw_speech_balloon("Hello, my name is " + angry_dog_1.nick_name, None)
angry_dog_1.draw_speech_balloon("How do you do?", angry_dog_2)
angry_dog_2.draw_thought_balloon("Who are you? I think.")



angry_cat_1 = AngryCat("Garfield", 10, "Mr. Garfield", 0, 10, 20)
angry_cat_1.draw_speech_balloon("Hello, my name is " + angry_cat_1.nick_name, None)
angry_dog_1.draw_speech_balloon("Hello " + angry_cat_1.nick_name, angry_cat_1)



alien_1 = AngryCatAlien("Alien", 120, "Mr. Alien", 0, 10, 20, 3)
if alien_1.is_intersecting_with(angry_cat_1):
    alien_1.move(angry_cat_1.x + 20, angry_cat_1.y + 20)
alien_1.appear()



wizard_1 = AngryCatWizard("Gandalf", 75, "Mr. Gandalf", 10000, 30, 40, 100);
wizard_1.draw(wizard_1.x, wizard_1.y)
wizard_1.disappear_alien(alien_1)
alien_1.appear()



knight_1 = AngryCatKnight("Camelot", 35, "Sir Camelot", 5000, 50, 50, 100, 30)
knight_1.draw(knight_1.x, knight_1.y)
knight_1.unsheath_sword(alien_1)



alien_1.draw_thought_balloon("I must be friendly or I'm dead...")
alien_1.draw_speech_balloon("Pleased to meet you, Sir.", knight_1)



isinstance(alien_1, AngryCat)
isinstance(alien_1, ComicCharacter)
isinstance(alien_1, GameCharacter)
isinstance(alien_1, Alien)



import abc
from abc import ABCMeta
from abc import abstractmethod


class ComicCharacter(metaclass=ABCMeta):
    def __init__(self, nick_name):
        self._nick_name = nick_name

    @abstractmethod
    def draw_speech_balloon(self, message, destination):
        return NotImplemented

    @property
    def nick_name(self):
        return self._nick_name

    @abstractmethod
    def draw_thought_balloon(self, message):
        return NotImplemented

		
		
scooby = ComicCharacter("Scooby")
		