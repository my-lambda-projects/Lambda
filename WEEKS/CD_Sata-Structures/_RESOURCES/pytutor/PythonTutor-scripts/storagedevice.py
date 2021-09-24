class StorageDevice:
    def __init__(self, memory, *args):
        super().__init__(*args)
        self.memory = memory
        self.used = 0
        self.items = []


class PhoneDevice:
    def __init__(self, number, *args):
        super().__init__(*args)
        self.number = number

    def call(self, number):
        print("Calling number", number)


class MusicPlayer(StorageDevice):
    def __init__(self, memory):
        super().__init__(memory)

    def play_song(self, song):
        if song in self.items:
            print("Playing " + song)
        else:
            print(song + " not found")


# iphone needs to take on methods of both phonedevice and musicplayer


class IPhone(PhoneDevice, MusicPlayer):
    def __init__(self, memory):
        super().__init__(0, memory)


iphone = IPhone(256)
print(iphone.play_song("Sha La La"))  # of musicplayer
print(iphone.call(98765432))  # of phone device

"""
why is the answer wrong if i change the order to this instead of in
line 18? TypeError: __init__() takes 2 positional arguments but 3 were given

class IPhone(MusicPlayer,PhoneDevice):
        def __init__(self,number):
                super().__init__(number,0)

"""
