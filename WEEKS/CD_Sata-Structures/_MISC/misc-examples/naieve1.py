# lets make a simple hash function that takes in an abitary string and output the bytes of that string


# first lets see what output we get when iterating over the string


def my_hash(s):
    for c in s:
        print(c)


# so how can we turn each char in to a number?
# let's make a plan and explore this


def my_hash2(s):
    nums = s.encode()
    for b in nums:
        print(b)


# now one ster further lets thing of a deterministic way to make a number to represent the entire string


def my_hash3(s):
    nums = s.encode()
    sum = 0

    for b in nums:
        sum += b
        sum &= 0xFFFFFFFF  # clamp to 32 bits

    return sum


# my_hash("Hello")
# my_hash2("Hello")
# print(my_hash2("Hello"))
print(my_hash3("Hello"))  # 500
print(my_hash3("Hello"))  # 500
print(my_hash3("Hello"))  # 500
print(my_hash3("World"))  # 520
print(my_hash3("World"))  # 520
print(my_hash3("World"))  # 520
