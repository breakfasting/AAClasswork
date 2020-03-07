require "byebug"

def bad_my_min(arr)
  new_arr = arr.select do |first|
    arr.all? do |second|
      first <= second      
    end
  end
  new_arr.first
end

def good_my_min(arr)
  min = 1 / 0.0
  arr.each do |ele|
    min = ele if min > ele
  end
  min

  # arr.inject{|acc,ele| (ele < acc) ? ele : acc}
end

# list = [0, 3, 5, 4, -5, 10, 1, 90, -5]
# p "hello"
# p good_my_min(list) # =>  -5

# Largest Contiguous Sub-sum
# n^2 subsets

def bad_largest_contiguous_subsum(arr)
  result = []
  (0...arr.length).each do |i|
    (i...arr.length).each do |j|
      result << arr[i..j]
    end
  end

  result.map(&:sum).max 
end

def good_largest_contiguous_subsum(arr)
  max_sum = -1 / 0.0
  cur_sum = 0
  arr.push(-1 / 0.0) #this might not be great?
  arr.each do |ele|
    if cur_sum + ele <= 0 || cur_sum <= 0
      max_sum = cur_sum if cur_sum > max_sum && cur_sum != 0
      cur_sum = 0 
    end
    cur_sum += ele
  end
  # max_sum = cur_sum if cur_sum > max_sum
  max_sum
end

list = [2, 3, -6, 7, -6, 7]
p good_largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
list = [-5, -1, -3]
p good_largest_contiguous_subsum(list) # => -1 (from [-1])

# ANAGRAMS

def str_perm(string) # O(n*n!)
  return [string] if string.length < 2

  results = []
  prev_case = str_perm(string[0...-1]) # (n - 1)!
  prev_case.each do |str|
    (0..str.length).each do |i|
      results << str[0...i] + string[-1] + str[i..-1] # it is like take, drop => O(n)
    end
  end

  results
end

# p str_perm('dog')

def first_anagram?(str1, str2)
  str_perm(str1).include?(str2)
end

def second_anagram?(str1, str2) # O(n*m)
  arr1, arr2 = str1.chars, str2.chars
  arr1.each do |char|
    idx = arr2.index(char)
    if idx
      arr2.delete_at(idx) # O(m)
    else
      return false
    end
  end
  arr2.empty?
end

def third_anagram?(str1, str2) # S(n+m)
  arr1, arr2 = str1.chars.sort, str2.chars.sort # Ruby sort time O(n*log(n))
  arr1 == arr2 # O(n)
end

def fourth_anagram?(str1, str2) # O(n), S(1) # Finite amount of keys (alphabet)
  hash = Hash.new(0)

  str1.each_char { |char| hash[char] += 1 }
  str2.each_char { |char| hash[char] -= 1 }
  hash.all? { |_, v| v == 0 }
end

def bad_two_sum?(arr, tar)
  (0...arr.length - 1).each do |idx|
    (idx + 1...arr.length).each do |jdx|
      return true if arr[idx] + arr[jdx] == tar
    end
  end
  false
end

def bsearch(arr, tar, exclude = nil, start = 0, finish = arr.length-1)
  return false if start == finish

  mid = (start + finish) / 2
  comp = tar <=> arr[mid]
  # debugger
  case comp
  when 0
    return true unless mid == exclude
  when -1
    return bsearch(arr, tar, exclude, start, mid)
  when 1 
    return bsearch(arr, tar, exclude, mid + 1, finish)
  end
  return false
end

def okay_two_sum?(arr,tar)
  arr.sort.each_with_index do |ele,idx|
    return true if bsearch(arr,tar-ele,idx)
  end
  return false
end

def two_sum?(arr, tar)
  hash = Hash.new(false)

  arr.each do |ele|
    return true if hash[ele]
    
    hash[tar - ele] = true
  end
  false
end

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false
