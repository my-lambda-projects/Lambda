def circleOfNumbers(n, firstNumber):
	"""
	Return number that is radially opposite firstNumber
	in circle from 1 to n
	"""
    return (firstNumber + (n / 2)) % n