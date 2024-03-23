const grid = [
  [1, 1, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 1, 1, 3, 1],
];

const grid2 = [
  [2, 2, 2, 1],
  [1, 2, 2, 1],
  [1, 3, 1, 1],
  [1, 1, 1, 3],
];

function paint(grid) {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      const element = grid[row][column];

      if (element === -1) {
        continue;
      }
      counter++;
      dfs(grid, row, column);
    }
  }

  return counter;
}

console.log(paint(grid)); //5
console.log(paint(grid2)); //4

function helper(height, width, x, y) {
  return x >= 0 && x < height && y >= 0 && y < width;
}

function dfs(grid, row, column) {
  const neighborsOffset = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const height = grid.length;
  const width = grid[0].length;
  const currentValue = grid[row][column];
  grid[row][column] = -1;
  for (let index = 0; index < neighborsOffset.length; index++) {
    const [neighborX, neighborY] = neighborsOffset[index];
    const nextX = neighborX + row;
    const nextY = neighborY + column;

    if (
      helper(height, width, nextX, nextY) &&
      grid[nextX][nextY] === currentValue
    ) {
      dfs(grid, nextX, nextY);
    }
  }
}
