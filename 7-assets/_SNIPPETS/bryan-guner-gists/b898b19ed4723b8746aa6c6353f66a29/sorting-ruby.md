#SORTS
- Selection Sort: This algorithm works by examining a contiguous sublist of the original list. It finds the nth largest element in the list and swaps it with the nth element. It then examines n-1 terms. Selection sort runs in Θ(n2) time for worst, bets, and average case scenarios.
- Bubblesort: This algorithm works by swapping consecutive elements that are unordered. It ex- amines two consecutive elements at a time. Bubblesort terminates when it completes an iteration through the list without swapping any elements. It runs in O(n2) time for average and worst cases, and O(n) time if the list is already sorted.
- Insertion Sort: This algorithm works by examining a larger contiguous subset of the original list on each iteration. On the first iteration, only elements at indices 0-1 are examined. If they are out of order, they are swapped. On the next iteration, elements at indices 0-2 are examined. The element at index 2 is pulled out of the list and compared against the preceding one-by-one while it is bigger than the given element. This process is repeated throughout the entire list. If the list is nearly sorted, then insertion sort runs in O(n) time. Otherwise, it runs in O(n2) time.
- Mergesort: This algorithm partitions the list into contiguous sublists until each sublist has at most two elements. These elements are swapped if necessary. The sublists are then merged into their parent sublists such that the elements are properly ordered. Mergesort runs in O(nlog(n)) time, and is an ideal sorting algorithm for both arrays and linked lists.
- Quicksort: This algorithm works to sort arrays by ordering elements around a partition point. Elements larger than the parttion go to the right of it, and elements smaller than the partition go to the left of it. Elements equal to the partition value can be placed on either side, as long as this is handled consistently. The subsets on either side of the partition are then recursively
6
evaluated until contiguous subsets of no more than two elements are evaluated.

# Sample implementation of quicksort and mergesort in ruby
Both algorithm sort in O(n * lg(n)) time
Quicksort works inplace, where mergesort works in a new array

```ruby
def quicksort(array, from=0, to=nil)
    if to == nil
        # Sort the whole array, by default
        to = array.count - 1
    end
 
    if from >= to
        # Done sorting
        return
    end
 
    # Take a pivot value, at the far left
    pivot = array[from]
 
    # Min and Max pointers
    min = from
    max = to
 
    # Current free slot
    free = min
 
    while min < max
        if free == min # Evaluate array[max]
            if array[max] <= pivot # Smaller than pivot, must move
                array[free] = array[max]
                min += 1
                free = max
            else
                max -= 1
            end
        elsif free == max # Evaluate array[min]
            if array[min] >= pivot # Bigger than pivot, must move
                array[free] = array[min]
                max -= 1
                free = min
            else
                min += 1
            end
        else
            raise "Inconsistent state"
        end
    end
 
    array[free] = pivot
 
    quicksort array, from, free - 1
    quicksort array, free + 1, to
end
```

```ruby
def mergesort(array)
    if array.count <= 1
        # Array of length 1 or less is always sorted
        return array
    end
 
    # Apply "Divide & Conquer" strategy
 
    # 1. Divide
    mid = array.count / 2
    part_a = mergesort array.slice(0, mid)
    part_b = mergesort array.slice(mid, array.count - mid)
 
    # 2. Conquer
    array = []
    offset_a = 0
    offset_b = 0
    while offset_a < part_a.count && offset_b < part_b.count
        a = part_a[offset_a]
        b = part_b[offset_b]
 
        # Take the smallest of the two, and push it on our array
        if a <= b
            array << a
            offset_a += 1
        else
            array << b
            offset_b += 1
        end
    end
 
    # There is at least one element left in either part_a or part_b (not both)
    while offset_a < part_a.count
        array << part_a[offset_a]
        offset_a += 1
    end
 
    while offset_b < part_b.count
        array << part_b[offset_b]
        offset_b += 1
    end
 
    return array
end
```
 
# Search a sorted array in O(lg(n)) time

