let obj = { a: 1, b: 2, c: 3 };
let obj1 = {
  Name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};

function invertObj(obj) {
  //t = O(n), M = O(1)
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return Object.fromEntries(
    keys.map((el, i) => {
      return [values[i], el];
    })
  );
}

console.log(invertObj(obj));
console.log(invertObj(obj1));

function invertObj1(obj) {
  //t = O(n), M = O(1)
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

console.log(invertObj1(obj));
console.log(invertObj1(obj1));

// https://www.geeksforgeeks.org/lodash-_-invert-method/?ref=lbp
