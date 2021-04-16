# 7.7 Chat Server

# Explain how you would design a chat server.
# In particular, provide details about the various backend components, classes, and methods.  
# What would be the hardest problems to solve?

# features
    # signing on/off
    # add requests
    # update status
    # create group/private chats
    # add new messages to private/group chats

# UserManager
class UserManager:
    # instance, usersByID, usersByAccountName, onlineUsers
    def __init__(self, instance, users_by_id, users_by_account_name, online_users):
        self.instance = instance
        self.users_by_id = users_by_id
        self.users_by_account_name = users_by_account_name
        self.online_users = online_users

    # get_instance, add_user, approve_add_request, reject_add_request, user_signed_on, user_signed_off
    def get_instance(self):
        if self.instance == None:
            self.instance = UserManager()
        return self.instance
    def add_user(self, from_user, to_account_name):
        pass
    def approve_add_request(self, add_request):
        pass
    def reject_add_request(self, add_request):
        pass
    def user_signed_on(self, account_name):
        # add to online users
        pass
    def user_signed_off(self, account_name):
        # remove from online users
        pass

# User
class User:
    # id, status (null), private_chats, group_chats, received_add_requests, sent_add_requests, 
        # contacts, account_name, full_name
    def __init__(self, user_id, status, private_chats, group_chats, received_add_requests, 
                    sent_add_requests, contacts, account_name, full_name):
        self.user_id = user_id
        self.status = status
        self.private_chats = private_chats
        self.group_chats = group_chats
        self.received_add_requests = received_add_requests
        self.sent_add_requests = sent_add_requests
        self.contacts = contacts
        self.account_name = account_name
        self.full_name = full_name

    # send_message_to_user, send_message_to_group_chat, set_status, get_status, add_contact, received_add_request,
        # send_add_request, remove_add_request, request_add_user, add_conversation_private, add_conversation_group,
        # get_id, get_account_name, get_full_name
    def send_message_to_user(self, to_user, content):
        pass
    def send_message_to_group_chat(self, user_id, count):
        pass
    def set_status(self, status):
        pass
    def get_status(self):
        return self.status
    def add_contact(self, user):
        pass
    def received_add_request(self, add_request):
        pass
    def send_add_request(self, add_request):
        pass
    def remove_add_request(self, add_request):
        pass
    def request_add_user(self, account_name):
        pass
    def add_conversation_private(self, conversation):
        pass
    def add_conversation_group(self):
        pass
    def get_id(self):
        return self.user_id
    def get_account_name(self):
        return self.account_name
    def get_full_name(self):
        return self.full_name

# Conversation
class Conversation:
    # participants, id, messages
    def __init__(self, participants, conversation_id, messages):
        self.participants = participants
        self.conversation_id = conversation_id
        self.messages = messages
    # get_messages, add_message, get_id
    def get_messages(self):
        return self.messages
    def add_message(self, message):
        pass
    def get_id(self):
        return self.conversation_id

# GroupChat
class GroupChat(Conversation):
    # remove_participant, add_participant
    def remove_participant(self, user):
        pass
    def add_participant(self, user):
        pass

# PrivateChat
class PrivateChat(Conversation):
        # user1, user2
    def __init__(self, user1, user2):
        self.user1 = user1
        self.user2 = user2
        # get_other_participant
    def get_other_participant(self, primary_user):
        if self.user1 == primary_user:
            return self.user2
        return self.user1
# Message
class Message:
    # content, date
    def __init__(self, content, date):
        self.content = content
        self.date = date
    # get_content, get_date
    def get_content(self):
        return self.content
    def get_date(self):
        return self.date

# AddRequest
class AddRequest:
    # from_user, to_user, date, status
    def __init__(self, from_user, to_user, date, status):
        self.from_user = from_user
        self.to_user = to_user
        self.date = date
        self.status = status
    # add_request, get_status, get_from_user, get_to_user, get_date
    def add_request(self, from_user, to_user, date):
        pass
    def get_status(self):
        return self.status
    def get_from_user(self):
        return self.from_user
    def get_to_user(self):
        return self.to_user
    def get_date(self):
        return self.date
# UserStatus
class UserStatus:
    # message, type
    def __init__(self, message, message_type):
        self.message = message
        self.message_type = message_type
    # get_message
    def get_message(self):
        return self.message

# UserStatusType offline, away, idle, available, busy
class UserStatusType:
    def __init__(self):
        self.offline = "offline"
        self.away = "away"
        self.idle = "idle"
        self.available = "available"
        self.busy = "busy"
    # get_status_type
    def get_status_type(self, status):
        if status == "offline":
            return self.offline
        if status == "away":
            return self.away
        if status == "idle":
            return self.idle
        if status == "available":
            return self.available
        if status == "busy":
            return self.busy

# Request Status unread, read, accepted, rejected
class RequestStatus:
    def __init__(self):
        self.unread = "unread"
        self.read = "read"
        self.accepted = "accepted"
        self.rejected = "rejected"
