/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let len = nums.length;
  const MAP = new Map();
  // 存入hash表
  MAP.set(nums[0], 0);
  for (let i = 1; i < len; i++) {
    let other = target - nums[i];
    // 判断是否符合条件，返回对应的下标
    if (MAP.get(other) !== undefined) return [MAP.get(other), i];
    // 不符合的存入hash表
    MAP.set(nums[i], i)
  }
};
