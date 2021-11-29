import re
from collections import defaultdict


def word_freq(text, freqs=defaultdict(int)):
    """Calculate word frequency in text. freqs are previous frequencies"""
    for word in [w.lower() for w in re.findall(r"\w+", text)]:
        freqs[word] += 1
    return freqs


freqs1 = word_freq("Duck season. Duck!")
freqs2 = word_freq("Rabbit season. Rabbit!")
print(freqs1)
print(freqs2)
