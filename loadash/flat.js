const arr = [1, 2, 3, 4, [5, 6]];
const arr1 = [1, 2, [3, 4, [5, 6], 7]];

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

  return res;
};

console.log(arr.flat2()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr1.flat2()); // [ 0, 1, 2, [ 3, [ 4, 5 ] ] ]
