# A simple graph representing a series of cities and the connections between
# them.

map = {
    "Seattle": {"San Francisco"},
    "San Francisco": {"Seattle", "Los Angeles", "Denver"},
    "Los Angeles": {"San Francisco", "Phoenix"},
    "Phoenix": {"Los Angeles", "Denver"},
    "Denver": {"Phoenix", "San Francisco", "Houston", "Kansas City"},
    "Kansas City": {"Denver", "Houston", "Chicago", "Nashville"},
    "Houston": {"Kansas City", "Denver"},
    "Chicago": {"Kansas City", "New York"},
    "Nashville": {"Kansas City", "Houston", "Miami"},
    "New York": {"Chicago", "Washington D.C."},
    "Washington D.C.": {"Chicago", "Nashville", "Miami"},
    "Miami": {"Washington D.C.", "Houston", "Nashville"},
}

DELIVERED = "Delivered"


# Use BFS to find the shortest path
def find_shortest_path(start, end):
    # Question:  Why is a Python list acceptable to use for this queue?
    qq = []
    qq.append([start])
    visited = set()

    while len(qq) > 0:
        path = qq.pop()
        city = path[-1]

        if city == end:
            return path
        else:
            if city not in visited:
                visited.add(city)
                for connection in map[city]:
                    new_path = list(path)
                    new_path.append(connection)
                    qq.insert(0, new_path)

    return "Error: Path not found"


# Determine the next step via BFS.  Set location to delivered at end.
def advance_delivery(location, destination):
    print("advancing", location, destination)
    # shouldn't be called in this case
    if location == DELIVERED:
        return DELIVERED
    if location == destination:
        return DELIVERED

    path = find_shortest_path(location, destination)
    # Safe to say there is a next city if we get here
    return path[1]


# Testing
# print(find_shortest_path("Seattle", "Kansas City"))
