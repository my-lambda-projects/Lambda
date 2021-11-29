#!/usr/bin/env python3
# -*- coding: utf-8 -*-


def fn(self, name="world"):  #
    print("Hello, %s." % name)


Hello = type("Hello", (object,), dict(hello=fn))  # Hello class

h = Hello()
print("call h.hello():")
h.hello()
print("type(Hello) =", type(Hello))
print("type(h) =", type(h))
