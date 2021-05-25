# 7.3 Jukebox

# Design a musical jukebox using object-oriented principles.

    # In what format is the music in the jukebox?
    # Does it take money or is it free?
        # Which currency?
        # Does it deliver change?
    # Computer sim that mirrors physical jukeboxes and is free

# Basic System Components (object)
    # Jukebox, CD, Song, Artist, Playlist, Display

# Actions (method)
    # playlist creation (includes add, delete, and shuffle)
    # cd selector
    # song selector
    # queueing up a song
    # get next song from playlist

# User
    # add user
    # delete user
    # credit info

class Jukebox:
    def __init__(self, cd_player, user, cd_collection, song_selector):
        super().__init__()
        self.cd_player = cd_player
        self.user = user
        self.cd_collection = cd_collection
        self.song_selector = song_selector

    def jukebox(self, cd_player, user, cd_collection, song_selector):
        pass

    def get_current_song(self):
        return self.song_selector.get_current_song()
    
    def set_user(self, user):
        self.user = user

class CDPlayer:
    def __init__(self, playlist=[], cd=[]):
        super().__init__()
        self.playlist = playlist
        self.cd = cd
        # constructors:
        # public CDPlayer(CD c, Playlist p){}
        # public CDPlayer(Playlist p){this.p = p}
        # public CDPlayer(CD c){this.c = c;}

        def play_song(self, song):
            pass
        
        def get_playlist(self):
            return self.playlist
        
        def set_playlist(self, playlist):
            self.playlist = playlist
        
        def get_cd(self):
            return self.cd
        
        def set_cd(self, cd):
            self.cd = cd


class Playlist:
    def __init__(self, song, queue=[]):
        super().__init__()
        self.song = song
        self.queue = queue

        def playlist(self, song, queue):
            pass


class CD:
    def __init__(self):
        super().__init__()
        # id, artist, songs, etc.

class Song:
    def __init__(self):
        super().__init__()
        # id, cd (could be null), title, length, etc.
        
class User:
    def __init__(self, userid, name="", users=[]):
        super().__init__()
        self.users = users
        self.id = userid
        self.name = name
        self.user = {
                id: self.id,
                name: self.name
            }

        def get_name(self):
            return self.name
        
        def set_name(self, name):
            self.name = name
        
        def get_id(self):
            return self.id
        
        def set_id(self, userid):
            self.id = userid
        
        def get_user(self):
            return self.user

        def add_user(self, name, id):
            self.users.append({
                id: id,
                name: name
            })