class IntSet

  def initialize
    @store = Array.new(20) {[]}
  end

  def insert(input)
    bucket = input 0
    # @store[bucket] << input
    @store[bucket] << input if !self[input]
  end

  def [](input)
    bucket = input % 20
    return @store[bucket].include?(input)
  end

  def delete(input)
    if self[input]
      bucket = input % 20
      @store[bucket].delete(input)
    end
  end
end