In a town, there are n people labelled from 1 to n.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

 

Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: n = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
 

Constraints:

1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= n


def findJudge(self, N: int, trusts: List[List[int]]) -> int:
        # Build our dict
        trust_dict = {}
        # Add the keys
        for i in range(1, N+1):
            trust_dict[i] = [0, 0]
        # Add the in/out degrees
        for trust in trusts:
            a = trust[0]
            b = trust[1]
            trust_dict[a][1] += 1
            trust_dict[b][0] += 1
        candidate_judge = -1
        # Now search for judge
        for person, degrees in trust_dict.items():
            if degrees[0] == N-1 and degrees[1] == 0:
                if candidate_judge != -1:
                    # This is the SECOND time we are seeing a judge
                    return -1
                candidate_judge = person
        return candidate_judge
