def avoidObstacles(inputArray):
    sortedlist = sorted(inputArray)  # Sort list in ascending order
    jump_dist = 1  # Set jump distance to 1 initially
    obstacle_hit = True  # Flag to check if current jump distance hit an obstacle

    while obstacle_hit:
        obstacle_hit = False  # Set flag to false as we check next jump distance
        jump_dist += (
            1
        )  # Increment jump distance as we check if next value hits no obstacles
        # Check if jumping with current length hits an obstacle
        for i in range(len(sortedlist)):
            if sortedlist[i] % jump_dist == 0:
                obstacle_hit = True
                break
    return jump_dist
