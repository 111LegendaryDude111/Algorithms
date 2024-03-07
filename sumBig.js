/*1) 
// Мы хотим складывать очень большие числа, которые превышают емкость базовых типов, поэтому мы храним их в виде массива неотрицательных чисел.
// Нужно написать функцию, которая примет на вход два таких массива, вычислит сумму чисел, представленных массивами, и вернет результат в виде такого же массива.
sumBig([9, 9, 9, 9], [1, 2, 3]) // [1, 0, 1, 2, 2]

2)sumBig([1, 2, 3], [1, 2, 3]) // [2, 4, 6]

3) sumBig([6, 5],[1, 8, 1]) //[2, 4, 6]

*/

function sumBig(arr1, arr2) {
  //cpu - O(N) mem - O(M)
  const maxLength = Math.max(arr1.length, arr2.length);
  let remainder = 0;
  let result = Array(maxLength + 1);

  let indexFirstArr = arr1.length - 1;
  let indexSecondArr = arr2.length - 1;
  let pageIndex = maxLength;

  for (let index = 0; index < maxLength; index++) {
    const element1 = arr1[indexFirstArr] ?? 0;
    const element2 = arr2[indexSecondArr] ?? 0;
    indexFirstArr--;
    indexSecondArr--;

    let temp = element1 + element2 + remainder;

    result[pageIndex] = temp % 10;
    remainder = Math.floor(temp / 10);

    pageIndex--;
  }

  result[0] = remainder;

  return result;
}
console.log(sumBig([9, 9, 9, 9], [1, 2, 3])); // [1, 0, 1, 2, 2]
console.log(sumBig([1, 2, 3], [1, 2, 3])); // [2, 4, 6]
console.log(sumBig([6, 5], [1, 8, 1])); //[2, 4, 6]
console.log(sumBig([5, 4, 4], [4, 5, 6])); //[1, 0, 0 , 0]
console.log(sumBig([1, 2, 3], [4, 5, 6])); //[5 7 9]
