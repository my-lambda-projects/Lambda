def water_collected(heights):
    water_collected = 0
    left_height = []
    right_height = []

    temp_max = heights[0]
    for height in heights:
        if height > temp_max:
            temp_max = height
        left_height.append(temp_max)

    temp_max = heights[-1]
    for height in reversed(heights):
        if height > temp_max:
            temp_max = height
        right_height.insert(0, temp_max)

    for i, height in enumerate(heights):
        water_collected += min(left_height[i], right_height[i]) - height
    return water_collected


def main():
    numberOfTowers = input()
    sequenceHeights = input()
    maxVume(numberOfTowers, sequenceHeights)


if __name__ == "__main__":
    main()
