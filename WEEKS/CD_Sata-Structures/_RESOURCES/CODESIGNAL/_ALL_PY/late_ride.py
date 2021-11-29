def lateRide(n):
	"""
	Return sum of hours and minutes past 00:00
	"""
    hours = str(n // 60)
    minutes = str(n % 60)
    total = 0
    for digit in hours:
        total += int(digit)
    for digit in minutes:
        total += int(digit)
    return total

