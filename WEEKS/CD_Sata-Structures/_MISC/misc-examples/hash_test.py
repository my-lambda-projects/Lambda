import time
import hashlib
import bcrypt
import math


n = 1000000
key = b"STR"

print(f"Hashing {n}x")

start_time = time.time()
for i in range(n):
    hash(key)
end_time = time.time()
print(f"  Python hash runtime: {end_time - start_time} seconds")


start_time = time.time()
for i in range(n):
    hashlib.sha256(key)
end_time = time.time()
print(f"  SHA256 hash runtime: {end_time - start_time} seconds")


n = 10
print(f"\nHashing {n}x")
salt = bcrypt.gensalt()
start_time = time.time()
for i in range(n):
    bcrypt.hashpw(b"KEY", salt)
end_time = time.time()
print(f"  bcrypt hash runtime: {end_time - start_time} seconds")
