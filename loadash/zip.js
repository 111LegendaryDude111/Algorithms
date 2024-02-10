export function zip(...arrays) {
  //cpu - O(2N * M)  mem - O(N * M)
  let maxLength = 0;

  arrays.forEach((el) => {
    maxLength = Math.max(maxLength, el.length);
  });

  const arr = [];
  arrays.forEach((el) => {
    for (let index = 0; index < maxLength; index++) {
      const element = el[index];
      if (arr[index]) {
        arr[index].push(element);
      } else {
        arr[index] = [element];
      }
    }
  });

  return arr;
}

// console.log(zip(["a", "b"], [1, 2], [true, false])); // => [['a', 1, true], ['b', 2, false]]
// console.log(zip(["a", "b", "c"], [1, 2, 3], [true, false])); // => [['a', 1, true], ['b', 2, false]]
