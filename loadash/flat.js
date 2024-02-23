const arr = [1, 2, 3, 4, [5, 6]];
const arr1 = [1, 2, [3, 4, [5, 6], 7]];
const arr2 = [1, 2, [3, 4, [5, 6], 7, [[[[8]]]]]];

Array.prototype.flat2 = function (depth = 2) {
  const stack = [];
  const res = [];
  stack.push(this);

  while (stack.length) {
    let el = stack.pop();

    if (Array.isArray(el)) {
      el.forEach((e) => (Array.isArray(e) ? stack.push(e) : res.push(e)));
    } else {
      res.push(el);
    }
  }

  return res.sort();
};

// console.log(arr.flat2()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
// console.log(arr1.flat2()); // [ 0, 1, 2, [ 3, [ 4, 5 ] ] ]
// console.log(arr2.flat2()); // [1, 2, 3, 4, 5, 6, 7, 8];


function flat3(array, depth) {
  const stack = [{ item: array, depth }];
  const result = [];

  while (stack.length) {
    const { item, depth } = stack.pop();

    if (Array.isArray(item) && depth >= 0) {
      item.forEach((data) => {
        stack.push({
          item: data,
          depth: depth - 1,
        });
      });
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}


console.log(flat3(arr))
console.log(flat3(arr1))
console.log(flat3(arr2,5))