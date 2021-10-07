import string


class Codec:
    def __init__(self):
        self.long2short = {}
        self.short2long = {}

    def encode(self, longUrl):
        """Encodes a URL to a shortened URL.

        :type longUrl: str
        :rtype: str
        """
        if longUrl in self.long2short:
            return "http://tinyurl.com/" + self.long2short(longUrl)
        code_pool = string.ascii_letters + "0123456789"
        code = "".join(random.choice(code_pool) for _ in range(6))
        while code in self.short2long:
            code = "".join(random.choice(code_pool) for _ in range(6))
        self.short2long[code] = longUrl
        self.long2short[longUrl] = code
        return "http://tinyurl.com/" + code

    def decode(self, shortUrl):
        """Decodes a shortened URL to its original URL.

        :type shortUrl: str
        :rtype: str
        """
        if shortUrl[-6:] in self.short2long:
            return self.short2long[shortUrl[-6:]]
        return
