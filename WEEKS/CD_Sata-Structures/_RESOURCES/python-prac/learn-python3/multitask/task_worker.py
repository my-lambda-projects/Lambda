#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time, sys
from multiprocessing.managers import BaseManager

# QueueManager:
class QueueManager(BaseManager):
    pass


# QueueManagerQueue，:
QueueManager.register("get_task_queue")
QueueManager.register("get_result_queue")

# task_master.py:
server_addr = "127.0.0.1"
print("Connect to server %s..." % server_addr)
# task_master.py:
m = QueueManager(address=(server_addr, 5000), authkey=b"abc")
# :
m.connect()
# Queue:
task = m.get_task_queue()
result = m.get_result_queue()
# task,result:
for i in range(10):
    try:
        n = task.get(timeout=1)
        print("run task %d * %d..." % (n, n))
        r = "%d * %d = %d" % (n, n, n * n)
        time.sleep(1)
        result.put(r)
    except Queue.Empty:
        print("task queue is empty.")
# :
print("worker exit.")
