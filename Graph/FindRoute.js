function fetch(from) {
  // from - это точка
  const data = {
    A: ["B", "D"],
    B: ["C", "N", "Z"],
    D: ["F", "E"],
    F: ["S"],
  };

  return data[from];
}

function getRoute(from, to) {
  const visited = new Set();

  let stack = [from];
  let result = [];
  while (stack.length) {
    const element = stack.pop();
    const nextPoints = visited.has(element) ? false : fetch(element);

    visited.add(element);
    result.push(element);

    if (element === to) {
      return result;
    }

    if (nextPoints) {
      stack.push(...nextPoints);
    } else {
      result.pop();
    }
  }
}

console.log(getRoute("A", "F"));
// [ 'A', 'D', 'F' ]
console.log(getRoute("A", "S"));
// [ 'A', 'D', 'F', 'S' ]
console.log(getRoute("D", "S"));
//  [ 'D', 'F', 'S' ]
console.log(getRoute("A", "Z"));
//  [ 'A', 'B', 'Z' ]
console.log(getRoute("B", "S"));
//  undefined
