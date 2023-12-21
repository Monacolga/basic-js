const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];
  let count;
  for (let i = 0; i < rows; i += 1) {
    result.push([]);
    for (let k = 0; k < cols; k += 1) {
      count = 0;

      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          if (x !== 0 || y !== 0) {
            const newX = i + x;
            const newY = k + y;

            if (
              newX >= 0 &&
              newX < rows &&
              newY >= 0 &&
              newY < cols &&
              matrix[newX][newY]
            ) {
              count += 1;
            }
          }
        }
      }
      result[i].push(count);
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
