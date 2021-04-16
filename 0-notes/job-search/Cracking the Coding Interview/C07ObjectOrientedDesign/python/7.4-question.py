# 7.4 Parking Lot

# Design a parking lot using object-oriented principles.

# Questions
    # one or multiple levels (lot versus garage)
    # payment & staff area
    # types of vehicles it can park and where
        # different spots
        # how many spots each vehicle takes up
    # 

# Classes:

# public enum VehicleSize{Motorcycle, Compact, Large} ???
class VehicleSize:
    def __init__(self, motorcycle=1, compact=2, large=3):
        self.motorcycle = motorcycle
        self.compact = compact
        self.large = large

    # Vehicle
        # parking spots arraylist
        # license plate
        # spots needed
        # vehicle size
class Vehicle:
    def __init__(self, parking_spots=[], spots_needed=1, vehicle_size=1, license_plate=""):
        self.parking_spots = parking_spots
        self.spots_needed = spots_needed
        self.vehicle_size = vehicle_size
        self.license_plate = license_plate

        # get spots needed
        def get_spots_needed(self):
            return self.spots_needed
        # get vehicle size
        def get_vehicle_size(self):
            return self.vehicle_size
        # park vehicle in this spot (parking spot)
        def park_vehicle_in_spot(self, parking_spot):
            self.parking_spots.append(parking_spot)

        # remove car from spot
        def remove_car_from_spot(self):
            pass
        # notify spot that it's gone
        def notify_spot_freed(self):
            pass
        # check if spot is big enough for vehicle (spot)
        def check_spot_size(self, spot):
            pass

# Bus
    # spots needed
    # vehicle size
class Bus(Vehicle):
    def __init__(self, spots_needed=5):
        self.spots_needed = spots_needed
        self.vehicle_size = VehicleSize.large

    # checks if spot is large, not number of spots (spot)
    def check_spot_size(self, spot):
        pass

# Car
    # spots needed
    # vehicle size
class Car(Vehicle):
    def __init__(self, spots_needed=1):
        self.spots_needed = spots_needed
        self.vehicle_size = VehicleSize.compact

    # checks if spot is compact or large, not number of spots (spot)
    def check_spot_size(self, spot):
        pass

# Motorcycle
    # spots needed
    # vehicle size
class Motorcycle(Vehicle):
    def __init__(self, spots_needed=1):
        self.spots_needed = spots_needed
        self.vehicle_size = VehicleSize.motorcycle

    # checks if spot is motorcycle, compact or large, not number of spots (spot)
    def check_spot_size(self, spot):
        pass

# Parking Lot
    # levels
    # number of levels
class ParkingLot:
    def __init__(self, levels=[], levels_count=1):
        super().__init__()
        self.levels = levels
        self.levels_count = levels_count
    
    # parking lot()
    def parking_lot(self):
        pass

    # park vehicle in spot(s)
        # return false if failed
    def park_vehicle_in_spot(self, spot):
        pass

# Level
    # floor
    # spots
    # available spots
    # spots per row
class Level:
    def __init__(self, floor=1, spots=[], available_spots=0, spots_per_row=10):
        self.floor = floor
        self.spots = spots
        self.available_spots = available_spots
        self.spots_per_row = spots_per_row

    # level (floor, number of spots)
    def level(self, number_of_spots=1, floor=1):
        pass

    # available spots
    def available_spots(self):
        return self.available_spots

    # park vehicle (vehicle)
    def park_vehicle(self, vehicle):
        pass

    # park starting at spot (number, vehicle)
        # continue until vehicle.spotsNeeded
    def park_at_spot(self, number, vehicle):
        pass

    # find available spots (vehicle)
    def find_available_spots(self, vehicle):
        pass 

    # spot freed
    def spot_freed(self):
        self.available_spots += 1

# Parking Spot
    # vehicle
    # spot size
    # row
    # spot number
    # level
class ParkingSpot:
    def __init__(self, spot_size=1, row=1, level=1, spot_number, vehicle):
        self.vehicle = vehicle
        self.spot_size = spot_size
        self.row = row
        self.spot_number = spot_number
        self.level = level

    # parking spot (level, r, n, vehicle size)
    def parking_spot(self, level, r, n, vehicle_size):
        pass

    # is available
    def is_available(self):
        self.vehicle = None
        return self.vehicle

    # get row
    def get_row(self):
        return self.row

    # get spot number
    def get_spot_number(self):
        return self.spot_number

    # park vehicle in spot (vehicle)
    def park_vehicle_in_spot(self, vehicle):
        pass 

    # check if spot is big enough and available (vehicle)
    def check_spot_size_available(self, vehicle):
        pass

    # remove vehicle from spot
    def remove_vehicle(self):
        pass 

    # notify level new spot is available
    def notify_level(self, spot):
        pass