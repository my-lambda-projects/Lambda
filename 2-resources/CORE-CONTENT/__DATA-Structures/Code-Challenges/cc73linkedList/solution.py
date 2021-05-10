# https://youtu.be/6Ilb270zYpU
# https://repl.it/student/assignments/499618/model_solution?fromSubmissionId=1891345

"""Define a class with the `class` keyword"""
class Node:
  """The `__init__` method on a class in Python is analogous
  with JavaScript's `constructor` method; it specifies how a
  class should be initialized give some parameters. You'll
  also notice the `self` keyword, which is passed in to
  every class method as the first argument. It's very much
  analogous to JavaScript's `this` keyword."""
  def __init__(self, data=None, next_node=None):
    self.data = data
    self.next_node = next_node

  """Returns the data stored at the current node"""
  def get_data(self):
    return self.data

  """Returns the next node this node points to"""
  def get_next(self):
    return self.next_node

  """Sets this node's `next_node` pointer"""
  def set_next(self, new_next):
    self.next_node = new_next


"""Now that we've defined our `Node`, we can define our Linked List
class, which will utilize our `Node` class"""
class LinkedList:
  def __init__(self, head=None):
    self.head = head

  """Wraps the input item in a Node and adds it as the
  current node's next node"""
  def insert(self, item):
    new_node = Node(item)
    new_node.set_next(self.head)
    self.head = new_node

  """Returns the number of nodes in the linked list"""
  def size(self):
    current = self.head
    count = 0
    while current:
      count += 1
      current = current.get_next()
    return count

  """Returns the target item if it is in the linked list,
  and None otherwise"""
  def search(self, target):
    current = self.head
    found = False
    while current and found is False:
      if current.get_data() == target:
        found = True
      else:
        current = current.get_next()
    return current

  """Deletes the target item from the linked list if it is
  in the list. Raises a ValueError exception otherwise if
  the target item is not in the list"""
  def delete(self, target):
    current = self.head
    previous = None
    found = False
    while current and found is False:
      if current.get_data() == target:
        found = True
      else:
        previous = current
        current = current.get_next()
    if current is None:
      raise ValueError('Data not in list')
    if previous is None:
      self.head = current.get_next()
    else:
      previous.set_next(current.get_next())
  
