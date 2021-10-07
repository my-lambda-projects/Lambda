# visit: https://imgur.com/a/oemBqyv
count = 0
total = 0
# Handle any exceptions using try/except
try:

    def main():
        # Initialize variables
        count = 0
        total = 0

        # Opens the Section1.txt file.
        infile = open("Section1.txt", "r")

        # Reads the numbers in the file into a list
        num = infile.readlines()

        for num in infile:
            number = float(num)
            total = total + number
            count = count + 1
            average = total / count

            # Close the file
            infile.close

    # Output: display the number of the scores, and the average of the scores
    print("Number of scores in Section 1: ", count)
    print("Average: ", format((average), ".2f"), "Letter Grade: ")

    total2 = 0
    count2 = 0

    infile2 = open("Section2.txt.", "r")

    for num in infile2:
        number = float(num)
        total2 = total2 + number
        count2 = count2 + 1
        average2 = total2 / count2

    infile2.close

    print("Number of scores in Section 2: ", count2)
    print("Average: ", format((average2), ".2f"), "Letter Grade: ", score)

    total_count = count1 + count2
    total_average = (total1 + total2) / total_count
    print("Numbers of score in both sections combined: ", total_count)
    print("Average: ", format((total_average), ".2f"), "Letter grade: ", score)

    scoring(grade)

    def scoring(grade):
        # Create outputs for numerical scores, make "else" anything below 0 or over 100
        if 89.5 <= grade <= 100:
            print("The letter grade is A")
        elif 79.5 <= grade <= 89.4:
            print("The letter grade is B")
        elif 69.5 <= grade <= 79.4:
            print("The letter grade is C")
        elif 59.5 <= grade <= 69.4:
            print("The letter grade is D")
        elif 0 <= grade <= 59.4:
            print("The letter grade is F")
        else:
            print("invalid score")

    main()


except IOError:
    print("An error occurred trying to open the file")

except ValueError:
    print("Non-numeric data found in the file")

except Exception as err:
    print(err)
