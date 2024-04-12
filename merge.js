// merge([1, 7, 9, 13, 15] , [4, 5, 8, 14]) => [1, 4, 5, 7, 8, 9, 13, 14, 15]

const arr1 = [1, 7, 9, 13, 15],
  arr2 = [4, 5, 8, 14];

function countingSort(arr) {
  let max = arr[arr.length - 1];

  arr.forEach((element) => {
    max = Math.max(max, element);
  });

  const result = Array(max);

  arr.forEach((el, i) => {
    if (!result[el]) {
      result[el] = 1;
    } else {
      result[el]++;
    }
  });

  console.log(resultResult);

  return result.reduce((acc, cur, i) => {
    if (!cur) {
      return acc;
    }

    for (let index = 0; index < cur; index++) {
      acc.push(i);
    }

    return acc;
  }, []);
}

function merge(array1, array2) {
  //K = N+M
  //CPU = O(4K) MEM = (2K)
  return countingSort(array1.concat(array2));
}
