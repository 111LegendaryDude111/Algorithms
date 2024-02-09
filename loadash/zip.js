function zip(...arrays) {
  //cpu - O(2N + M)  mem - O(N)
  const map = new Map();

  arrays.forEach((el) => {
    for (let index = 0; index < el.length; index++) {
      const element = el[index];
      if (map.has(index)) {
        map.get(index).push(element);
      } else {
        map.set(index, [element]);
      }
    }
  });

  return Array.from(map);
}

console.log(zip(["a", "b"], [1, 2], [true, false])); // => [['a', 1, true], ['b', 2, false]]