```ruby
def binary_search(array, value, from=0, to=nil)
    if to == nil
        to = array.count - 1
    end
 
    mid = (from + to) / 2
 
    if value < array[mid]
        return binary_search array, value, from, mid - 1
    elsif value > array[mid]
        return binary_search array, value, mid + 1, to
    else
        return mid
    end
end
 
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].shuffle
# Quicksort operates inplace (i.e. in "a" itself)
# There's no need to reassign
quicksort a
puts "quicksort"
puts a
 
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].shuffle
# Mergesort operates in new array
# So we need to reassign
b = mergesort b
puts "mergesort"
puts b
 
offset_3 = binary_search a, 3
puts "3 is at offset #{offset_3} in a"
 
offset_15 = binary_search b, 15
puts "15 is at offset #{offset_15} in b"
```



# Write a program to print a 2D array (n x m) in spiral order (clockwise)

```ruby
# Input sample:
#
# 3;3;1 2 3 4 5 6 7 8 9
#
# Output sample:
#
# Print out the matrix in clockwise fashion, one per line, space delimited. eg.
#
# 1 2 3 6 9 8 7 4 5

def spiral_print matrix, rows, cols
  sx, sy = 0, 0
  ex, ey = cols-1, rows-1
  values = []

  until sx > ex or sy > ey do
    for c in sx..ex     do values << matrix[sy][c]    end
    for r in sy+1..ey   do values << matrix[r][ex]    end
    for c in 1..ex-sx   do values << matrix[ey][ex-c] end if sy != ey
    for r in 1..ey-sy-1 do values << matrix[ey-r][sx] end if sx != ex

    sx += 1
    sy += 1
    ex -= 1
    ey -= 1
  end

  values
end

File.open(ARGV[0]).each do |line|
  data = line.split ';'
  rows = data[0].to_i
  cols = data[1].to_i
  values = data[2].split ' '
  matrix = (0..rows-1).map do |i|
    values[i*cols, cols]
  end

  puts spiral_print(matrix, rows, cols).join(' ')
end

```


#Linked List

```ruby
class List
    attr_accessor :head, :tail

    def initialize(*args)
        @head = args.pop
        @tail = nil

        process(args)
    end

    def insert_first(val)
        new_node = List.new(@head)
        new_node.tail = @tail

        @head = val
        @tail = new_node
    end 

    def insert_after(node, new_data, cur_nodes=self)
        if(cur_nodes.head == node)
            new_node = List.new(new_data)
            new_node.tail = cur_nodes.tail
            cur_nodes.tail = new_node
        else
            insert_after(node, new_data, cur_nodes.tail)
        end
    end

    # Find the count
    def count
        if @tail == nil
            count = 1
        else
            count = 1 + @tail.count
        end
    end

    Get the last item     
    def last
        if @tail == nil
            @head
        else 
            @tail.last
        end
    end

    # Reverse
    def reverse(new_list=List.new(@head), cur_list=@tail)
        if cur_list == nil
            new_list
        else    
            new_list.insert_first(cur_list.head)
            reverse(new_list,cur_list.tail)
        end
    end
private
    def process(args)
        if !args.empty?
            x = args.pop()
            insert_first(x)
            process(args)
        end
    end
end
```

#Binary Tree with Breadth First Search

```ruby
class BinTree
 
	attr_accessor :left, :right, :val
	
	def initialize(val)
		@left = nil
		@right = nil
		@val = val
	end
 
	def insert_node(new_val)
		if new_val < @val
			if(@left == nil)
				@left = BinTree.new(new_val)
			else
				@left.insert_node(new_val)
			end
		elsif(new_val > @val)
			if(@right == nil)
				@right = BinTree.new(new_val)
			else
				@right.insert_node(new_val)
			end
		end
	end
 
 
	# Searching the Tree for search_val but not the ideal search
	def search_bfs(search_val)
		# Start our queue and Visited list
		queue = Queue.new
		visited = []
		
		# adds root tree to queue
		# adds to visited list
		queue.enq(self)
		visited.push(self)
 
		while !queue.empty?
			current_node = queue.deq
 
			# Check if current_node val == search_val
			if current_node.val == search_val
				return current_node
			end
 
			if current_node.left && !visited.include?(current_node.left) 
				queue.enq(current_node.left)
				visited.push(current_node.left)
			end 
 
			if current_node.right && !visited.include?(current_node.right)
				queue.enq(current_node.right)
				visited.push(current_node.right)
			end
		end
		"none!"
	end
 
       
      #Better
	def search(val)
		if @val == val
			return self
		elsif @val > val && @left
			return @left.search(val)
		elsif @val < val && @right
			return @right.search(val)
		end
 
		return "Not Found!"
	end
 
end
 
 
 
class Tree
	attr_accessor :children, :val
 
	def initialize(val)
		@val = val
		@children = []
	end
 
	def insert(val)
	  @children.push(Tree.new(val))
	end
 
	# Searching the Tree for search_val
	def search_bfs(search_val)
		# Start our queue and Visited list
		queue = Queue.new
		visited = []
		
		# adds root tree to queue
		# adds to visited list
		queue.enq(self)
		visited.push(self)
 
		while !queue.empty?
			current_node = queue.deq
 
			# Check if current_node val == search_val
			if current_node.val == search_val
				return current_node
			end
 
			current_node.children.each do |child|
				if !visited.include?(child) 
					queue.enq(child)
					visited.push(child)
				end 
			end
		end
		"none!"
	end
end

```

