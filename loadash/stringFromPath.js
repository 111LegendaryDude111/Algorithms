export function stringFromPath(str) {
  //cpu - O(N + M) mem - O(N + M)
  const arr = [];
  const symbols = ["[", "."];
  let tempString = "";
  for (let index = 0; index < str.length; index++) {
    let el = str[index];

    if (symbols.includes(el)) {
      arr.push(tempString);
      tempString = "";
      continue;
    }

    if (el === "]") {
      continue;
    }

    tempString += el;

    if (index === str.length - 1) {
      arr.push(tempString);
    }
  }

  return arr;
}

// console.log(stringFromPath("a.b.c"));
// console.log(stringFromPath("a[0].b.c"));
// console.log(stringFromPath("a[0].b[0].c"));
// console.log(stringFromPath("a[0].test.h.dev"));
