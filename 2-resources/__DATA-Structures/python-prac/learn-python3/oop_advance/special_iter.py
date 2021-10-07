#!/usr/bin/env python3
# -*- coding: utf-8 -*-


class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1  # a，b

    def __iter__(self):
        return self  # ，

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b  #
        if self.a > 100000:  #
            raise StopIteration()
        return self.a  #


for n in Fib():
    print(n)
