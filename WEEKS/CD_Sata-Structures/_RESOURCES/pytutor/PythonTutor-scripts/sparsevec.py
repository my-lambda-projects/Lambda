class SparseVec(object):
    def __init__(self, n):
        self.n = n
        self.vec = {}

    def __length__(self):
        return self.n

    def __getitem__(self, key):
        if key in self.vec:
            self.val = self.vec[key]
            return self.val
        else:
            return 0.0

    def __setitem__(self, key, val):

        self.vec[key] = val

    #  getter
    def get_vec(self):
        return self.vec

        """
        In the add meethod you first need to find which vector
        that is longer (self or other). Then you can create a
        new sparse vector and add all elements from self and
        other to the new vector (can do that in 1 or 2 for-loops).
        Then you return the new vector last.
        """

    def __add__(self, other):
        #  Get the longer vector
        n = max(self.n, other.n)

        #  Instantiate the resulting vector
        ret = SparseVec(n)

        if self.n < other.n:
            for key, val in self.vec.items():
                if key in other.vec:
                    total = val + other.vec[key]
                    ret.vec[key] = total
                else:
                    ret.vec[key] = val

                # add items from the other vector
                for k, v in other.vec.items():
                    if k not in ret.vec:
                        ret[k] = v

        else:
            for key, val in other.vec.items():
                if key in self.vec:
                    total = val + self.vec[key]
                    ret.vec[key] = total
                else:
                    ret.vec[key] = val

                # add items from self vector
                for k, v in self.vec.items():
                    if k not in ret.vec:
                        ret[k] = v

        return ret

    def nonzeroes(self):
        nonzeroes = {}
        for i, val in self.vec.items():
            if val != 0:
                nonzeroes[i] = val
            if val == 0:
                nonzeroes[i] = 0.0
            self.vec = nonzeroes

    def __repr__(self):
        string = ""
        for key, val in self.vec.items():
            string += "[{}]={} ".format(key, val)
        return string

    """
    def __repr__(self):
        format_string = ''
        for key, val in enumerate(self.vec):
            format_string += '[{}]={} '.format(key, val)
        return format_string
    """


#    def __repr__(self):
#        return 'Sparse Vector {}'. format(n)


a = SparseVec(7)
a[2] = 9.2
a[0] = -1
# test for self.val
print("a[0]", a[0])
print(a)
# [0]=-1 [1]=0 [2]=9.2 [3]=0
print(a.get_vec())
# {0: -1, 2: 9.2}
b = SparseVec(5)
b[1] = 1
b[2] = 10
print(b)
# [0]=0 [1]=1 [2]=0 [3]=0 [4]=0
print(b.get_vec())
# {1: 1}
print("add op:")
c = a + b
print(c.get_vec())
# [0]=-1 [1]=1 [2]=9.2 [3]=0 [4]=0
# print(c.vec)
# {0: -1, 1: 1, 2: 9.2}
# for ai, i in a: # SparseVec iterator
#    print ('a[%d]=%g ' % (i, ai))

# # if __name__ == '__main__':
# #     pass

# a = {0: -1, 2: 9.2}
# b = {1: 1}
# c = {}

# for key, val in a.items():
#     if key not in b:
#         c[key] = val
#     else:
#         c[key] = val + b[key]

#     for key in b:
#         c[key] = b[key]


# print(c)
