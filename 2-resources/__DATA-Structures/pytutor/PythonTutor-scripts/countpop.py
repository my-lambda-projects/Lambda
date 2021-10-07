# have to use CSV
# In the file (population.csv), print out the names of the most
# populous countries and the number of people.
# We print out the countries and the populations that correspond
# to the medians of the population.
# (assuming that the number of countries is always odd)
# Create a function that outputs the Average population up
# to two decimal places.


import pprint


def get_population(filename):
    import os
    import csv
    import statistics

    fp = os.path.join(os.getcwd(), filename)

    with open(fp, "r") as data:

        csv_reader = csv.DictReader(data)

        country = []
        population = []

        for line in csv_reader:
            country.append(line["Country (or dependent territory)"])
            population.append(int(line["Population"]))

        # 1st question: Max population
        max_pop = max(population)
        idx_pop = population.index(max_pop)
        print(
            f"{country[idx_pop]} is the most populous country with a pop'n of {max_pop}."
        )

        # 2nd question: Median population
        median_pop = statistics.median(population)
        idx_pop = population.index(median_pop)
        print(f"{country[idx_pop]} is the median country with a pop'n of {median_pop}.")

        # 3rd quesiton: Average population
        ave_pop = statistics.mean(population)
        print("The average population is %.2f." % ave_pop)


file = "population.csv"
get_population(file)
