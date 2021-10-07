class Solution:
    """
    @param: timestamp: the current timestamp
    @param: event: the string to distinct different event
    @param: rate: the format is [integer]/[s/m/h/d]
    @param: increment: whether we should increase the counter
    @return: true or false to indicate the event is limited or not
    """

    def __init__(self):
        self.logs = {}

    def isRatelimited(self, timestamp, event, rate, increment):
        separator = rate.find("/")
        total_time = int(rate[:separator])
        unit = rate[separator + 1 :]

        delta = 0
        if unit == "s":
            delta = 1
        elif unit == "m":
            delta = 60
        elif unit == "h":
            delta = 60 * 60
        else:
            delta = 60 * 60 * 24

        if event not in self.logs:
            self.logs[event] = []

        is_limited = (
            self.find_event(self.logs[event], timestamp - delta + 1) >= total_time
        )
        if increment and not is_limited:
            self.logs[event].append(timestamp)

        return is_limited

    def find_event(self, events, start_time):
        l, r = 0, len(events) - 1
        if r < 0 or events[r] < start_time:
            return 0

        below = 0
        while l <= r:
            mid = l + (r - l) // 2
            if events[mid] >= start_time:
                below = mid
                r = mid - 1
            else:
                l = mid + 1
        return len(events) - below
