// merge([1, 7, 9, 13, 15] , [4, 5, 8, 14]) => [1, 4, 5, 7, 8, 9, 13, 14, 15]

const arr1 = [1, 7, 9, 13, 15],
  arr2 = [4, 5, 7, 8, 14];

function merge(array1, array2) {
  const length = array1.length + array2.length;
  const result = [];
  let counter1 = 0;
  let counter2 = 0;

  while (result.length < length) {
    const element1 = array1[counter1];
    const element2 = array2[counter2];

    if (element1 > element2) {
      result.push(element2);
      counter2++;
    } else {
      result.push(element1);
      counter1++;
    }
  }
  return result;
}

console.log(merge(arr1, arr2));
