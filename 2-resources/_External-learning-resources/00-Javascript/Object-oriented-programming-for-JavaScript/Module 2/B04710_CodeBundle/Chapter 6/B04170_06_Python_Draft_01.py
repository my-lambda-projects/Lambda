import random


class Animal:
    dance_characters = ""
    spelled_sound_1 = ""
    spelled_sound_2 = ""
    spelled_sound_3 = ""

    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    def dance(self):
        print(self._name + " dances " + type(self).dance_characters)

    def say(self, message):
        print(self._name + " says: " + message)

    def say_goodbye(self, destination):
        print(self._name + " says goodbye to "
              + destination.name + ": "
              + type(self).spelled_sound_1 + " "
              + type(self).spelled_sound_2 + " "
              + type(self).spelled_sound_3 + " ")

    def say_welcome(self, destination):
        print(self._name + " welcomes "
              + destination.name + ": "
              + type(self).spelled_sound_2)

    def sing(self):
        spelled_sing_sound = type(self).spelled_sound_1 + \
            " "
        sb = self._name + " sings: " + \
            spelled_sing_sound * 3 + ". " + \
            spelled_sing_sound * 2 + ". " + \
            spelled_sing_sound + ". "

        print(sb)


		
class Dog(Animal):
    dance_characters = "/-\ \-\ /-/"
    spelled_sound_1 = "Woof"
    spelled_sound_2 = "Wooooof"
    spelled_sound_3 = "Grr"

	
	
class Frog(Animal):
    dance_characters = "/|\ \|/ ^ ^ "
    spelled_sound_1 = "Ribbit"
    spelled_sound_2 = "Croak"
    spelled_sound_3 = "Croooaaak"

	
	
class Party:
    def __init__(self, leader):
        self._leader = leader
        self._members = [leader]

    def add_member(self, member):
        self._members.append(member)
        self._leader.say_welcome(member)

    def remove_member(self, member):
        if member == self._leader:
            raise ValueError(
                "You cannot remove the leader from the party")
        self._members.remove(member)
        member.say_goodbye(self._leader)

    def dance(self):
        for member in self._members:
            member.dance()

    def sing(self):
        for member in self._members:
            member.sing()

    def vote_leader(self):
        if len(self._members) == 1:
            raise ValueError("You need at least two members to vote a new Leader.")
        new_leader = self._leader
        while new_leader == self._leader:
            random_leader = random.randrange(len(self._members))
            new_leader = self._members[random_leader]
        self._leader.say(new_leader.name + " has been voted as our new party leader.")
        new_leader.dance()
        self._leader = new_leader



jake = Dog("Jake")
duke = Dog("Duke")
lady = Dog("Lady")
dakota = Dog("Dakota")
dogs_party = Party(jake)
dogs_party.add_member(duke)
dogs_party.add_member(lady)
dogs_party.add_member(dakota)
dogs_party.dance()
dogs_party.remove_member(duke)
dogs_party.vote_leader()
dogs_party.sing()



frog1 = Frog("Frog #1")
frog2 = Frog("Frog #2")
frog3 = Frog("Frog #3")
frog4 = Frog("Frog #4")
frogs_party = Party(frog1)
frogs_party.add_member(frog2)
frogs_party.add_member(frog3)
frogs_party.add_member(frog4)
frogs_party.dance()
frogs_party.remove_member(frog3)
frogs_party.vote_leader()
frogs_party.sing()



class HorseDeeJay:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    def play_music_to_dance(self):
        print("My name is " + self._name + ". Let's Dance.")

    def play_music_to_sing(self):
        print("Time to sing!")

		
		
class PartyWithDeeJay(Party):
    def __init__(self, leader, dee_jay):
        super().__init__(leader)
        self._dee_jay = dee_jay

	@property
    def dee_jay(self):
        return self._dee_jay

    def dance(self):
        self._dee_jay.play_music_to_dance()
        super().dance()

    def sing(self):
        self._dee_jay.play_music_to_sing()
        super().sing()



silver = HorseDeeJay("Silver")
silverParty = PartyWithDeeJay(jake, silver)
silverParty.add_member(duke)
silverParty.add_member(lady)
silverParty.add_member(dakota)
silverParty.dance()
silverParty.remove_member(duke)
silverParty.vote_leader()
silverParty.sing()
		

		