# 7.5 Online Book Reader

# Design the data structures for an online book reader system.

# Basic functionality:
    # user membership creation and extension
    # search book DB
    # read book
    # only one active user at a time
    # only one active book per user

# Classes
    # variables

    # functions

    # subclasses
        # variables

        # functions


# Online Reader System
class OnlineReaderSystem:
    def __init__(self, library, user_manager, display, active_book, active_user):
        self.library = library
        self.user_manager = user_manager
        self.display = display
        self.active_book = active_book
        self.active_user = active_user
    
    # get library
    def get_library(self):
        return self.library
    
    # get user manager
    def get_user_manager(self):
        return self.user_manager

    # get display
    def get_display(self):
        return self.display

    # get active book
    def get_active_book(self):
        return self.active_book

    # set active book
    def set_active_book(self, active_book):
        self.active_book = active_book
        self.display.display_book(active_book)

    # get active user
    def get_active_user(self):
        return self.active_user

    # set active user
    def set_active_user(self, active_user):
        self.active_user = active_user
        self.display.display_user(active_user)


# Library
class Library:

    def __init__(self, books):
        self.books = books        

    # add book
    def add_book(self, id, details):
        if id in self.books: 
            return None
        # Book book = new Book(id, details);
        books.append([id, details])
        return [id, details]

    # remove book by book name
    def remove_book_by_name(self, book_name):
        if book_name in self.books: 
            books.remove(book_name)
            return True
        return False

    # remove book by id
    def remove_book_by_id(self, book_id):
        if book_id in self.books: 
            books.remove(book_id)
            return True
        return False

    # find book
    def find_book(self, search_term):
        if search_term in self.books:
            # get & return id of book(s) that matches search term
            pass
        return None

# UserManager
class UserManager:

    def __init__(self, users):
        self.users = users

    # add user
    def add_user(self):
        # if users contains key return null
        # else add user
        pass
    # find user
    def find_user(self):
        # if users contains key return user
        # else return null
        pass
    # remove user by name
    def remove_user_by_name(self):
        # if users contains key remove user & return true
        # else return null
        pass
    # remove user by id
    def remove_user_by_id(self):
        # if users contains key remove user & return true
        # else return null
        pass

# Display
class Display:

    def __init__(self, active_book, active_user, page_number):
        self.active_book = active_book
        self.active_user = active_user
        self.page_number = page_number

    # display user
    def display_user(self):
        # set active user
        # refresh username
        pass
    # display book
    def display_book(self):
        # set page nyumber to 0
        # set active book
        # run refresh title, details, page
        pass
    # turn page forward
    def turn_page_forward(self):
        # add one to page
        pass
    # turn page backward
    def turn_page_backward(self):
        # subtract one from page
        pass
    # refresh username
    def refresh_username(self):
        # update username display
        pass
    # refresh title
    def refresh_title(self):
        # update title display
        pass
    # refresh details
    def refresh_details(self):
        # update details display
        pass
    # refresh page
    def refresh_page(self):
        # update page display
        pass

# Book
class Book:

    def __init__(self, book_id, details):
        self.book_id = book_id
        self.details = details

    # get id
    def get_book_id(self):
        return self.book_id
    # set id
    def set_book_id(self, book_id):
        self.book_id = book_id
        return self.book_id
    # get details
    def get_details(self):
        return self.details
    # set details
    def set_details(self, details):
        self.details = details
        return self.details

# User
class User:

    def __init__(self, user_id, details, account_type):
        self.user_id = user_id
        self.details = details
        self.account_type = account_type

    # renew membership
    def renew_membership(self):
        pass

    # get id
    def get_user_id(self):
        return self.user_id

    # set id
    def set_user_id(self, user_id):
        self.user_id = user_id
        return self.user_id

    # get details
    def get_details(self):
        return self.details

    # set details
    def set_details(self, details):
        self.details = details
        return self.details

    # get account type
    def get_account_type(self):
        return self.account_type

    # set account type
    def set_account_type(self, account_type):
        self.account_type = account_type
        return self.account_type