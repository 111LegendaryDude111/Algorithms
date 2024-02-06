const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function intersection(array, exludeValues) {
  //t = O(n^2) M = O(1)
  if (!Array.isArray(array)) {
    reutrn;
  }

  return array.filter((el) => exludeValues.includes(el));
}

console.log(intersection(arr, [2, 15, 7]));

function intersection1(array, exludeValues) {
  //t = O(n) M = O(n)
  if (!Array.isArray(array)) {
    reutrn;
  }

  const map = {};
  exludeValues.forEach((el) => {
    map[el] = true;
  });

  return array.filter((el) => (map[el] ? true : undefined));
}

console.log(intersection1(arr, [2, 15, 7]));
