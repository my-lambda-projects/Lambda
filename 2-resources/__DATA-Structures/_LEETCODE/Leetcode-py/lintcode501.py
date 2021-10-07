"""
Definition of Tweet:
class Tweet:
    @classmethod
    def create(cls, user_id, tweet_text):
         # This will create a new tweet object,
         # and auto fill id
"""


class MiniTwitter:
    def __init__(self):
        self.order = 0
        self.users_tweets = {}
        self.friends = {}

    """
    @param: user_id: An integer
    @param: tweet_text: a string
    @return: a tweet
    """

    def postTweet(self, user_id, tweet_text):
        tweet = Tweet.create(user_id, tweet_text)
        self.order += 1
        if user_id in self.users_tweets:
            self.users_tweets[user_id].append((self.order, tweet))
        else:
            self.users_tweets[user_id] = [(self.order, tweet)]
        return tweet

    """
    @param: user_id: An integer
    @return: a list of 10 new feeds recently and sort by timeline
    """

    def getNewsFeed(self, user_id):
        feeds = []
        if user_id in self.users_tweets:
            feeds = self.users_tweets[user_id][-10:]
        if user_id in self.friends:
            for friend in self.friends[user_id]:
                if friend in self.users_tweets:
                    feeds.extend(self.users_tweets[friend][-10:])
        feeds.sort(key=lambda x: x[0])
        return [feed[1] for feed in feeds[-10:][::-1]]

    """
    @param: user_id: An integer
    @return: a list of 10 new posts recently and sort by timeline
    """

    def getTimeline(self, user_id):
        if user_id in self.users_tweets:
            return [t[1] for t in self.users_tweets[user_id][-10:][::-1]]
        else:
            return []

    """
    @param: from_user_id: An integer
    @param: to_user_id: An integer
    @return: nothing
    """

    def follow(self, from_user_id, to_user_id):
        if from_user_id not in self.friends:
            self.friends[from_user_id] = set()
        self.friends[from_user_id].add(to_user_id)

    """
    @param: from_user_id: An integer
    @param: to_user_id: An integer
    @return: nothing
    """

    def unfollow(self, from_user_id, to_user_id):
        if from_user_id not in self.friends:
            return
        self.friends[from_user_id].remove(to_user_id)
