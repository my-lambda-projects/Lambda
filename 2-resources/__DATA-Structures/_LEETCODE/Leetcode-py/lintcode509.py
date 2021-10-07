"""
Definition of Location:
class Location:
    # @param {double} latitude, longitude
    # @param {Location}
    @classmethod
    def create(cls, latitude, longitude):
        # This will create a new location object

Definition of Restaurant:
class Restaurant:
    # @param {str} name
    # @param {Location} location
    # @return {Restaurant}
    @classmethod
    def create(cls, name, location):
        # This will create a new restaurant object,
        # and auto fill id

Definition of Helper
class Helper:
    # @param {Location} location1, location2
    @classmethod
    def get_distance(cls, location1, location2):
        # return calculate the distance between two location

Definition of GeoHash
class GeoHash:
    # @param {Location} location
    # @return a string
    @classmethom
    def encode(cls, location):
        # return convert location to a geohash string

    # @param {str} hashcode
    # @return {Location}
    @classmethod
    def decode(cls, hashcode):
        # return convert a geohash string to location
"""
from YelpHelper import Location, Restaurant, GeoHash, Helper

import bisect


class MiniYelp:
    def __init__(self):
        self.restaurants = {}
        self.ids = {}
        self.geo_value = []

    # @param {str} name
    # @param {Location} location
    # @return {int} restaurant's id
    def add_restaurant(self, name, location):
        restaurant = Restaurant.create(name, location)
        hashcode = "{}.{}".format(GeoHash.encode(location), restaurant.id)
        bisect.insort(self.geo_value, hashcode)
        self.restaurants[hashcode] = restaurant
        self.ids[restaurant.id] = hashcode
        return restaurant.id

    # @param {int} restaurant_id
    # @return nothing
    def remove_restaurant(self, restaurant_id):
        if restaurant_id not in self.ids:
            return
        hashcode = self.ids[restaurant_id]
        idx = bisect.bisect_left(self.geo_value, hashcode)
        self.geo_value.pop(idx)
        del self.ids[restaurant_id]
        del self.restaurants[hashcode]

    # @param {Location} location
    # @param {double} k, distance smaller than k miles
    # @return {str[]} a list of restaurant's name and sort by
    # distance from near to far.
    def neighbors(self, location, k):
        length = self.get_length(k)
        hashcode = GeoHash.encode(location)[0:length]
        left = bisect.bisect_left(self.geo_value, hashcode)
        right = bisect.bisect_right(self.geo_value, hashcode + "{")
        # 首先字符串之间比较大小，是从左往右比较ASCII码的大小，
        # 比如从第一个字符开始比较，ASCII大的视为整个字符串大于另个一比较的字符串，
        # 若相等则向右一位接着比较。‘{’的ASCII码的大小为123，‘z’的ASCII码的大小为122，
        # 所以你只要选择一个ASCII码比'z'大的字符即可。

        results = []
        for idx in range(left, right):
            hashcode = self.geo_value[idx]
            restaurant = self.restaurants[hashcode]
            distance = Helper.get_distance(location, restaurant.location)
            if distance <= k:
                results.append((distance, restaurant))

        results = sorted(results, key=lambda x: x[0])
        return [r[1].name for r in results]

    def get_length(self, k):
        ERROR = [
            2500,
            630,
            78,
            20,
            2.4,
            0.61,
            0.076,
            0.01911,
            0.00478,
            0.0005971,
            0.0001492,
            0.0000186,
        ]
        for i, error in enumerate(ERROR):
            if k > error:
                return i
        return len(ERROR)
