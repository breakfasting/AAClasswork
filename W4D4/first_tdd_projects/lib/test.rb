
class Array
  def my_uniq
    hash = Hash.new(0)
    self.each { |ele| hash[ele] += 1 }
    hash.keys
  end

  def two_sum
    result = []
    (0...self.length).each do |idx1|
      (idx1 + 1...self.length).each do |idx2|
        result << [idx1, idx2] if self[idx1] + self[idx2] == 0 
      end    
    end 
    result
  end
end

def my_transpose(array)
  width = array[0].length
  height = array.length
  new_matrix = Array.new(width) { Array.new(height) }
  array.each_with_index do |row, row_idx|
    row.each_with_index do |ele, idx|
      new_matrix[idx][row_idx] = ele
    end
  end
  new_matrix
end    

def stock_picker(array)
  max_difference = 0 
  pair_of_days = []
  (0...array.length).each do |idx1|
    (idx1 + 1...array.length).each do |idx2|
      difference = array[idx2] - array[idx1]
      if difference > max_difference 
        pair_of_days = [idx1, idx2] 
        max_difference = difference
      end 
    end    
  end 
  pair_of_days
end   