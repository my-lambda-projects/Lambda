# Tournament Winner

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named `competitions` and `results`, respectively. The `competitions` array has elements in the form of `[homeTeam, awayTeam]`, where each team is a string of at most 30 characters representing the name of the team. The `results` array contains information about the winner of each corresponding competition in the `competitions` array. Specifically `results[i]` denotes the winner of `competitions[i]`, where as 1 in the `results` array means that the home team in the corresponding competition won and a `0` means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

### Sample Input

```python
competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
results = [0, 0, 1]
```

### Sample Output

```python
"Python"
```

## Pseudocode

-   Init a HashMap to keep track of team's wins
-   Traverse through Competitions indexes
    -   if results at that index is 0
        -   if away team is already in hashmap, increment value by one
        -   if not set its value to 1
    -   else (result is 1)
        -   if home team is already in hashmap, increment value by one
        -   if not set its value to 1
-   init a max integer to determine max wins
-   traverse through hashmap values (scores)
    -   if score is greater than max, set max to score
-   find the index of the max value in the hashmap values
-   return team at that index in hashmap keys

## Solution

```python
def tournament_winner(competitions, results):
    scores = {}
    for i in range(len(competitions)):
        if(results[i] == 0):
            if(competitions[i][1] in scores):
                scores[competitions[i][1]] += 1
            else:
                scores[competitions[i][1]] = 1
        else:
             if(competitions[i][0] in scores):
                scores[competitions[i][0]] += 1
            else:
                scores[competitions[i][0]] = 1
    max = 1
    for score in score.values():
        if score > max:
            max = score
    maxIdx = list(scores.values()).index(max);
    return list(scores.keys())[maxIdx]
```
