#!/usr/bin/python

import argparse


def find_max_profit(prices):
    # hint: "what if we kept track of the current_min_price_so_far and the max_profit_so_far?"
    min_price = prices[0]
    print(f"min before loop: {min_price}")

    # hint: make sure that the max profit is computed by subtracting some price by another
    # price that comes before it; it can't come after it in the list of prices.
    max_profit = prices[1] - min_price
    print(f"max before loop: {max_profit}")

    print(f"\nPrices ------: {prices}")
    print(f"Prices '[1:]': {prices[1:]}")
    print(f"Prices '[:1]': {prices[:1]}\n")

    for price in prices[1:]:
        print(f"Price: {price}")
        max_profit = max(price - min_price, max_profit)
        print(f"\tMax profit: \t {max_profit}")
        min_price = min(price, min_price)
        print(f"\tMin_price: \t {min_price}")
    return max_profit


my_list_1 = [10, 7, 5, 8, 11, 9]
print(f"Should be 6: {find_max_profit(my_list_1)}")

my_list_2 = [100, 90, 80, 50, 20, 10]
print(f"Should be -10: {find_max_profit(my_list_2)}")

if __name__ == "__main__":
    # This is just some code to accept inputs from the command line
    parser = argparse.ArgumentParser(description="Find max profit from prices.")
    parser.add_argument(
        "integers", metavar="N", type=int, nargs="+", help="an integer price"
    )
    args = parser.parse_args()

    print(
        "A profit of ${profit} can be made from the stock prices {prices}.".format(
            profit=find_max_profit(args.integers), prices=args.integers
        )
    )
