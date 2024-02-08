import { stringFormPath } from "./stringFormPath";

const obj = { a: { b: { c: 3 } } };
const object1 = { a: [{ b: [{ c: 3 }] }] };

function get(object, path, defaultValue) {
  const currentPath = path.split(".");

  return (
    currentPath.reduce((acc, cur) => {
      // const temp = cur.match(/\w/g);
      const temp = stringFormPath(cur);

      if (!acc) {
        const curentValue =
          cur.length > 1 ? object[temp[0]][temp[1]] : object[cur];
        return (acc = curentValue);
      } else {
        const curentValue = cur.length > 1 ? acc[temp[0]][temp[1]] : acc[cur];
        return (acc = curentValue);
      }
    }, false) ?? defaultValue
  );
}

console.log(get(obj, "a.b.c"));
console.log(get(object1, "a[0].b[0].c"));
console.log(get(object1, "a[0].b.c", "default"));

function get1(object, path, defaultValue) {
  //cpu - O(N + M) mem - O(N + M)
  if (typeof object !== "object") {
    return object[path];
  }

  const currentPath = stringFormPath(path);
  let temp = object;

  currentPath.forEach((key) => (temp = temp[key]));

  return temp ?? defaultValue;
}

console.log(get1(obj, "a.b.c"));
console.log(get1(object1, "a[0].b[0].c"));
console.log(get1(object1, "a[0].b.c", "default"));
