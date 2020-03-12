# ARR = [-4, -1, 0, 3, 10 ]
# ANS = [0, 1, 9, 16, 100]

def sorted_array_square(arr)
  negatives = []
  positives = []
  arr.each do |num|
    if num < 0
      negatives << num ** 2
    else
      positives << num ** 2
    end
  end

  result = [] 
  i = 0
  until negatives.empty? || i == positives.length
    if negatives.last < positives[i]
      result << negatives.pop
    else
      result << positives[i]
      i += 1
    end
  end

  result + negatives.reverse + positives[i..-1]
end

p sorted_array_square([-30, -20, -11, -4, -1, 0, 3, 10, 40])