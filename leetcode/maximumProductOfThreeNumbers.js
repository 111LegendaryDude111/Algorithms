const maximumProduct = function (array) {
  const maxNumbers = Array(3);
  const minNumbers = Array(3);
  let maxNumbersIteration = 0;
  let minNumbersIteration = 0;

  array.forEach((element) => {
    if (maxNumbersIteration === 3) {
      maxNumbersIteration = 0;
    }

    if (minNumbersIteration === 3) {
      minNumbersIteration = 0;
    }

    if (element >= 0) {
      if (element > maxNumbers[maxNumbersIteration]) {
        maxNumbers[maxNumbersIteration] = element;
        maxNumbersIteration++;
        return;
      }

      if (maxNumbers[maxNumbersIteration] === undefined) {
        maxNumbers[maxNumbersIteration] = element;
        maxNumbersIteration++;
        return;
      }
    } else {
      if (element < minNumbers[minNumbersIteration]) {
        minNumbers[minNumbersIteration] = element;
        minNumbersIteration++;
        return;
      }

      if (minNumbers[minNumbersIteration] === undefined) {
        minNumbers[minNumbersIteration] = element;
        minNumbersIteration++;
        return;
      }
    }
  });

  let maxNumFromMaxNumbers = Number.MIN_SAFE_INTEGER;
  let sumOfMax = maxNumbers.reduce((acc, cur) => {
    if (cur) {
      maxNumFromMaxNumbers = Math.max(cur, maxNumFromMaxNumbers);
      acc *= cur;
    }
    return acc;
  }, 1);

  let maxNumFromMinNumbers = Number.MAX_SAFE_INTEGER;
  let sumOfMin = minNumbers.reduce((acc, cur) => {
    if (cur) {
      maxNumFromMinNumbers = Math.min(cur, maxNumFromMinNumbers);
      acc *= cur;
    }
    return acc;
  }, 1);

  console.log(sumOfMax, maxNumFromMaxNumbers, sumOfMin,  maxNumFromMinNumbers);
  


  // console.log(maxNumbers, minNumbers);
  return Math.max(sumOfMin,sumOfMax,)
};

let nums0 = [-1000, -1000, 1000];
let nums1 = [1, 2, 3];
let nums2 = [1, 2, 3, 4];
let nums3 = [-1, -2, -3];
let nums4 = [-100, -98, -1, 2, 3, 4];

console.log(maximumProduct(nums0));
// console.log(maximumProduct(nums1));
// console.log(maximumProduct(nums2));
// console.log(maximumProduct(nums3));
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
