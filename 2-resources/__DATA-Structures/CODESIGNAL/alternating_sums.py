def alternatingSums(a):
    team1, team2 = [], []
    for i in range(len(a)):
        if i % 2 == 0:
            team1.append(a[i])
        else:
            team2.append(a[i])
    return [sum(team1), sum(team2)]
