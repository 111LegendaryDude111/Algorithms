const obj = { a: { b: { c: 3 } } };
const object1 = { a: [{ b: [{ c: 3 }] }] };

function get(object, path, defaultValue) {
    //O(n) O(1)
  const currentPath = path.split(".");

  return (
    currentPath.reduce((acc, cur) => {
      //Если строка вида b[0], разбиваю на числа и буквы
      const temp = cur.match(/\w/g);

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
console.log(get(object1, "a[0].b.c",'default'));
