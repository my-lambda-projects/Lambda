"""
- Specification Abstract
    - We want a web client that gets whichever URL we specify
    - it caches the results of the web page
    - the first time we visit a URL, it goes out over the internet and gets it
        - subsequent requests for that URL are simply returned from the cache

- what benefit is this?
    - example. proxy server in a big company office whare we have a company firewall that caches data
        - in order to minimize traffic we can make the firewall in to a proxy cache server

- how can we use a hash table to create this?
    - The `URL` is the `key`
    - The web page `data` is the `value`
        - for our purposes the data will be a webpage

"""


# what imports will we need
# https://docs.python.org/3/library/urllib.request.html#module-urllib.request
import urllib.request

# https://docs.python.org/3/library/datetime.html
import datetime

# a class to hold each entry
class CacheEntry:
    """
    hold info about the cache entry
    - url
    - data
    """

    def __init__(self, url, data):
        self.url = url
        self.data = data
        self.timestamp = datetime.datetime.now().timestamp()


# a cache
cache = {}

# how long will we keep each item in the cache?
CACHE_EXPIRY_SECONDS = 30

# make a REPL
while True:
    # take input from user
    url = input("Enter a URL in the format (http://www.example.com/): ")

    # set some data to None
    data = None

    # check if a key is in the cache
    if url in cache:
        # set our entry to the cache at key
        entry = cache[url]

        # has the data expired?
        # work out current time as a time stamp
        current_time = datetime.datetime.now().timestamp()

        if current_time - entry.timestamp < CACHE_EXPIRY_SECONDS:
            print("Getting from Cache!")
            # set data to entry.data
            data = entry.data

    # check if data is None
    if data is None:
        print("Getting from Server!")

        # open a connection to read data
        res = urllib.request.urlopen(url)
        data = res.read()

        # store the data in the cache (wrapping the data in a CacheEntry object)
        cache[url] = CacheEntry(url, data)

        # close the connection
        res.close()
