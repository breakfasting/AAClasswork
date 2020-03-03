require_relative "00_tree_node"

class KnightPathFinder

  attr_reader :considered_positions, :root 

  def self.is_inbound?(pos)
    pos.all? do |i|
      i < 8 && i >= 0
    end
  end

  def self.valid_moves(position)
    row, col = position
    move_hash = {
      down_right: [row + 2, col + 1],
      down_left: [row + 2, col - 1],
      left_up: [row - 1, col - 2],
      left_down: [row + 1, col - 2],
      up_right: [row - 2, col + 1],
      up_left: [row - 2, col - 1],
      right_up: [row - 1, col + 2],
      right_down: [row + 1, col + 2]
    }

    move_hash.select { |_k, v| self.is_inbound?(v) }
  end

  def initialize(position)
    @starting_pos = position 
    @considered_positions = [position]
    @root = self.build_move_tree(position)
  end

  def new_move_positions(position)
    valid_move_arr = KnightPathFinder.valid_moves(position).values
    valid_move_arr.reject! { |pos| considered_positions.include?(pos) }
    considered_positions.concat(valid_move_arr)
    valid_move_arr
  end

  def build_move_tree(position)
    root = PolyTreeNode.new(position)
    #root = @root
    queue = Queue.new 
    queue.enq(root)
    until queue.empty?
      parent = queue.deq 
      children_array = new_move_positions(parent.value)
        
      children_array.each do |child_pos| 
        child = PolyTreeNode.new(child_pos)
        child.parent = parent 
        queue.enq(child) 
      end
    end
      
    root 
  end 

  # def find_path(end_pos) # dfs
  #   return nil if self.nil?
  #   return self if self.value == end_pos

  #   @root.children.each do |child|
  #     search_res = child.find_path(end_pos)
  #     return search_res unless search_res.nil?
  #   end

  #end

  def find_path(end_pos) 
    queue = Queue.new 

    queue.enq(self.root)

    until queue.empty? 
      ele = queue.deq 
      return trace_path_back(ele) if ele.value == end_pos

      ele.children.each do |child| 
        #return child if child.value == end_pos
       
        queue.enq(child)
      end
    end

    nil 
  end 

  def trace_path_back(node)
    path_back = []

    # node = self
    while true
      path_back.unshift(node)
      break if node.parent.nil?
      node = node.parent
    end
    path_back
  end
    
end