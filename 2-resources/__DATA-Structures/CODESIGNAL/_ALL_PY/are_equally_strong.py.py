def areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight):
    myStrongestArm = max(yourLeft, yourRight)
    myWeakestArm = min(yourLeft, yourRight)
    friendStrongestArm = max(friendsLeft, friendsRight)
    friendWeakestArm = min(friendsLeft, friendsRight)
    if myStrongestArm == friendStrongestArm and myWeakestArm == friendWeakestArm:
        return True
    else:
        return False
