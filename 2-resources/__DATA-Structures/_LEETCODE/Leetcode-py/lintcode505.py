import bisect


class WebLogger:
    def __init__(self):
        self.queue = []

    """
    @param: timestamp: An integer
    @return: nothing
    """

    def hit(self, timestamp):
        self.queue.append(timestamp)

    """
    @param: timestamp: An integer
    @return: An integer
    """

    def get_hit_count_in_last_5_minutes(self, timestamp):
        ddl = timestamp - 300
        index = bisect.bisect_right(self.queue, ddl)
        return len(self.queue) - index
