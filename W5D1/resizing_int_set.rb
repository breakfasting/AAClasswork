class ResizingIntSet
  def initialize(n)
    @store = Array.new(n) { [] }
    @count = 0
  end

  def increase_size
    new_store = Array.new(2*@store.length) { [] }
    @store.each do |bucket|
      bucket.each do |el|
        new_bucket = el % new_store.length
        new_store[new_bucket] << el
      end
    end
    @store = new_store
  end

  def is_full?
    @count == @store.length
  end

  def include?(arg)
    bucket = arg % @store.length
    @store[bucket].include?(arg)
  end

  def insert(arg)
    if !self.include?(arg)
      bucket = arg % @store.length
      @store[bucket] << arg
      @count += 1
      self.increase_size if self.is_full?
    end
  end

  def remove(arg)
    if self.include?(arg)
      bucket = arg % @store.length
      @store[bucket].delete(arg)
      @count -= 1
    end
  end

  # def inspect

  # end

end