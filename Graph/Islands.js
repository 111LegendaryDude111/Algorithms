let grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
// Output: 1

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
// Output: 3

function islandsCounter(grid) {
  let counterIslands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      const element = grid[row][column];

      if (element === "1") {
        dfs(grid, row, column);
        counterIslands++;
      }
    }
  }

  return counterIslands;
}

const neighborsOffset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(grid, row, column) {
  grid[row][column] = 0;
  const width = grid[0].length;
  const height = grid.length;
  for (let index = 0; index < neighborsOffset.length; index++) {
    const [currentX, currentY] = neighborsOffset[index];
    const nextRow = row + currentX;
    const nextColumn = column + currentY;

    if (
      helper(height, width, nextRow, nextColumn) &&
      grid[nextRow][nextColumn] === "1"
    ) {
      dfs(grid, nextRow, nextColumn);
    }
  }
}

console.log(islandsCounter(grid1));
console.log(islandsCounter(grid2));

function helper(height, width, x, y) {
  return 0 <= x && 0 <= y && x < height && y < width;
}
/*
  Когда мы говорим о размерах сетки, мы обычно говорим о количестве строк и столбцов. 
  Поэтому, когда мы проверяем границы, мы сравниваем индексы строк с общим количеством строк (высотой сетки), 
  потому что индекс строки указывает на конкретную строку в сетке. 
  Индексы столбцов сравниваются с общим количеством столбцов (шириной сетки), потому что они указывают на конкретный столбец в сетке.
  Таким образом, чтобы гарантировать, что индексы находятся в пределах сетки, мы сравниваем индексы строк с высотой сетки и индексы столбцов с шириной сетки.
*/
