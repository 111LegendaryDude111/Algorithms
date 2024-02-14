import { isObject } from "./utils.js";

const obj = {
  a: 5,
  b: 6,
  c: 7,
  d: {
    a: 228,
    b: "asdf",
    d: {
      a: 4,
      f: "asdf",
    },
  },
};

function omitDeep(object, path) {
  //cpu - O(N + M ) mem - O(N + M)
  if (!isObject(object)) {
    return object;
  }
  const newObj = {};

  const pathSet = new Set(path);

  for (const key in object) {
    const cur = object[key];
    if (pathSet.has(key)) {
      continue;
    } else {
      if (isObject(cur)) {
        newObj[key] = omitDeep(cur, path);
      } else {
        newObj[key] = cur;
      }
    }
  }

  return newObj;
}

const o = omitDeep(obj, ["a", "b"]);

console.log(o); // { c: 7, d: { d: { f: "asdf" } } }
