function fetch(from) {
  const data = {
    A: ["B", "D"],
    B: ["C", "N", "Z"],
    D: ["F", "E"],
    F: ["S"],
  };

  return data[from];
}

function getRoute(from, to, result = [], visited = new Set()) {
  if (visited.has(from)) {
    return;
  }

  if (from === to) {
    result.push(from);

    return result;
  }

  result.push(from);
  visited.add(from);

  const route = fetch(from);

  if (route) {
    for (let index = 0; index < route.length; index++) {
      const element = route[index];
      const r = getRoute(element, to, result, visited);

      if (r) {
        return result;
      } else {
        result.pop();
      }
    }
  }

  return;
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
