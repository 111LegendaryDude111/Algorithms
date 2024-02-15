var topKFrequent = function (nums, k) {
//cpu - O(4N) mem - O(2N)
  const map = {};
  nums.forEach((el) => {
    if (map.hasOwnProperty(el)) {
      map[+el] = map[el] + 1;
    } else {
      map[+el] = 0;
    }
  });
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((el) => +el[0]);
};
