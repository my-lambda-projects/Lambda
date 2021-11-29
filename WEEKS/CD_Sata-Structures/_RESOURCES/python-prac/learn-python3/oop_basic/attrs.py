#!/usr/bin/env python3
# -*- coding: utf-8 -*-


class MyObject(object):
    def __init__(self):
        self.x = 9

    def power(self):
        return self.x * self.x


obj = MyObject()

print("hasattr(obj, 'x') =", hasattr(obj, "x"))  # 'x'？
print("hasattr(obj, 'y') =", hasattr(obj, "y"))  # 'y'？
setattr(obj, "y", 19)  # 'y'
print("hasattr(obj, 'y') =", hasattr(obj, "y"))  # 'y'？
print("getattr(obj, 'y') =", getattr(obj, "y"))  # 'y'
print("obj.y =", obj.y)  # 'y'

print("getattr(obj, 'z') =", getattr(obj, "z", 404))  # 'z'，，404

f = getattr(obj, "power")  # 'power'
print(f)
print(f())
