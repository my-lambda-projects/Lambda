def sumUpNumbers(inputString):
	"""
	Return the sum of the numbers in the inputString
	
	Time Complexity: O(n)
	Space Complexity: O(1)
	"""
    runningsum, number = 0, ''
    for i in range(len(inputString)):
        if inputString[i].isdigit():
            number += inputString[i]
            if i == len(inputString) - 1:
                runningsum += int(number)
                number = ''
        elif number != '' and not inputString[i].isdigit():
            runningsum += int(number)
            number = ''
    return runningsum