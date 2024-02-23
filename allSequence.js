/* 
  Нужно написать функцию `allSequences`, которая возвращает фукнцию,
  вызовы которой последовательно переберут все возможные комбинации элементов матрицы.
  Когда комбинации закончатся, нужно возвращать `undefined`.
  
  const next = allSequences([
      ['a', 'b'],
      [1, 2],
      ['?', '!', '-']
  ])

  next() // a1?
  next() // a1!
  next() // a1-
  next() // a2?
  next() // a2!
  next() // a2-

*/

function allSequences(...arrays) {
  const indexes = Array.from(arrays).fill(0); // 0 0 0
  let done = false;
  let count = 0;
  let maxCount = arrays.reduce((acc, cur) => (acc = acc * cur.length), 1);

  return () => {
    if (maxCount === count) {
      return undefined;
    }
    count++;

    const result = arrays
      .map((arr, arrIndex) => arr[indexes[arrIndex]])
      .join("");

    for (let i = arrays.length - 1; i >= 0; i--) {
      indexes[i]++;
      if (indexes[i] === arrays[i].length) {
        indexes[i] = 0;
      } else {
        break;
      }
    }
    return result;
  };
}

const next = allSequences(["a", "b"], [1, 2], ["?", "!", "-"]);

let i = 0;
while (i < 13) {
  console.log(next());
  i++;
}
