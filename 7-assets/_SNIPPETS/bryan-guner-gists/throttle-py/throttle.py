class throttle(object):
    """
    Decorator that prevents a function from being called more than once every
    time period.

    To create a function that cannot be called more than once a minute:

        @throttle(minutes=1)
        def my_fun():
            pass
    """
    def __init__(self, seconds):
        self.throttle_period = seconds
        self.time_of_last_call = time.time()

    def __call__(self, fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            now = time.time()
            time_since_last_call = now - self.time_of_last_call

            if time_since_last_call > self.throttle_period:
                self.time_of_last_call = now
                return fn(*args, **kwargs)

        return wrapper