def maxMultiple(divisor, bound):
	"""
	Return number n that is greater than 0, less than
	or equal to bound and divisible by divisor
	"""
    number = 0
    while number <= bound and number % divisor == 0:
        number += divisor
    number -= divisor
    return number