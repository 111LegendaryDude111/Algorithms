import { isObject } from "./utils.js";
const obj = {
  a: 5,
  b: {
    a: 228,
    b: "asdf",
    c: {
      a: 4,
      f: "asdf",
    },
  },
  c: 0,
  d: 1234,
};

function pickDeep(object, path) {
  //cpu - O(m) mem - O(n)
  if (!isObject(object)) {
    return object;
  }
  const newObj = {};
  path.forEach((el) => {
    if (object[el]) {
      if (isObject(object[el])) {
        newObj[el] = pickDeep(object[el], path);
      } else {
        newObj[el] = object[el];
      }
    }
  });

  return newObj;
}

const p = pickDeep(obj, ["a", "b", "c"]); // { a: 5, b: { a: 228, b: "asdf", c: { a: 4 } }, c: 0 }

console.log(p);

console.log(p["b"] === obj["b"]);
