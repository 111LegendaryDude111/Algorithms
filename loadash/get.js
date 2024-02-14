import { isNil, isObject } from "./utils.js";
import { stringFromPath } from "./stringFromPath.js";

const obj = { a: { b: { c: "" } } };
const obj1 = { a: { b: { c: 3 } } };
const object1 = { a: [{ b: [{ c: 3 }] }] };
const object2 = { a: [{ b: { c: 3 } }] };

function get(object, path, defaultValue) {
  //cpu - O(N + M) mem - O(N + M)

  if (isNil(object)) {
    return;
  }

  if (!isObject(object)) {
    return object[path];
  }

  const currentPath = stringFromPath(path);
  let temp = object;

  for (let index = 0; index < currentPath.length; index++) {
    let key = currentPath[index];

    temp = temp[key];

    if (temp === null && temp === undefined) {
      return defaultValue;
    }
  }

  return temp ?? defaultValue;
}

console.log(get(obj, "a.b.c"));
console.log(get(object1, "a[0].b[0].c"));
console.log(get(object2, "a[0].b.c", "default"));
console.log(get(obj1, "a.b.sadfdsa"));
console.log(get(object2, "a[0].basdf.df", "default"));

console.log(get(obj, "a.b.c.toString")); // Function
console.log(get(obj, "a.b.c.adsf")); // undefined
console.log(get(obj, "a.b.c.adsf", 1234)); // 1234
console.log(get(null, "a.b.c.adsf")); // undefined
console.log(get(undefined, "a.b.c.adsf")); // undefined
console.log(get("foo", "slice")); // Function
