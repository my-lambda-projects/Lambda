"""Write a program to prompt the user for hours and rate per hour using input to compute gross pay.
Pay the hourly rate for the hours up to 40 and 1.5 times the hourly rate for all hours worked above 40 hours.
Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75).
You should use input to read a string and float() to convert the string to a number.
Do not worry about error checking the user input - assume the user types numbers properly
"""


def compute_payment(hour):

    # payment for the 1st 40 hrs
    rate = 10.50
    pay_base = rate * 40

    # payment for the 1st 40 hrs
    if hour <= 40:
        return pay_base

    # payment for extra hrs
    else:
        extra_hrs = hour - 40
        rate = rate * 1.5
        pay_succeeding = rate * extra_hrs
        total_payment = pay_base + pay_succeeding

        return total_payment


hrs = float(input("Enter Hours: "))
print(compute_payment(hrs))
