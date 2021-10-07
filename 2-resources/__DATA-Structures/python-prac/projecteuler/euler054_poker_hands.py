#!/usr/bin/env python
# -*- encoding:utf-8 -*-

"""
Solution to Project Euler Problem 54
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Poker hands

In the card game poker, a hand consists of five cards and are ranked,
 from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the
highest value wins; for example, a pair of eights beats a pair of fives
(see example 1 below). But if two ranks tie, for example, both players have
a pair of queens, then highest cards in each hand are compared (see example
4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand         Player 1         Player 2         Winner
1         5H 5C 6S 7S KD
Pair of Fives
     2C 3S 8S 8D TD
Pair of Eights
     Player 2
2         5D 8C 9S JS AC
Highest card Ace
     2C 5C 7D 8S QH
Highest card Queen
     Player 1
3         2D 9C AS AH AC
Three Aces
     3D 6D 7D TD QD
Flush with Diamonds
     Player 2
4         4D 6S 9H QH QC
Pair of Queens
Highest card Nine
     3D 6D 7H QD QS
Pair of Queens
Highest card Seven
     Player 1
5         2H 2D 4C 4D 4S
Full House
With Three Fours
     3C 3D 3S 9S 9D
Full House
with Three Threes
     Player 1
The file, poker.txt, contains one-thousand random hands dealt to two
players. Each line of the file contains ten cards (separated by a single
space): the first five are Player 1's cards and the last five are Player 2's
cards. You can assume that all hands are valid (no invalid characters or
repeated cards), each player's hand is in no specific order, and in each hand
there is a clear winner.

How many hands does Player 1 win?
"""
from pathlib import Path
from itertools import groupby

GAMES_FNAME = Path(__file__).parent / "../data/poker.txt"

FACE_VALUES = list("23456789TJQKA")
VALUES = {f: i for i, f in enumerate(FACE_VALUES, start=2)}


def first(v):
    return v[0]


def second(v):
    return v[1]


card_value = first
card_suit = second


def parsecard(c):
    value = VALUES[first(c)]
    suite = second(c)
    return (value, suite)


def parse_hand(cards):
    return [parsecard(c) for c in cards]


def load_games():
    def load():
        with open(GAMES_FNAME, "r") as f:
            for line in f:
                cards = parse_hand(line.split())
                hand_1 = cards[:5]
                hand_2 = cards[-5:]
                yield hand_1, hand_2

    return list(load())


def rank_hand(hand):
    """
    Some combinations of hands preclude others. For example, for all
    cards to be of the same suit they must all be of different value,
    and all flushes rank above combinations of cards of the same value.
    """

    def groupcounts(it, key=None):
        return [(len(list(g)), k) for k, g in groupby(it, key)]

    values = list(reversed(sorted(card_value(c) for c in hand)))
    suits = list(sorted(card_suit(c) for c in hand))
    bycount = list(reversed(sorted(groupcounts(values))))
    counts = list(map(first, bycount))
    poker = [4, 1] == counts
    full = [3, 2] == counts
    different = len(counts) == len(hand)
    flush = 1 == len(set(suits))
    straight = different and values[0] == (values[-1] + len(hand) - 1)

    return (
        flush and straight,
        poker,
        full,
        flush,
        straight,
        counts,
        bycount,
        values,
        hand,
    )


def play_games(games):
    won_a = sum(rank_hand(a) >= rank_hand(b) for a, b in games)
    return won_a, len(games) - won_a


def test():
    h1 = parse_hand(["5H", "5C", "6S", "7S", "KD"])
    h2 = parse_hand(["2C", "3S", "8S", "8D", "TD"])
    assert rank_hand(h1) < rank_hand(h2)
    h1 = parse_hand(["5D", "8C", "9S", "JS", "AC"])
    h2 = parse_hand(["2C", "5C", "7D", "8S", "QH"])
    assert rank_hand(h1) > rank_hand(h2)
    h1 = parse_hand(["2D", "9C", "AS", "AH", "AC"])
    h2 = parse_hand(["3D", "6D", "7D", "TD", "QD"])
    assert rank_hand(h1) < rank_hand(h2)
    h1 = parse_hand(["4D", "6S", "9H", "QH", "QC"])
    h2 = parse_hand(["3D", "6D", "7H", "QD", "QS"])
    assert rank_hand(h1) > rank_hand(h2)
    h1 = parse_hand(["2H", "2D", "4C", "4D", "4S"])
    h2 = parse_hand(["3C", "3D", "3S", "9S", "9S"])
    assert rank_hand(h1) > rank_hand(h2)


def run():
    assert 376 == play_games(load_games())[0]


if __name__ == "__main__":
    test()
    run()
