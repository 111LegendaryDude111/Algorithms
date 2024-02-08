const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function difference(array, exludeValues) {
  if (!Array.isArray(array)) {
    return;
  }

  return array.filter((el) => !exludeValues.includes(el));
}

console.log(difference(arr, [2, 3]));

function difference1(array, exludeValues) {
  if (!Array.isArray(array)) {
    return;
  }

  const map = {};

  array.forEach((el) => {
    map[el] = true;
  });

  exludeValues.forEach((el) => {
    if (map[el]) {
      delete map[el];
    }
  });

  return Object.keys(map).map((el) => +el);
}

console.log(difference1(arr, [2, 3]));
