def findProfession(level, pos):
    # Base case
    if level == 1:
        return "Engineer"

    # Recursively find parent's profession. If parent
    # is a doctar, this node will be a doctal if it is
    # at odd position and an engineer if at even position
    if findProfession(level - 1, (pos + 1) // 2) == "Doctor":
        if pos % 2:
            return "Doctor"
        else:
            return "Engineer"

    # If parent is an engineer, then current node will be
    # an enginner if at add position and doctor if even
    # position.
    if pos % 2:
        return "Engineer"
    else:
        return "Doctor"
