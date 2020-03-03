require_relative 'tic_tac_toe'
require 'byebug'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    # debugger
    @board = board 
    @next_mover_mark = next_mover_mark 
    @prev_move_pos = prev_move_pos
    # @children = self.children
    
  end




  def losing_node?(evaluator)
    # debugger
    if self.board.over?
      if evaluator != self.board.winner && !self.board.tied?
        return true 
      else
        return false
      end
    end

    if evaluator == self.next_mover_mark  # this should be the opponents turn 
      self.children.all? do |child| 
        child.losing_node?(evaluator)
      end 
    else 
      self.children.any? do |child| 
        child.losing_node?(evaluator)
      end 
    end 

  end

  def winning_node?(evaluator)
    if self.board.over?
      if evaluator == self.board.winner && !self.board.tied?
        return true 
      else
        return false
      end
    end

    if evaluator == self.next_mover_mark  # this should be the opponents turn 
      self.children.all? do |child| 
        child.winning_node?(evaluator)
      end 
    else 
      self.children.any? do |child| 
        child.winning_node?(evaluator)
      end 
    end 

  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    board_states = Array.new 
    
    (0..2).each do |i| 
      (0..2).each do |j|
        if self.board.empty?([i, j])
          new_board = board.dup
          new_board[[i, j]] = next_mover_mark

          next_mark = next_mover_mark == :x ? :o : :x
          # debugger
          child = TicTacToeNode.new(new_board, next_mark, [i, j])
          board_states << child
        end 
      end 
    end  
    board_states

  end 
end
