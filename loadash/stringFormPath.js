export function stringFormPath(str) {
    //cpu - O(N + M) mem - O(N + M)
  const arr = [];
  const symbols = ["[", "]", "."];

  for (let index = 0; index < str.length; index++) {
    let el = str[index];
    if (symbols.includes(el)) {
      continue;
    }

    arr.push(el);
  }

  return arr;
}
