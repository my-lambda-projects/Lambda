def makeArrayConsecutive2(statues):
    additional_statues = 0
    sorted_statues = sorted(statues)  # Sort the statues
    for i in range(len(sorted_statues) - 1):
        if sorted_statues[i + 1] - sorted_statues[i] != 1:
            additional_statues += (sorted_statues[i + 1] - sorted_statues[i]) - 1
    return additional_statues
