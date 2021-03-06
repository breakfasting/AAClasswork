# require_relative 'board'

class Piece

  attr_reader :color, :board
  attr_accessor :pos

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

  def inspect
    symbol.inspect
  end

  def moves
    '--'
  end
end