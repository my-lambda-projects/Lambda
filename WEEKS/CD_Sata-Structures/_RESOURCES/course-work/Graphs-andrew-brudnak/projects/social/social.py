import random


class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None

    def size(self):
        return len(self.queue)


class User:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name


class SocialGraph:
    def __init__(self):
        self.lastID = 0
        self.users = {}
        self.friendships = {}

    def addFriendship(self, userID, friendID):
        """
        Creates a bi-directional friendship
        """
        if userID == friendID:
            print("WARNING: You cannot be friends with yourself")
        elif (
            friendID in self.friendships[userID] or userID in self.friendships[friendID]
        ):
            print("WARNING: Friendship already exists")
        else:
            self.friendships[userID].add(friendID)
            self.friendships[friendID].add(userID)

    def addUser(self, name):
        """
        Create a new user with a sequential integer ID
        """
        self.lastID += 1  # automatically increment the ID to assign the new user
        self.users[self.lastID] = User(name)
        self.friendships[self.lastID] = set()

    def populateGraph(self, numUsers, avgFriendships):
        """
        Takes a number of users and an average number of friendships
        as arguments

        Creates that number of users and a randomly distributed friendships
        between those users.

        The number of users must be greater than the average number of friendships.
        """

        # # Reset graph
        # self.lastID = 0
        # self.users = {}
        # self.friendships = {}
        # # !!!! IMPLEMENT ME
        #
        # # Add users
        # for i in range(0, numUsers):
        #     self.addUser(f"User {i}")
        #
        # possible_friendships = []
        # # Create friendships
        # for UserID in self.users:
        #     for friendID in range(UserID + 1, self.lastID + 1):
        #         possible_friendships.append((UserID, friendID))
        #
        # random.shuffle(possible_friendships)
        #
        # for i in range(numUsers * avgFriendships // 2):
        #     friendship = possible_friendships[i]
        #     self.addFriendship(friendship[0], friendship[1])

        # Reset graph
        self.lastID = 0
        self.users = {}
        self.friendships = {}
        # !!!! IMPLEMENT ME

        # Add users
        # call addUser() until our number of users is numUsers
        for i in range(numUsers):
            self.addUser(f"User {i + 1}")

        # Create random friendships
        # totalFriendships = avgFriendships * numUsers
        # Generate a list of all possible friendships
        possibleFriendships = []
        # Avoid dups by ensuring the first ID is smaller than the second
        for userID in self.users:
            for friendID in range(userID + 1, self.lastID + 1):
                possibleFriendships.append((userID, friendID))

        # Shuffle the list
        random.shuffle(possibleFriendships)
        print("random friendships:")
        print(possibleFriendships)

        # Slice off totalFriendships from the front, create friendships
        totalFriendships = avgFriendships * numUsers // 2
        print(f"Friendships to create: {totalFriendships}\n")
        for i in range(totalFriendships):
            friendship = possibleFriendships[i]
            self.addFriendship(friendship[0], friendship[1])

    def getAllSocialPaths(self, userID):
        """
        Takes a user's userID as an argument

        Returns a dictionary containing every user in that user's
        extended network with the shortest friendship path between them.

        The key is the friend's ID and the value is the path.
        """
        visited = {}  # Note that this is a dictionary, not a set
        # !!!! IMPLEMENT ME
        que = Queue()  # creating our queue

        # since BFS add start id to que
        que.enqueue(
            [userID]
        )  # enqueuing the user id in list / build possible path / keep a good one

        while que.size() > 0:  # while the queue is not empty...
            path = que.dequeue()

            new_user_id = path[-1]

            if new_user_id not in visited:
                visited[
                    new_user_id
                ] = path  # dict of paths from starting to everyone else

                for neighbor in self.friendships[new_user_id]:
                    path_copy = path.copy()
                    path_copy.append(neighbor)
                    que.enqueue(path_copy)

        return visited

    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    # earliest_ancestor
    # %%%%%%% Code From ancestor.py For Reference %%%%%%%
    # while q.size() > 0:
    #     path = q.dequeue()
    #     v = path[-1]
    #
    #     if len(path) >= max_path_length and v < earliest_anc or len(path) > max_path_length:
    #         earliest_anc = v
    #         max_path_length = len(path)
    #
    #     for neighbor in graph.vertices[v]:
    #         path_copy = list(path)
    #         path_copy.append(neighbor)
    #         q.enqueue(path_copy)
    #
    # return earliest_anc
    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    # %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


if __name__ == "__main__":
    sg = SocialGraph()
    sg.populateGraph(11, 3)
    print("USERS:")
    print(sg.users)
    print("FRIENDSHIPS:")
    print(sg.friendships)
    connections = sg.getAllSocialPaths(1)
    print("CONNECTIONS:")
    print(connections)
