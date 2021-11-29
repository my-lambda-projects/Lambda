# Design a logger system that receive stream of messages along with its timestamps,
# each message should be printed if and only if it is not printed in the last 10 seconds.
#
# Given a message and a timestamp (in seconds granularity), return true if the
# message should be printed in the given timestamp, otherwise returns false.
#
# It is possible that several messages arrive roughly at the same time.


class Logger:
    def __init__(self):
        self.dict = {}

    def shouldPrintMessage(self, timestamp, message):

        if message not in self.dict:
            self.dict[message] = timestamp
            return True
        if timestamp - self.dict[message] >= 10:
            self.dict[message] = timestamp
            return True
        else:
            return False


if __name__ == "__main__":
    log = Logger()
    print(log.shouldPrintMessage(1, "foo"))
    print(log.shouldPrintMessage(2, "bar"))
    print(log.shouldPrintMessage(3, "foo"))
    print(log.shouldPrintMessage(8, "bar"))
    print(log.shouldPrintMessage(10, "foo"))
    print(log.shouldPrintMessage(11, "foo"))
    # expected [true,true,false,false,false,true]
