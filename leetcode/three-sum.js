function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let l = 0,
    r = nums.length - 1,
    mid = 1;

  const result = [];

  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const leftEl = nums[l];
    const midEl = nums[mid];
    const rightEl = nums[r];

    const sum = leftEl + midEl + rightEl;

    if (sum === 0) {
      const key = [leftEl, midEl, rightEl].sort().toString();

      if (!map.has(key)) {
        result.push([leftEl, midEl, rightEl]);
      }

      map.set(key, true);

      mid++;
    } else if (sum < 0) {
      l++;
      mid++;
    } else {
      r--;
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 1, 1])); //[]
// console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([1, 2, -2, -1])); // []
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]

/*

    solution 



    var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};

*/
