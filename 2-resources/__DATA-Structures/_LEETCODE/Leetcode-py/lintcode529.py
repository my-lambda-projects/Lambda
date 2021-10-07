class GeoHash:
    """
    @param: latitude: one of a location coordinate pair
    @param: longitude: one of a location coordinate pair
    @param: precision: an integer between 1 to 12
    @return: a base32 string
    """

    def encode(self, latitude, longitude, precision):
        _base32 = "0123456789bcdefghjkmnpqrstuvwxyz"
        latitude_bin = self.get_bin(latitude, -90, 90)
        longitude_bin = self.get_bin(longitude, -180, 180)
        hash_code, b = "", ""
        for i in range(30):
            b += longitude_bin[i] + latitude_bin[i]

        for i in range(0, 60, 5):
            hash_code += _base32[int(b[i : i + 5], 2)]

        return hash_code[:precision]

    def get_bin(self, value, left, right):
        b = ""
        for i in range(30):
            mid = left + (right - left) / 2
            if value > mid:
                left = mid
                b += "1"
            else:
                right = mid
                b += "0"
        return b
