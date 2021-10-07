import random


class LoadBalancer:
    def __init__(self):
        self.cluster = []
        self.id2index = {}

    """
    @param: server_id: add a new server to the cluster
    @return: nothing
    """

    def add(self, server_id):
        if server_id in self.id2index:
            return
        self.cluster.append(server_id)
        self.id2index[server_id] = len(self.cluster) - 1

    """
    @param: server_id: server_id remove a bad server from the cluster
    @return: nothing
    """

    def remove(self, server_id):
        if server_id not in self.id2index:
            return
        idx = self.id2index[server_id]

        self.id2index[self.cluster[-1]] = idx
        self.cluster[-1], self.cluster[idx] = self.cluster[idx], self.cluster[-1]

        del self.id2index[server_id]
        self.cluster.pop()

    """
    @return: pick a server in the cluster randomly with equal probability
    """

    def pick(self):
        index = random.randint(0, len(self.cluster) - 1)
        return self.cluster[index]
