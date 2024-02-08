import { stringFormPath } from "./get";

const obj = { a: { b: { c: 3 } } };
const object1 = { a: [{ b: [{ c: 3 }] }] };

function set(object, path, value) {
  //cpu - O(N + M) mem - O( N + M)
  const splitedPath = stringFormPath(path);
  let temp = object;

  splitedPath.forEach((key, i) => {
    if (i === splitedPath.length - 1) {
      temp[key] = value;
    } else {
      temp = temp[key];
    }
  });

  return object;
}

console.log(set(obj, "a.b.c", 4));
console.log(set(object1, "a[0].b[0].c", 4));
