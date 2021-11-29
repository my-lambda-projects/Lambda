import pprint


def summarize(filename):
    import os
    import csv

    # with open(os.path.join(os.getcwd(), filename), "r") as inFile:

    #     data = []

    #     #  Split data per line and store to data stack
    #     for line in inFile:
    #         data.append([item for item in line.split(",")])

    #     #  Stack consumption for each year
    #     consumption = []

    #     #  Start after the list with column headings
    #     for i in range(1, len(data)):
    #         consumption.append([int(num) for num in data[i]])

    #     #  Map consumption for each sector
    #     con_dict = {}

    #     for tup in consumption:
    #         #  Get the consumption for Commercial Sector
    #         con_dict.setdefault("commercial", [])
    #         con_dict["commercial"].append(tup[1:11])

    #         #  Get the consumption for Industrial Sector
    #         con_dict.setdefault("industrial", [])
    #         con_dict["industrial"].append(tup[15:26])

    #         #  Get the consumption for Residential Sector
    #         con_dict.setdefault("residential", [])
    #         con_dict["residential"].append(tup[30:37])

    #     #  Get the total consumption for each sector per year
    #     commercial = []
    #     industrial = []
    #     residential = []

    #     #  Get the total consumption for each year
    #     for sector, con in con_dict.items():
    #         if sector == "commercial":
    #             for n in con:
    #                 commercial.append(sum(n))

    #         elif sector == "industrial":
    #             for n in con:
    #                 industrial.append(sum(n))
    #         else:
    #             for n in con:
    #                 residential.append(sum(n))

    #     #  Get the year from the consumption data
    #     years = []
    #     for tup in consumption:
    #         years.append(tup[0])

    # #  Write the output to disk
    # output_fn = "_summary.csv"
    # output_folder = "output"
    # op = os.path.join(os.getcwd(), output_folder)

    # if not os.path.exists(op):
    #     os.makedirs(output_folder)

    # #  Remove the "csv" string in filename
    # #  Pass newline = "" to remove newline in writerow() method
    # with open(os.path.join(op, filename.rstrip("csv") + output_fn), "w", newline="") as csv_file:

    #     fieldnames = ["Year", "Consumption.Commercial",
    #                   "Consumption.Industrial", "Consumption.Residential"]

    #     writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

    #     writer.writeheader()

    #     for year, consumption in zip(years, zip(commercial, industrial, residential)):
    #         writer.writerow({"Year": year, "Consumption.Commercial": consumption[0],
    #                          "Consumption.Industrial": consumption[1], "Consumption.Residential": consumption[2]})

    #  Using DictReader
    #  Read the data
    #  File path
    fp = os.path.join(os.getcwd(), filename)

    with open(fp, "r") as data:

        csv_reader = csv.DictReader(data)

        #  Create dictionary with key year
        data_dict = {}

        for i in range(1960, 1974):
            data_dict.setdefault(
                i, (dict(Commercial=[]), dict(Industrial=[]), dict(Residential=[]))
            )

        #  Map consumption per sector for each year
        for line in csv_reader:
            for sector, con in line.items():
                for year in data_dict:
                    if "Commercial" in sector:
                        if line["Year"] == str(year):
                            data_dict[year][0]["Commercial"].append(int(con))
                    if "Industrial" in sector:
                        if line["Year"] == str(year):
                            data_dict[year][1]["Industrial"].append(int(con))
                    else:
                        if line["Year"] == str(year):
                            data_dict[year][2]["Residential"].append(int(con))

        #  Compute the sum of each sector
        for year in data_dict:
            data_dict[year][0]["Commercial"] = sum(data_dict[year][0]["Commercial"])
            data_dict[year][1]["Industrial"] = sum(data_dict[year][1]["Industrial"])
            data_dict[year][2]["Residential"] = sum(data_dict[year][2]["Residential"])

        # return data_dict

        #  Write the output to disk
        output_fn = "_summary2.csv"
        output_folder = "output"
        op = os.path.join(os.getcwd(), output_folder)

        if not os.path.exists(op):
            os.makedirs(output_folder)

        #  Remove the "csv" string in filename
        #  Pass newline = "" to remove newline in writerow() method
        with open(
            os.path.join(op, filename.rstrip("csv") + output_fn), "w", newline=""
        ) as csv_file:

            fieldnames = [
                "Year",
                "Consumption.Commercial",
                "Consumption.Industrial",
                "Consumption.Residential",
            ]

            writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

            writer.writeheader()

            for year, sector in data_dict.items():
                writer.writerow(
                    {
                        "Year": year,
                        "Consumption.Commercial": sector[0]["Commercial"],
                        "Consumption.Industrial": sector[1]["Industrial"],
                        "Consumption.Residential": sector[2]["Residential"],
                    }
                )

            #  Check if the file is exported successfuly
            if not os.path.isfile(os.path.join(op, filename.rstrip("csv") + output_fn)):
                return "Summary file was not exported."

            else:
                return "Summary file was exported successfuly."


fn = "consumption.csv"
pprint.pprint(summarize(fn))
