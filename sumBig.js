/*1) 
// Мы хотим складывать очень большие числа, которые превышают емкость базовых типов, поэтому мы храним их в виде массива неотрицательных чисел.
// Нужно написать функцию, которая примет на вход два таких массива, вычислит сумму чисел, представленных массивами, и вернет результат в виде такого же массива.
sumBig([9, 9, 9, 9], [1, 2, 3]) // [1, 0, 1, 2, 2]

2)sumBig([1, 2, 3], [1, 2, 3]) // [2, 4, 6]

3) sumBig([6, 5],[1, 8, 1]) //[2, 4, 6]

*/

function sumBig(arr1, arr2) {
  //cpu - O(N + M) mem - O(N + M)
  const maxLength = Math.max(arr1.length, arr2.length);
  let remainder = 0;
  let result = [];

  let indexFirstArr = arr1.length - 1;
  let indexSecondArr = arr2.length - 1;

  for (let index = 0; index < maxLength; index++) {
    const element1 = arr1[indexFirstArr] ?? 0;
    const element2 = arr2[indexSecondArr] ?? 0;
    indexFirstArr--;
    indexSecondArr--;

    let temp = element1 + element2 + remainder;

    if (temp >= 10) {
      result.push(temp % 10);
      remainder = Math.floor(temp / 10);
    } else {
      result.push(temp);
      remainder = 0;
    }
  }

  if (remainder) {
    result.push(remainder);
  }

  return result.reverse();
}
console.log(sumBig([9, 9, 9, 9], [1, 2, 3])); // [1, 0, 1, 2, 2]
console.log(sumBig([1, 2, 3], [1, 2, 3])); // [2, 4, 6]
console.log(sumBig([6, 5], [1, 8, 1])); //[2, 4, 6]
console.log(sumBig([5, 4, 4], [4, 5, 6])); //[1, 0, 0 , 0]
console.log(sumBig([1, 2, 3], [4, 5, 6])); //[5 7 9]
