require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    winning_choices = []
    board_state = TicTacToeNode.new(game.board, mark)
    board_state.children.each do |child|
      if child.winning_node?(mark)
        return child.prev_move_pos
      end
    end

  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
