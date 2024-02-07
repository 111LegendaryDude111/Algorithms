const arr = [6.1, 4.2, 6.3];
const obj = { 0: 6.1, 1: 4.2, 2: 6.3 };
const obj1 = { 0: "one", 1: "two", 2: "three" };

function groupBy(collection, conversionProperty) {
  //t = O(n) M = O(n)

  const isArray = Array.isArray(collection.__proto__);
  collection = isArray ? collection : Object.values(collection);
  const map = {};

  collection.forEach((element) => {
    const convertedValue =
      typeof conversionProperty === "function"
        ? conversionProperty(element)
        : element[conversionProperty];

    if (map[convertedValue]) {
      map[convertedValue] = [...map[convertedValue], element];
    } else {
      map[convertedValue] = [element];
    }
  });

  return map;
}

console.log(groupBy(arr, Math.floor));
console.log(groupBy(obj, Math.floor));
console.log(groupBy(obj1, "length"));