#What Happens When You Type In A URL
```

browser checks cache; if requested object is in cache and is fresh, skip to #9
browser asks OS for server's IP address
OS makes a DNS lookup and replies the IP address to the browser
browser opens a TCP connection to server (this step is much more complex with HTTPS)
browser sends the HTTP request through TCP connection
browser receives HTTP response and may close the TCP connection, or reuse it for another request
browser checks if the response is a redirect (3xx result status codes), authorization request (401), error (4xx and 5xx), etc.; these are handled differently from normal responses (2xx)
if cacheable, response is stored in cache
browser decodes response (e.g. if it's gzipped)
browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)
browser renders response, or offers a download dialog for unrecognized types
```

#AutoComplete Tree

```ruby
class WordTreeNode
  attr_accessor :value, :children, :complete
 
  def initialize(value = '', complete = false)
    @value    = value
    @children = []
    @complete = complete
  end
 
  def learn(word)
    # Chop the string such that it's one character
    # longer than the value of the current node
    stem = word[0 .. value.length]
 
    # We are on the last step if the stem is equal to the word
    complete = stem == word
 
    # Look for a child with value == stem
    node = @children.find { |child| child.value == stem }
 
    # Create it if it didn't exist
    unless node
      node = WordTreeNode.new(stem, complete)
      @children.push node
    end
 
    # The node may already exist but not marked as complete...
    node.complete ||= true if complete
 
    # Recurse unless this was a complete word
    # NOTE: using the stem here is a bad idea
    node.learn(word) unless complete
  end
 
  # Returns all complete words in this subtree
  def words
    # Count ourselves if we are a complete word
    words = self.complete ? [self] : []
 
    @children.reduce(words) do |words, subtree|
      words += subtree.words
      words
    end
  end
 
  def completions_for(str)
    # Stem our input string as above
    stem = str[0 .. value.length]
 
    completions = []
    if stem == str && stem.length == value.length
      # we want to return ALL complete words below
      # the current node because our tree node values
      # are now longer than our input string
      completions += words
    else
      # Still walking down the tree
 
      # Count the current node if it's a complete word
      completions << self if self.complete
 
      # Find the subtree that matches the stem
      subtree = @children.find { |child| child.value == stem }
 
      # If it exists, we want the completions underneath it
      completions += subtree.completions_for(str) unless subtree.nil?
    end
 
    # Return the array of complete nodes
    completions
  end
end
 
tree = WordTreeNode.new
tree.learn 'apple'
tree.learn 'ape'
tree.learn 'app'
tree.learn 'appear'
tree.learn 'approve'
tree.learn 'appease'
tree.learn 'boo'
tree.learn 'book'
tree.learn 'books'
tree.learn 'bored'
 
p tree.completions_for('a').map &:value # => ["app", "apple", "appear", "appease", "approve", "ape"]
p tree.completions_for('ap').map &:value # => ["app", "apple", "appear", "appease", "approve", "ape"]
p tree.completions_for('appe').map &:value # => ["app", "appear", "appease"]
p tree.completions_for('appr').map &:value # => ["app", "approve"]
p tree.completions_for('b').map &:value # => ["boo", "book", "books", "bored"]
p tree.completions_for('bo').map &:value # => ["boo", "book", "books", "bored"]
p tree.completions_for('bor').map &:value # => ["bored"]
```