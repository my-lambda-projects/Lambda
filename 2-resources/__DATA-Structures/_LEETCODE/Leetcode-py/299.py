class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        s = {}
        g = {}
        bulls, cows = 0, 0
        for i in range(len(secret)):
            if secret[i] == guess[i]:
                bulls += 1
            else:
                s[secret[i]] = s.get(secret[i], 0) + 1
                g[guess[i]] = g.get(guess[i], 0) + 1
        for k in s:
            if k in g:
                cows += min(g[k], s[k])
        return "{}A{}B".format(bulls, cows)
