"""Election Winners

    Given an array of the numbers of votes 
    given to each of the candidates so far, 
    and an integer k equal to the number of 
    voters who haven't cast their vote yet, 
    find the number of candidates who still 
    have a chance to win the election.
    
    The winner of the election must secure 
    strictly more votes than any other candidate. 
    If two or more candidates receive the same 
    (maximum) number of votes, assume there is 
    no winner at all.
"""


def electionsWinners(votes, k):
    """Find number of candidates that have chance to win election
    
    Args:
        votes(int): List of number of votes given to each candidate so far.
        k(int): Number of voters who haven't cast their vote yet.
        
    Return:
        Number of candidates that still have chance to win election
        
    Raises:
    """
    highest = max(votes)
    if k == 0:
        counter = votes.count(highest)
        if counter == 1:
            return 1
        return 0
    return len([vote for vote in votes if vote + k > highest])
