import { zip } from "./zip.js";

const zipped = zip(["a", "b"], [1, 2], [true, false]);
const zipped1 = zip(["a", "b", "c"], [1, 2, 3], [true, false]);

function unzip(array) {
  const result = [];
  let maxLength = 0;

  array.forEach((el) => {
    maxLength = Math.max(maxLength, el.length);
  });

  array.forEach((el) => {
    for (let index = 0; index < maxLength; index++) {
      const element = el[index];
      if (result[index]) {
        result[index].push(element);
      } else {
        result[index] = [element];
      }
    }
  });

  return result;
}

console.log(unzip(zipped));
console.log(unzip(zipped1));
