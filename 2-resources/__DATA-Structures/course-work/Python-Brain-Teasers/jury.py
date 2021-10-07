from concurrent.futures import ProcessPoolExecutor
from itertools import repeat

guilty = 0


def juror():
    global guilty

    guilty += 1


with ProcessPoolExecutor() as pool:
    for _ in repeat(None, 12):
        pool.submit(juror)

print(guilty)
