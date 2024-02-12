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
  //cpu - O(m2) mem - O(n)
  if (!isObject(object)) {
    return object;
  }
  const newObj = {};

  for (const key in object) {
    const cur = object[key];
    if (path.includes(key)) {
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
