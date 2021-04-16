# 7.1 Deck of Cards

# Design the data structures for a generic deck of cards.  
# Explain how you would subclass the data structures to implement blackjack.

# Your answer should ideally consider the following:
    # Scoring: On what level of the system is scoring handled? What are the advantages and disadvantages of this?
    # Rules: What kind of flexibility exists for playing with slightly different house rules if needed?
    # Betting: How are bet payouts handled? How are odds factored in?

class Suit:

    def __init__(self, value):
        self.club = 0
        self.diamond = 1
        self.heart = 2
        self.spade = 3
        self.value = value

    def getValue(self):
        return self.value

    def getSuitFromValue(self, value):
        if value == "club":
            return self.club
        if value == 0:
            return "club"
        if value == "diamond":
            return self.diamond
        if value == 1:
            return "diamond"
        if value == "diamond":
            return self.heart
        if value == 2:
            return "heart"
        if value == "spade":
            return self.spade
        if value == 3:
            return "spade"


class Card:
    def __init__(self, face_value, suit, value, available=True):
        self.available = available
        self.face_value = face_value
        self.suit = suit
        # public abstract int value()???
        self.value = value
    
    def card(self, card, suit):
        self.face_value = card
        self.suit = suit

    def suit(self):
        return self.suit

    def isAvailable(self):
        return self.available
    
    def markUnavailable(self):
        self.available = False
    
    def markAvailable(self):
        self.available = True
        
class Deck(Card):
    def __init__(self, cards=[], dealt_index=0):
        super().__init__()
        self.cards = cards
        self.dealt_index = dealt_index

    def setDeckOfCards(self):
        pass
    
    def shuffle(self):
        pass

    def remaining_cards(self):
        # return cards.size() - dealtIndex
        pass
    
    def deal_hand(self):
        pass
    
    def deal_card(self):
        pass

    
class Hand(Card):

    def __init__(self, cards=[]):
        super().__init__()
        self.cards = cards

    def score(self):
        score = 0
        cards_length = len(self.cards)
        for x in range(0, cards_length):
            # might be wrong
            score += self.cards[x].value()

    def add_card(self, card):
        self.cards.append(card)

class BlackJackHand(Hand):
    def __init__(self, cards=[], max_score=21):
        super().__init__(cards=cards)
        self.max_score = max_score

    def score(self):
        return super().score()
    
    def busted(self):
        return self.score() > max_score

    def is_21(self):
        return self.score() == max_score
    
    def is_blackjack(self):
        pass

class BlackJackCard(Card):
    def __init__(self, face_value, suit, available=True):
        super().__init__(face_value, suit, available=available)
    
    def value(self):
        if is_ace():
            return 1
        elif is_face_card():
            return 10
        else:
            return self.face_value
    
    def min_value(self):
        if is_ace():
            return 1
        else:
            return self.value()

    def max_value(self):
        if is_ace():
            return 11
        else:
            return self.value()
    
    def is_ace(self):
        self.face_value = 1
        return self.face_value
    
    def is_face_card(self):
        return self.face_value >= 11 and self.face_value <= 13