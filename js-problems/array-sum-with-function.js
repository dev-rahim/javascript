/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

/* var twoSum = function (nums, target) {
  for (const number of nums) {
    const index = nums.indexOf(number);
    if (nums[index] + nums[index + 1]  == target) {
      console.log([index, index + 1]);
    }
  }
}; */

var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      
      if (nums[element]) {
        
      }
    
  }
};

// const numbers = [2, 7, 11, 15];
// const target = 9;
// const numbers = [3, 2, 4];
// const target = 6;
const numbers = [3,2, 3];
const target = 6;
twoSum(numbers, target);
// const result = twoSum(numbers, target);
// console.log(result);
