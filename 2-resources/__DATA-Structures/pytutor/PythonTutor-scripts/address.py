from collections import namedtuple
import copy

Address = namedtuple("Address", "zip_code encoded_street_name street_number")

if __name__ == "__main__":

    # ADDRESS BOOK
    # The address book contains the names & addresses of customers who have registered with the drone
    address_book = {
        "Alice": Address(92617, 10, 1200),
        "Bob": Address(92617, 10, 8320),
        "Cindy": Address(92630, 15, 2550),
        "Wang": Address(91250, 24, 3205),
        "Chang": Address(91450, 61, 9982),
        "Lee": Address(91750, 92, 6420),
        "Steve": Address(91250, 89, 7102),
        "Turing": Address(96250, 57, 8311),
    }

    # print(address_book)
    # ORDER LIST
    # Given a list of orders, where each order is a tuple (user_name, amount)
    orders = [("Wang", 11.25), ("Turing", 2.54), ("Alice", 26.25), ("Steve", 12.34)]

    delivery_dictionary = {}

    # TASK 1: INITIALIZE DELIVERY DICTIONARY
    # Create a dictionary, where the key is the zip code, and the value is an empty list of orders

    for address in address_book.values():
        delivery_dictionary[address.zip_code] = []

    print("Task 1")
    print(delivery_dictionary)
    # {92617: [], 92630: [], 91250: [], 91450: [], 91750: [], 96250: []}
    print()

    # TASK 2: ADD ORDER INTO
    # Place each order into the delivery dictionary, corresponding to the customer's zip code
    # {92617: [('Alice', 26.25)], 92630: [], 91250: [('Wang', 11.25), ('Steve', 12.34)], 91450: [], 91750: [], 96250: [('Turing', 2.54)]}
    for order in orders:
        name = order[0]
        customer_address = address_book[name]
        zip_code = customer_address.zip_code
        delivery_dictionary[zip_code].append(order)

    print("Task 2")
    print(delivery_dictionary)
    # {92617: [('Alice', 26.25)], 92630: [], 91250: [('Wang', 11.25), ('Steve', 12.34)], 91450: [], 91750: [], 96250: [('Turing', 2.54)]}
    print()

    # TASK 3: ADD DELIVERY FEE
    # The amount of the first order entered into the zip code order list will
    # have a $2.50 delivery fee added to their order unless their order is over $20,
    # in which case the delivery fee is waived

    delivery_dictionary_clone = copy.deepcopy(delivery_dictionary)

    for zipcode, orders in delivery_dictionary.items():
        # Not empty
        if orders:
            # Get the order value
            # If more than one order in a zipcode
            if len(orders) > 1:
                # Delete the entry in the clone dict
                delivery_dictionary_clone[zipcode].clear()
                for order in orders:
                    # print(order)
                    name = order[0]
                    price = order[1]
                    if price <= 20:
                        # Add the delivery fee
                        new_price = price + 2.5
                        # Update the dictionary
                        delivery_dictionary_clone[zipcode].append((name, new_price))

            else:
                name = orders[0][0]
                price = orders[0][1]
                if price <= 20:
                    # Add the delivery fee
                    new_price = price + 2.5
                    # Delete the old order entry
                    delivery_dictionary_clone[zipcode].clear()
                    # Update the dictionary
                    delivery_dictionary_clone[zipcode].append((name, new_price))

    print("Task 3")
    print(delivery_dictionary_clone)
    # {92617: [('Alice', 26.25)], 92630: [], 91250: 14.84, 91450: [], 91750: [], 96250: 5.04}
    print()

    # TASK 4: PRINT ORDERS
    # Print the orders for each zip code. Print "No Orders" for zip codes with no orders.
    print("Task 4")
    for zipcode, orders in delivery_dictionary.items():
        #  With orders
        if orders:
            if len(orders) > 1:
                for order in orders:
                    print(
                        "zipcode: {}, order: {}, {}".format(
                            zipcode, "".join(order[0]), order[1]
                        )
                    )
            else:
                print(
                    "zipcode: {}, order: {}, {}".format(
                        zipcode, "".join(orders[0][0]), orders[0][1]
                    )
                )
        else:
            print("zipcode: {}, No Orders".format(zipcode))
