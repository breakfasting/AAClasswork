require "byebug"

class PolyTreeNode
  attr_reader :parent, :children, :value
    
  def initialize(value)
    @parent = nil 
    @children = []
    @value = value 
  end

  def parent=(node)
    if !self.parent.nil? 
      self.parent.children.delete(self)
    end
    @parent = node
    unless node == nil
      parent.children << self unless parent.children.include?(self)
    end 
  end

  def inspect 
    value.inspect
  end

  def add_child(child_node)
    unless self.children.include?(child_node)
      child_node.parent = self
    end
  end

  def remove_child(child_node)
    if self.children.include?(child_node)
      child_node.parent = nil
      self.children.delete(child_node)
    else
      raise "No Such Children!"
    end
  end

  def dfs(value)
    return self if self.value == value

    # debugger
    self.children.each do |child|
      result = child.dfs(value)
      # return result if result.value == value
      return result if !result.nil?
    end

    nil
  end

  def bfs(value)
    #queue = [] 
    queue = Queue.new 
    queue.enq(self)

    until queue.empty?
      ele = queue.deq
      return ele if ele.value == value

      ele.children.each { |child| queue.enq(child) }  
    end
  
    nil 
  end
end