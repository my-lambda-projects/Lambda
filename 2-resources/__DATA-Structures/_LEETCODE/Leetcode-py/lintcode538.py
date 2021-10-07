class Data:
    def __init__(self, val, expired):
        self.val = val
        self.expired = expired


class Memcache:
    def __init__(self):
        # do intialization if necessary
        self.cache = {}

    """
    @param: curtTime: An integer
    @param: key: An integer
    @return: An integer
    """

    def get(self, curtTime, key):
        # write your code here
        if key not in self.cache:
            return 2147483647
        curr = self.cache[key]
        if curr.expired >= curtTime or curr.expired == -1:
            return curr.val
        else:
            return 2147483647

    """
    @param: curtTime: An integer
    @param: key: An integer
    @param: value: An integer
    @param: ttl: An integer
    @return: nothing
    """

    def set(self, curtTime, key, value, ttl):
        # write your code here
        if ttl:
            data = Data(value, curtTime + ttl - 1)
        else:
            data = Data(value, -1)
        self.cache[key] = data

    """
    @param: curtTime: An integer
    @param: key: An integer
    @return: nothing
    """

    def delete(self, curtTime, key):
        # write your code here
        if key not in self.cache:
            return
        del self.cache[key]

    """
    @param: curtTime: An integer
    @param: key: An integer
    @param: delta: An integer
    @return: An integer
    """

    def incr(self, curtTime, key, delta):
        # write your code here
        if self.get(curtTime, key) == 2147483647:
            return 2147483647
        self.cache[key].val += delta
        return self.cache[key].val

    """
    @param: curtTime: An integer
    @param: key: An integer
    @param: delta: An integer
    @return: An integer
    """

    def decr(self, curtTime, key, delta):
        # write your code here
        if self.get(curtTime, key) == 2147483647:
            return 2147483647
        self.cache[key].val -= delta
        return self.cache[key].val
