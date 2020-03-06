require 'rspec'
require 'test'

describe '#my_uniq' do
  it 'removes duplicates from an array' do
    expect([1, 2, 1, 3, 3].my_uniq).to eq([1, 2, 3])
  end

  it 'should return a new array' # test object_id
end

describe "#two_sum" do
  it 'Monkey patches the Array class' do
    expect{ [-1, 0, 2, -2, 1].two_sum }.not_to raise_error
  end

  it 'finds all pairs of positions where the elements at those positions sum to zero' do
    expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
  end
end

describe "#my_transpose" do
  let(:matrix) { [[0, 1, 2], [3, 4, 5],[6, 7, 8]] }       
  it "accepts an array as an argument" do
    expect { my_transpose(matrix) }.not_to raise_error 
    # expect { my_transpose("string") }.to raise_error(TypeError)
  end     

  it "tranpose the array (switches the rows and columns)" do
    expect( my_transpose(matrix) ).to eq( [[0,3,6], [1,4,7], [2,5,8]] )
  end
end

describe "#stock_picker" do
  it "takes an array of stock prices(Integers)" do
    expect{ stock_picker([2, 5, 10, 1, 3]) }.not_to raise_error 
  end

  it "should return best pair of days(indices) to buy and sell stocks" do
    expect(stock_picker([2, 5, 10, 1, 3])).to eq([0, 2])
  end
end