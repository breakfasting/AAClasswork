# Phase 1
def bad_windowed_max_range(arr, window) #O(n^2)
  i = 0   
  current_max_range = 0
  while i + window <= arr.length #O(n-m)
    max_check = arr[i...i + window].max - arr[i...i + window].min #4*O(m) or 2*O(n)+2*O(m)
    current_max_range = max_check if max_check > current_max_range
    i += 1
  end
  current_max_range
end

class MyQueue

  def initialize
    @store = []
  end

  def enqueue(element)
    @store << element
  end

  def dequeue
    @store.unshift
  end

  def peek
    @store.first
  end

  def size
    @store.length
  end

  def empty?
    size == 0
  end
end

class MyStack 
  def initialize
    @store = []
  end

  def push(element)
    @store.push(element)
  end

  def pop
    @store.pop
  end

  def peek
    @store.last
  end

  def size
    @store.length
  end

  def empty?
    size == 0
  end


end

class StackQueue
  def initialize
    @instack = MyStack.new
    @outstack = MyStack.new
  end
  def enqueue(element)
    @instack.push(element)
  end

  def dequeue
    unless @outstack.empty? 
      return @outstack.pop
    else
      self.stackshift
      return @outstack.pop
    end

  end

  def stackshift
    until @instack.empty?
      @outstack.push(@instack.pop)
    end
  end
end

p bad_windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p bad_windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p bad_windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p bad_windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

