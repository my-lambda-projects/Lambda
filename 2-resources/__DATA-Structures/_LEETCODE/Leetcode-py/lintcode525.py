"""
Definition of Trip:
class Trip:
    self.id; # trip's id, primary key
    self.driver_id, self.rider_id; # foreign key
    self.lat, self.lng; # pick up location
    def __init__(self, rider_id, lat, lng):

Definition of Helper
class Helper:
    @classmethod
    def get_distance(cls, lat1, lng1, lat2, lng2):
        # return calculate the distance between (lat1, lng1) and (lat2, lng2)
"""
from Trip import Trip, Helper


class Location:
    def __init__(self, lat, lng):
        self.lat = lat
        self.lng = lng


class MiniUber:
    def __init__(self):
        self.driver2location = {}
        self.driver2trip = {}

    # @param {int} driver_id an integer
    # @param {double} lat, lng driver's location
    # return {trip} matched trip information if there have matched rider or null
    def report(self, driver_id, lat, lng):
        if driver_id in self.driver2trip:
            return self.driver2trip[driver_id]

        if driver_id in self.driver2location:
            self.driver2location[driver_id].lat = lat
            self.driver2location[driver_id].lng = lng
        else:
            self.driver2location[driver_id] = Location(lat, lng)

        return None

    # @param rider_id an integer
    # @param lat, lng rider's location
    # return a trip
    def request(self, rider_id, lat, lng):
        trip = Trip(rider_id, lat, lng)
        distance, driver_id = -1, -1

        for key, value in self.driver2location.items():
            dis = Helper.get_distance(value.lat, value.lng, lat, lng)
            if distance < 0 or distance > dis:
                driver_id = key
                distance = dis

        if driver_id != -1:
            del self.driver2location[driver_id]

        trip.driver_id = driver_id
        self.driver2trip[driver_id] = trip

        return trip
