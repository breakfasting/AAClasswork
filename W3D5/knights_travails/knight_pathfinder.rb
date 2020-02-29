require_relative "00_tree_node"

class KnightPathFinder

    attr_reader :considered_positions

    def self.is_inbound?(pos)
        pos.all? do |i|
            i < 8 && i >= 0
        end
    end

    def self.valid_moves(position)
        row, col = position
        move_hash = {
            up_right: [row - 2, col + 1],
            up_left: [row - 2, col - 1],
            right_up: [row - 1, col + 2],
            right_down: [row + 1, col + 2],
            down_right: [row + 2, col + 1],
            down_left: [row + 2, col - 1],
            left_up: [row - 1, col - 2],
            left_down: [row + 1, col - 2]
        }

        move_hash.select { |k, v| self.is_inbound?(v) }
    end

    def initialize(position)
        @starting_pos = position 
        @considered_positions = [position]
    end

    def new_move_positions(position)
        valid_move_arr = KnightPathFinder.valid_moves(position).values
        valid_move_arr.reject! { |pos| considered_positions.include?(pos) }
        considered_positions.concat(valid_move_arr)
        return valid_move_arr
    end

    def build_move_tree
        root = PolyTreeNode.new(@starting_pos)
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
        
        self.considered_positions.length
    end 

    
end