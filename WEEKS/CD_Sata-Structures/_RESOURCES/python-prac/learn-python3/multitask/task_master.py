#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import random, time, queue
from multiprocessing.managers import BaseManager

# :
task_queue = queue.Queue()
# :
result_queue = queue.Queue()

# BaseManagerQueueManager:
class QueueManager(BaseManager):
    pass


# Queue, callableQueue:
QueueManager.register("get_task_queue", callable=lambda: task_queue)
QueueManager.register("get_result_queue", callable=lambda: result_queue)
# 5000, 'abc':
manager = QueueManager(address=("", 5000), authkey=b"abc")
# Queue:
manager.start()
# Queue:
task = manager.get_task_queue()
result = manager.get_result_queue()
# :
for i in range(10):
    n = random.randint(0, 10000)
    print("Put task %d..." % n)
    task.put(n)
# result:
print("Try get results...")
for i in range(10):
    r = result.get(timeout=10)
    print("Result: %s" % r)
# :
manager.shutdown()
print("master exit.")
