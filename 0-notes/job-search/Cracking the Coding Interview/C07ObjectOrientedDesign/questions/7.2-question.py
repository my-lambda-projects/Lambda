# 7.2 Call Center

# Imagine you have a call center with 3 levels of employees:
    # respondent, manager, & director
# An incoming telephone call must be first allocated to a respondent who is free.
# If the respondent can't handle the call, he or she must escalate the call to a manager.
# If the manager is not free or able to handle it, then the call should be escalated to a director.
# Design the classes and data structures for this problem.
# Implement a method dispatchCall() which assigns a call to the first available employee.

class CallHandler:
    def __init__(self, respondents_count=10, managers_count=4, directors_count=2, employee_levels=[], respondents=[], managers=[], directors=[]):
        self.levels = 3
        self.respondents_count = respondents_count
        self.managers_count = managers_count
        self.directors_count = directors_count
        self.employee_levels = employee_levels
        self.employee_levels[0] = respondents
        self.employee_levels[1] = managers
        self.employee_levels[2] = directors

# list<list<call>> callQueues

    def call_handler(self):
        pass

    def get_handler_for_call(self, call):
        pass

    def dispatch_call(self, caller):
        pass
        # Call call = new Call(caller)
        # self.dispatch_call(call)

    def dispatch_call(self, call):
        pass
        # Employee emp = get_handler_for_call(call)
        # if emp is not null:
            # emp.receive_call(call)
            # call.set_handler(emp)
        # else:
            # call.reply("Please wait for free employee to reply.")
            # call_queues.get(call.get_rank().get_value().add(call))

    def assign_call(self, emp):
        pass

class Call:

    def __init__(self, rank, caller, handler):
        self.rank = rank
        self.caller = caller
        self.handler = handler
    
    def call(self, caller):
        pass
        self.rank = self.rank.Responder
        self.caller = caller


    def set_handler(self, employee):
        pass
        self.handler = employee
    
    def reply(self, message):
        pass

    def get_rank(self):
        return self.rank

    def set_rank(self, rank):
        self.rank = rank

    def increment_rank(self):
        pass

    def disconnect(self):
        pass

class Employee:
    
    def __init__(self, current_call, rank):
        self.current_call = current_call
        self.rank = rank
        pass
    
    def employee(self, handler):
        pass

    def receive_call(self, call):
        pass

    def call_completed(self):
        pass

    def escalate_and_reassign(self):
        pass

    def assign_new_call(self):
        pass

    def is_free(self):
        self.current_call = None
        return self.current_call

    def get_rank(self):
        return self.rank

class Director(Employee):

    def __init__(self):
        super().__init__()
        self.rank = self.rank.director

class Manager(Employee):

    def __init__(self):
        super().__init__()
        self.rank = self.rank.manager
        
class Respondent(Employee):

    def __init__(self):
        super().__init__()
        self.rank = self.rank.responder
        