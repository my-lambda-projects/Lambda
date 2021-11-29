# Blockchain Sprint Challenge

Welcome to the ground floor! Satoshi Brian is giving you the chance to be the first people to mine Lambda Coins. However, you'll have to compete with your fellow students to cash in.

Your task is to use your knowledge to write a mining program, similar to the ones you have been working with, to mine coins for the Lambda Blockchain.

The Lambda blockchain server works the same as the demos this week, _but it uses a DIFFERENT Proof of Work Algorithm._

Multi-Ouroboros of Work Algorithm - Find a number p' such that the last six digits of hash(p) are equal to the first six digits of hash(p') - IE: last_hash: ...999123456, new hash 123456888... - p is the previous proof, and p' is the new proof

Some things to keep in mind:

- With everyone mining at once, it may take a long time to actually mine a coin on the main server. _You will lose the contest most of the time!_
- There is a test server that you can test your code on: lambda-coin-test-1. As before, you can change the server that the miner uses by including it in the command to run the miner: `python3 miner.py https://lambda-coin-test-1.herokuapp.com/api` \*\* Please only mine against the test server to test your code - stop mining when the test is over
- The main server, and the competition, is the default and will run with `python3 miner.py`
- Please change your name in `my_id.txt` to something recognizable

Some Strategy Suggestions:

- Don't forget to install dependencies with `pipenv install` and run them inside `pipenv shell`
- _Think about what will happen if your strategy is the same as the example from class. If you start at 0 and count upward, and someone else does the same thing, but they start earlier or have a faster computer, what will happen?_
