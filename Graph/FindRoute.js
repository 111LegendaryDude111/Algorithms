function fetch(from) {
  // from - это точка
  const data = {
    A: ["B", "D"],
    B: ["C", "N", "Z"],
    D: ["F", "E"],
    F: ["S"],
  };

  return data[from]; // отдает места куда можно поехать из точки from
}

function getRoute(from, to) {
  let result = [];
  const queue = [from];
  const visited = new Set();

  while (queue.length > 0) {
    const currentWay = queue.shift();
    visited.add(currentWay);
    result.push(currentWay);
    const isFind = currentWay === to;

    if (isFind) {
      result.push(to);
      return result;
    } else if (fetch(currentWay) && fetch(currentWay).length > 0) {
      for (const neighbor of fetch(currentWay)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return;
}
console.log(getRoute("A", "F")); // [ 'A', 'D', 'F' ]
console.log(getRoute("A", "S")); // [ 'A', 'D', 'F', 'S' ]
// console.log(getRoute("D", "S")); //  [ 'D', 'F', 'S' ]
// console.log(getRoute("A", "Z")); //  [ 'A', 'B', 'Z' ]
// console.log(getRoute("B", "S")); //  undefined

/*

GPT
  function getRoute(start, end) {
  const visited = new Set(); // Хранит уже посещенные точки
  const queue = [[start]]; // Очередь для поиска в ширину, начальный путь содержит только начальную точку

  while (queue.length > 0) {
    const path = queue.shift(); // Извлекаем следующий путь из очереди

    const current = path[path.length - 1]; // Получаем текущую точку из пути

    if (current === end) {
      // Если мы достигли конечной точки, возвращаем найденный путь
      return path;
    }

    // Если текущая точка не была посещена ранее
    if (!visited.has(current)) {
      visited.add(current); // Отмечаем текущую точку как посещенную

      // Получаем все места, куда можно поехать из текущей точки
      const nextPlaces = fetch(current);

      // Проверяем, что nextPlaces не является undefined и имеет свойство Symbol.iterator (то есть, он является итерируемым)
      if (nextPlaces !== undefined && nextPlaces[Symbol.iterator]) {
        // Для каждого места, куда можно поехать, создаем новый путь, добавляем его в очередь
        for (const next of nextPlaces) {
          const newPath = [...path, next]; // Создаем новый путь, добавляя следующее место к текущему пути
          queue.push(newPath); // Добавляем новый путь в очередь
        }
      }
    }
  }

  // Если путь не найден, возвращаем undefined
  return undefined;
}

console.log(getRoute("A", "F")); // [ 'A', 'D', 'F' ]
console.log(getRoute("A", "S")); // [ 'A', 'D', 'F', 'S' ]
console.log(getRoute("D", "S")); //  [ 'D', 'F', 'S' ]
console.log(getRoute("A", "Z")); //  [ 'A', 'B', 'Z' ]
console.log(getRoute("B", "S")); //  undefined

*/
