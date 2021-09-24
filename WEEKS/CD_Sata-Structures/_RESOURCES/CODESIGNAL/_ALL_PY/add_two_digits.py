def addTwoDigits(n):
	"""
	Return sum of the two digits in n
	"""
    digits = str(n)
    return sum([int(digit) for digit in digits])

