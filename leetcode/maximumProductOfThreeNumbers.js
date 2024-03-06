const maximumProduct = function (array) {
  let result = -Infinity;
  array.sort((a, b) => a - b);

  console.log(array);
  array.forEach((_, i) => {
    let left = array[i];
    let pivot = array[i + 1];
    let right = array[i + 2];

    if (left !== undefined && pivot !== undefined && right !== undefined) {
      let temp = left * pivot * right;
      result = Math.max(temp, result);
    }
  });

  return result;
};

let nums1 = [1, 2, 3];
let nums2 = [1, 2, 3, 4];
let nums3 = [-1, -2, -3];
let nums4 = [-100, -98, -1, 2, 3, 4];

console.log(maximumProduct(nums1));
console.log(maximumProduct(nums2));
console.log(maximumProduct(nums3));
console.log(maximumProduct(nums4));

/*
    function maximumProduct(nums: number[]): number {
    const s = nums.sort((a, b) => a - b);
    return Math.max(
        s[0] * s[1] * s[s.length - 1],
        s[s.length - 1] * s[s.length - 2] * s[s.length - 3]
    );
};
*/
