require "rspec"
require "game"

describe 'Game' do
  subject(:game) { Game.new }
  let(:game2) { double("game2") }
  describe '#initialize' do
    # it "take in an argument n and default to 3" do
    #   expect { Game.new }.not_to raise_error # check default for three
    # end    

    it "initialize an instance variable @stacks to be an 2D array of three stacks(sub arrays)" do
      expect(game.stacks).to eq([[], [], []])
    end

    # it "calls #populate" do  
    #   expect(game2).to receive(:populate)
    #   Game.new(4)
    # end
  end

  describe "#populate" do
    it "populate the first stack with n disks(array of integers)" do
      expect(game.populate(4)).to eq([[4,3,2,1], [], []])
    end
  end

  describe "#play_game" do
    it "takes a number from the user" do
      # expect(game.play_game).to receive(:gets)
      allow($stdin).to receive(:gets)
    end

    it "calls #populate" do
      expect(game).to receive(:populate)
      game.play_game
    end
  end

  describe "#move" do
    subject(:game) { Game.new }
    before(:each) { game.play_game }   
    context "valid move" do
      it "should return true if move is valid" do 
        expect(game.move(0, 1)).to be true  
      end 
      
      it "should exchange stacks as specified" do
        game.move(0, 1)
        expect(game.stacks).to eq([[4,3,2],[1],[]])
      end
    end

  end    

  
end