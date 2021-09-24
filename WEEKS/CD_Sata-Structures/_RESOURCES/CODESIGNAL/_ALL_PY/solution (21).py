def sensorsDifferenceSum(sensor_1, sensor_2):
    """
    given two lists contains the reading of two sensors for the same place, give the total difference between
    there elements
    """
    if len(sensor_1) == 0 or len(sensor_2) == 0:
        return 0
    return abs(sensor_1[0] - sensor_2[0]) + sensorsDifferenceSum(
        sensor_1[1:], sensor_2[1:]
    )


print(sensorsDifferenceSum([1, -2, 4, 10], [2, 5, 3, 10]))
