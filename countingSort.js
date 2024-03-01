/*
    Сгруппировать числа, переставляя  местами которые будут одинаковые,  ноль не учитывать :
    [1230,111,2301,10101, 99, 90000009, 3102] -> [ [1230,2301,3102], [99,90000009], [111,10101] ]
    [11,22]  -> [ [11] ,[22] ]
*/

function countingSort2(array) {
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

  const result = []
  map.forEach((el) => {
    console.log(el);
    
  });
}

function countingSort(array) {
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

const ar1 = [1230, 111, 2301, 10101, 99, 90000009, 3102, 9090];
const ar2 = [11, 22];

console.log(countingSort2(ar1));
console.log(countingSort2(ar2));

function getSum(num) {
  num = num.toString();
  let res = 0;
  for (let index = 0; index < num.length; index++) {
    res += +num[index];
  }
  return res;
}

function getNumberWithoutZero(number) {
  number = number.toString();
  let temp = "";
  for (let index = 0; index < number.length; index++) {
    const element = number[index];

    if (element === "0") {
    } else {
      temp += element;
    }
  }

  return temp;
}
