""" Assignment 6

Create a dictionary of waypoints.
Each waypoint should itself be a dictionary.
Write a loop that will print the name of each city on a new line.


Location Data:

WP1
locale: London
lat: 51.5074° N
lon: 0.1278° W

WP2
locale: Paris
lat: 48.8566° N
lon: 2.3522° E

WP3
locale: New York
lat: 40.7128° N
lon: 74.0060° W

"""


# Answer
location_data = {
    "WP1": {"locale": "London", "lat": "51.5074° N", "lon": "0.1278° W"},
    "WP2": {"locale": "Paris", "lat": "48.8566° N", "lon": "2.3522° E"},
    "WP3": {"locale": "New York", "lat": "40.7128° N", "lon": "74.0060° W"},
}

for wp in location_data.values():
    print(wp["locale"])
