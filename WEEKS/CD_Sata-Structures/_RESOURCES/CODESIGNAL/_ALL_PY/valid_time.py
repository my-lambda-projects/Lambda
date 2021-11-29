def validTime(time):
	"""
	Boolean indicating if time is in valid 24hr format
	"""
    tokens = time.split(':')
    hours = int(tokens[0])
    minutes = int(tokens[1])
    return not (hours > 23 or minutes > 59)