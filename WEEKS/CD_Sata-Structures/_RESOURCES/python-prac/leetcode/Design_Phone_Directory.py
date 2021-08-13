# Design a Phone Directory which supports the following operations:
#
# get: Provide a number which is not assigned to anyone.
# check: Check if a number is available or not.
# release: Recycle or release a number.
#
# Example:
#
# // Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
# PhoneDirectory directory = new PhoneDirectory(3);
#
# // It can return any available phone number. Here we assume it returns 0.
# directory.get();
#
# // Assume it returns 1.
# directory.get();
#
# // The number 2 is available, so return true.
# directory.check(2);
#
# // It returns 2, the only number that is left.
# directory.get();
#
# // The number 2 is no longer available, so return false.
# directory.check(2);
#
# // Release number 2 back to the pool.
# directory.release(2);
#
# // Number 2 is available again, return true.
# directory.check(2);


from collections import deque


class PhoneDirectory:
    def __init__(self, maxNumbers: int):

        self.num = maxNumbers
        self.queue = deque([])
        for i in range(self.num):
            self.queue.append(i)

    def get(self) -> int:
        if len(self.queue) == 0:
            return -1
        num = self.queue.popleft()
        return num

    def check(self, number: int) -> bool:
        return number in self.queue

    def release(self, number: int) -> None:
        if number not in self.queue:
            self.queue.append(number)
