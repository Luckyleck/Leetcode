# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

def two_sum(nums, target)
    num_idx = {}
    nums.each_with_index do |num, i|
        diff = target - num
        if num_idx.key?(diff)
            return [num_idx[diff], i]
        end
        num_idx[num] = i
    end
end

# Basic Solution

def two_sum(nums, target)

    (0...nums.length).each do |i|
        ((i+1)...(nums.length)).each do |j|
            if nums[i] + nums[j] == target
                return [i,j]
            end
        end
    end
end



    