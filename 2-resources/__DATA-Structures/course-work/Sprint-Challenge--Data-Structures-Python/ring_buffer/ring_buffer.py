# A ring buffer is a non-growable buffer with a fixed size. When the ring buffer is full
# and a new element is inserted, the oldest element in the ring buffer is overwritten with
# the newest element. This kind of data structure is very useful for use cases such as
# storing logs and history information, where you typically want to store information up
# until it reaches a certain age, after which you don't care about it anymore and don't
# mind seeing it overwritten by newer data.

# Implement this behavior in the RingBuffer class. RingBuffer has two methods, append and
# get. The append method adds elements to the buffer. The get method returns all of the
# elements in the buffer in a list in their given order. It should not return any None
# values in the list even if they are present in the ring buffer.


class RingBuffer:
    def __init__(self, capacity):
        self.capacity = capacity
        self.current = 0
        self.storage = [None] * capacity

    def append(self, item):
        if self.current == self.capacity:
            self.current = 0

        self.storage[self.current] = item
        self.current += 1

    def get(self):
        temp_list = []
        for item in self.storage:
            if item:
                temp_list.append(item)
        return temp_list


buffer = RingBuffer(3)

buffer.get()  # should return []

buffer.append("a")
buffer.append("b")
buffer.append("c")

print(
    f"Should return \"['a', 'b', 'c']\" \t --> \t {buffer.get()}"
)  # should return ['a', 'b', 'c']

# 'd' overwrites the oldest value in the ring buffer, which is 'a'
buffer.append("d")

print(
    f"Should return \"['d', 'b', 'c']\" \t --> \t {buffer.get()}"
)  # should return ['d', 'b', 'c']

buffer.append("e")
buffer.append("f")

print(
    f"Should return \"['d', 'e', 'f']\" \t --> \t {buffer.get()}"
)  # should return ['d', 'e', 'f']

# Testing

# http://pythontutor.com/visualize.html#code=class%20RingBuffer%3A%0A%20%20%20%20def%20__init__%28self,%20capacity%29%3A%0A%20%20%20%20%20%20%20%20self.capacity%20%3D%20capacity%0A%20%20%20%20%20%20%20%20self.current%20%3D%200%0A%20%20%20%20%20%20%20%20self.storage%20%3D%20%5BNone%5D%20*%20capacity%0A%0A%20%20%20%20def%20append%28self,%20item%29%3A%0A%20%20%20%20%20%20%20%20if%20self.current%20%3D%3D%20self.capacity%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20self.current%20%3D%200%0A%0A%20%20%20%20%20%20%20%20self.storage%5Bself.current%5D%20%3D%20item%0A%20%20%20%20%20%20%20%20self.current%20%2B%3D%201%0A%0A%20%20%20%20def%20get%28self%29%3A%0A%20%20%20%20%20%20%20%20temp_list%20%3D%20%5B%5D%0A%20%20%20%20%20%20%20%20for%20item%20in%20self.storage%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20item%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20temp_list.append%28item%29%0A%20%20%20%20%20%20%20%20return%20temp_list%0A%0A%0Abuffer%20%3D%20RingBuffer%283%29%0A%0Abuffer.get%28%29%20%20%20%23%20should%20return%20%5B%5D%0A%0Abuffer.append%28'a'%29%0Abuffer.append%28'b'%29%0Abuffer.append%28'c'%29%0A%0Aprint%28f%22Should%20return%20%5C%22%5B'a',%20'b',%20'c'%5D%5C%22%20%5Ct%20--%3E%20%5Ct%20%7Bbuffer.get%28%29%7D%22%29%20%20%20%23%20should%20return%20%5B'a',%20'b',%20'c'%5D%0A%0A%23%20'd'%20overwrites%20the%20oldest%20value%20in%20the%20ring%20buffer,%20which%20is%20'a'%0Abuffer.append%28'd'%29%0A%0Aprint%28f%22Should%20return%20%5C%22%5B'd',%20'b',%20'c'%5D%5C%22%20%5Ct%20--%3E%20%5Ct%20%7Bbuffer.get%28%29%7D%22%29%20%20%20%23%20should%20return%20%5B'd',%20'b',%20'c'%5D%0A%0Abuffer.append%28'e'%29%0Abuffer.append%28'f'%29%0A%0Aprint%28f%22Should%20return%20%5C%22%5B'd',%20'e',%20'f'%5D%5C%22%20%5Ct%20--%3E%20%5Ct%20%7Bbuffer.get%28%29%7D%22%29%20%20%20%23%20should%20return%20%5B'd',%20'e',%20'f'%5D%0A&cumulative=false&curInstr=52&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false
