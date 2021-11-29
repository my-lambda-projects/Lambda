def divides_self(num):
    # TODO
    # PLAN
    # Loop through digits in the number
    #   - Use % to get the rightmost digit
    #   - Use / to discard the rightmost digit
    #   - Return false if dividing by a digit leads to a remainder
    #   OR if we are trying to divide by 0

    # Return true if the loop exits (all numbers divided evenly)

    # set a temp value variable to the number
    # while value is not zero
    # extract the digit bt moding our value by 10
    # check if the digit is zero, or if num mod the digit is not zero
    # return False

    # also divide our value by 10 to make sure we do not get an infinite loop :)

    # return True
    pass


print(divides_self(128))  # → true
print(divides_self(12))  # → true
print(divides_self(120))  # → false
