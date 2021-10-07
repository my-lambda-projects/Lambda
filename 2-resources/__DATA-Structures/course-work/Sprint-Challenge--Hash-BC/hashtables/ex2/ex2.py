#  Hint:  You may not need all of these.  Remove the unused functions.
from hashtables import (
    HashTable,
    hash_table_insert,
    hash_table_remove,
    hash_table_retrieve,
    hash_table_resize,
)


class Ticket:
    def __init__(self, source, destination):
        self.source = source
        self.destination = destination


def reconstruct_trip(tickets, length):
    hashtable = HashTable(length)
    route = [None] * length

    """
    YOUR CODE HERE
    """

    print(f"Tickets: {tickets}")  # checking out data
    print(f"Length: {length}")  # checking out data

    # tickets are coming in as a multi-dimensional array / list
    for (
        ticket
    ) in (
        tickets
    ):  # Hash each ticket - starting location is the key and the destination is the val
        hash_table_insert(hashtable, ticket.source, ticket.destination)
    route[0] = hash_table_retrieve(
        hashtable, "NONE"
    )  # 1st route = starting route / NONE source

    for i in range(1, length):  # skip starting
        route[i] = hash_table_retrieve(hashtable, route[i - 1])

    return route


ticket_1 = Ticket("NONE", "PDX")
ticket_2 = Ticket("PDX", "DCA")
ticket_3 = Ticket("DCA", "NONE")
my_tickets = [ticket_1, ticket_2, ticket_3]

print(reconstruct_trip(my_tickets, 3))

# 1.
# The crux of this problem requires us to 'link' tickets together to reconstruct the entire trip.
# For example, if we have a ticket `('SJC', 'BOS')` that has us flying from San Jose to Boston,
# then there exists another ticket where Boston is the starting location, `('BOS', 'JFK')`.

# 2.
# We can hash each ticket such that the starting location is the key and the destination is the
# value. Then, when constructing the entire route, the `i`th location in the route can be found by
# checking the hash table for the `i-1`th location.
