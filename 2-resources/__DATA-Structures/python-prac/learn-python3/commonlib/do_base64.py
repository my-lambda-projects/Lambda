#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import base64

s = base64.b64encode("PythonBASE 64".encode("utf-8"))
print(s)
d = base64.b64decode(s).decode("utf-8")
print(d)

s = base64.urlsafe_b64encode("PythonBASE 64".encode("utf-8"))
print(s)
d = base64.urlsafe_b64decode(s).decode("utf-8")
print(d)
