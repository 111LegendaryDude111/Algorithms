const arr = ["a", "b", "c", "d"];

function chunk(array, size) {
  let count = 0;
  let tempArr = [];

  return array.reduce((acc, cur, i) => {
    if (size === count) {
      acc.push(tempArr);
      tempArr = [];
      count = 0;
    }

    if (i === array.length - 1) {
      acc.push([...tempArr, cur]);
      return acc;
    }

    tempArr.push(cur);
    count++;

    return acc;
  }, []);
}

console.log(chunk(arr, 3));
console.log(chunk(arr, 2));
