/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const list = []
  for (let i=0; i<nums.length - 1; i++) {
    if (list.length) break
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        list.push(i,j)
        break;
      }
    }
  }
  return list
};
