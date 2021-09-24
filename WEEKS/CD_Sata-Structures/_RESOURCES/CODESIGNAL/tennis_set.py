def tennisSet(score1, score2):
    return (
        True
        if score1 == 6
        and score2 < 5
        or score1 < 5
        and score2 == 6
        or score1 == 7
        and 5 <= score2 < 7
        or score2 == 7
        and 5 <= score1 < 7
        else False
    )
