#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# metaclass，`type`：
class ListMetaclass(type):
    def __new__(cls, name, bases, attrs):
        attrs["add"] = lambda self, value: self.append(value)
        return type.__new__(cls, name, bases, attrs)


# ListMetaclass
class MyList(list, metaclass=ListMetaclass):
    pass


L = MyList()
L.add(1)
L.add(2)
L.add(3)
L.add("END")
print(L)
