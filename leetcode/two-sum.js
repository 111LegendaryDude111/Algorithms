var twoSum = function (nums, target) {
  //cpu - O(n) mem - O(n)
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const difference = target - element;

    if (map.has(difference)) {
      return [map.get(difference) + 1, index + 1];
    }

    map.set(element, index);
  }

  return;
};

console.log(twoSum([3, 4, 5, 6], 7));
console.log(twoSum([2, 7, 11, 15], 9));
