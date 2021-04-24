# Simple Singly Linked List Implementation in Ruby
class Node
  attr_accessor :value, :next_node
  def initialize(value)
    @value = value
  end
end

class LinkedList
  def initialize(value)
    node = Node.new(value)
    @head = node
    @tail = node
  end

  def append(value)
    @tail.next_node = Node.new(value)
    @tail = @tail.next_node
  end

  def to_s(current_node=@head)
    return current_node.value if current_node.next_node.nil?
    return "#{current_node.value} > #{to_s(current_node.next_node)}"
  end

  def prepend(value)
    new_node = Node.new(value)
    new_node.next_node = @head
    @head = new_node
  end

  def find(value,current_node=@head)
    return current_node if current_node.value == value
    return nil if current_node.next_node.nil?
    find(value, current_node.next_node)
  end

  def find_before(value,current_node=@head)
    return nil if @head.value = value
    return current_node if current_node.next_node.value == value
    find_before(value, current_node.next_node)
  end

  def insert_after(before_value, new_value)
    if @tail.value == before_value
      append(new_value)
    else
      before_node = find(before_value)
      swap = before_node.next_node
      new_node = Node.new(new_value)
      before_node.next_node = new_node
      new_node.next_node = swap
    end
  end

  def delete(value)
      before_node = find_before(value)
      if before_node.nil?
        swap = @head.next_node
        @head.next_node = nil
        @head = swap
      else
        before_node.next_node = before_node.next_node.next_node
      end
  end

  def shift
    return nil if @head.nil?
    swap = @head
    @head = @head.next_node
    return swap
  end


  def reverse
    return if @head.nil?

    @tmp_head = self.shift
    @tmp_head.next_node = nil
    @tail = @tmp_head

    until @head.nil?
      entry = self.shift
      entry.next_node = @tmp_head
      @tmp_head = entry
    end

    @head = @tmp_head
  end
end

list = LinkedList.new("I")
list.append("Love")
list.append("Momo")
p list.to_s
list.prepend("Hello")
p list.to_s

p list.find("Momo")
list.insert_after("I", "Really")
 p list.to_s
list.insert_after("Momo", "Choi")
 p list.to_s

p list.find_before("Momo")
list.delete("Really")
p list.to_s

list.delete("Hello")
p list.to_s

p list.reverse
p list.to_s
