/* 
    Hashmap
*/

// var twoSum = function (nums, target) {
//   //cpu - O(n) mem - O(n)
//   const map = new Map();
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     const difference = target - element;

//     if (map.has(difference)) {
//       return [map.get(difference) + 1, index + 1];
//     }

//     map.set(element, index);
//   }

//   return;
// };

/* 
    Two pointers
*/

var twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  for (let index = 0; index < nums.length; index++) {
    const leftEl = nums[l];
    const rightEl = nums[r];
    const sum = leftEl + rightEl;

    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
};

console.log(twoSum([1, 2, 3, 4], 3));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 5, 6], 7));
