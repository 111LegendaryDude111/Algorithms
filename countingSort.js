/*
    Сгруппировать числа, переставляя  местами которые будут одинаковые,  ноль не учитывать :
    [1230,111,2301,10101, 99, 90000009, 3102] -> [ [1230,2301,3102], [99,90000009], [111,10101] ]
    [11,22]  -> [ [11] ,[22] ]
*/

const ar1 = [1230, 111, 2301, 10101, 99, 90000009, 3102, 9090];
const ar2 = [11, 22];

console.log(groupNumbers(ar1));
console.log(groupNumbers(ar2));

function clearOfZeroes(num) {
  num = num.toString();
  let result = [];
  for (let index = 0; index < num.length; index++) {
    const element = num[index] % 10;
    if (element === 0) {
      continue;
    } else {
      result += element;
    }
  }

  return result;
}

function groupNumbers(array) { 
    //cpu - O(N + 4M) mem - O(N + (N + M) )
  const map = new Map();

  array.forEach((num) => {
    const numWithoutZeroes = parseInt(clearOfZeroes(num));

    const currentNum = countingSort(numWithoutZeroes).join("");

    if (map.has(currentNum)) {
      map.get(currentNum).push(num);
    } else {
      map.set(currentNum, [num]);
    }
  });

  return Array.from(map.values());
}

function countingSort(num) {
  const arrayOfIndexes = Array(9);
  num = num.toString();
  const result = [];

  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    arrayOfIndexes[element] = (arrayOfIndexes[element] ?? 0) + 1;
  }

  for (let index = 0; index < arrayOfIndexes.length; index++) {
    const element = arrayOfIndexes[index];

    for (let j = element; j > 0; j--) result.push(index);
  }

  return result;
}

function countingSort1(array) {
  //cpu - O( (4N + logN) + (N + M) ) mem - O(2N)
  const map = new Map();

  array.forEach((element) => {
    const cur = element
      .toString()
      .split("")
      .sort()
      .filter((el) => Boolean(+el))
      .join("");
    if (map.has(cur)) {
      map.get(cur).push(element);
    } else {
      map.set(cur, [element]);
    }
  });

  return Array.from(map.values());
}
