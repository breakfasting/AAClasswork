class MaxIntSet
  attr_reader :max

  def initialize(n)
    @max = n
    @store = Array.new(n)
  end

  def insert(arg)
    if arg > self.max - 1
      raise 'Error!'
    else
      @store[arg] = true
    end
  end

  def remove(arg)
    if arg > max - 1
      raise 'Error!'
    else
      @store[arg] = false
    end
  end

  def include?(arg)
    if arg > max - 1
      raise 'Error!'
    else
      @store[arg] == true
    end
  end
end

