var longestConsecutive = function (nums) {
    //cpu - O(5N) mem - O(3N)
  let res = {};
  const newArr = Array.from(new Set(nums)).sort((a, b) => a - b);

  let prevEl = 0;
  let key;
  let result = 0;

  newArr.forEach((el, i) => {
    if (i === 0) {
      key = i;
      res[key] = [el];
      prevEl = el;
    } else {
      if (prevEl + 1 === el) {
        res[key].push(el);
        prevEl = el;
      } else {
        prevEl = el;
        key = i;
        res[key] = [el];
      }
    }
  });

  Object.values(res).forEach((el) => {
    console.log(el);
    result = Math.max(result, el.length);
  });

  return result;
};

const arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const arr1 = [100, 4, 200, 1, 3, 2];
const arr2 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
