import string
import random


class TinyUrl2:
    def __init__(self):
        self.long2short = {}
        self.short2long = {}

    """
    @param: long_url: a long url
    @param: key: a short key
    @return: a short url starts with http://tiny.url/
    """

    def createCustom(self, long_url, key):
        short_url = "http://tiny.url/" + key
        if long_url in self.long2short:
            if self.long2short[long_url] == short_url:
                return short_url
            else:
                return "error"
        if short_url in self.short2long:
            return "error"
        self.long2short[long_url] = short_url
        self.short2long[short_url] = long_url
        return short_url

    """
    @param: long_url: a long url
    @return: a short url starts with http://tiny.url/
    """

    def longToShort(self, long_url):
        if long_url in self.long2short:
            return self.long2short[long_url]
        code_pool = string.ascii_letters + "0123456789"
        code = "http://tiny.url/" + "".join(random.choice(code_pool) for _ in range(6))
        while code in self.short2long:
            code = "".join(random.choice(code_pool) for _ in range(6))
        self.long2short[long_url] = code
        self.short2long[code] = long_url
        return code

    """
    @param: short_url: a short url starts with http://tiny.url/
    @return: a long url
    """

    def shortToLong(self, short_url):
        if short_url in self.short2long:
            return self.short2long[short_url]
        return "error"
