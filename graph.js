function fetch(from) {
  // from - это точка
  const data = {
    A: ["B", "D"],
    B: ["C", "N", "Z"],
    D: ["E", "F"],
    F: ["S"],
  };

  return data[from]; // отдает места куда можно поехать из точки from
}

function getRoute(from, to) {
  let result = [from];
  const stack = [...fetch(from)];

  while (stack.length > 0) {
    const currentWay = stack.pop();
    result.push(currentWay);
    const isFind = fetch(currentWay) && fetch(currentWay).includes(to);

    if (isFind) {
      result.push(to);
      return result;
    } else if (fetch(currentWay)) {
      stack.push(...fetch(currentWay));
    } else {
      result = [from];
    }
  }
  return;
}
console.log(getRoute("A", "F")); // [ 'A', 'D', 'F' ]
console.log(getRoute("A", "S")); // [ 'A', 'D', 'F', 'S' ]
console.log(getRoute("D", "S")); //  [ 'D', 'F', 'S' ]
console.log(getRoute("A", "Z")); //  [ 'A', 'B', 'Z' ]
console.log(getRoute("B", "S")); //  undefined

// function getRoute(from, to) {
//   const rootTo = to;
//   const result = [];
//   let stack = [...fetch(from)];

//   while (stack.length > 0) {
//     let currentPoint = stack.pop();
//     let currentWay = fetch(currentPoint);

//     if (currentWay && currentWay.includes(to)) {
//       result.push({ point: currentPoint, way: currentWay });
//       to = currentPoint;
//       stack.push(...fetch(from));
//     } else if (currentWay) {
//       stack.push(...currentWay);
//     }
//   }

//   return result.length === 0
//     ? undefined
//     : [from, ...result.reverse().map((el) => el.point), rootTo];
// }
