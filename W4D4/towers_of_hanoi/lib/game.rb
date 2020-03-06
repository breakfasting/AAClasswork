class Game

  attr_reader :stacks  
  
  def initialize
    @stacks = Array.new(3) { Array.new(0) }
    # self.populate(n)     
  end    

  def populate(n)
    while n > 0
      stacks[0] << n
      n -= 1 
    end
    stacks
  end    

  def play_game 
    # n = gets.chomp.to_i
    n = 4
    self.populate(n)
  end 
  
  def move(start, end_spot)
    moving_disk = stacks[start].pop unless stacks[start].empty?
    if stacks[end_spot].empty? || stacks[end_spot][-1] > moving_disk
      stacks[end_spot].push(moving_disk)
      true
    else  
      false  
    end        
  end   
end    