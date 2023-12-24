const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if (!matrix.length) {
    return 0;
  }
  let columnCount = matrix[0].length;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix[i].length; k += 1) {
      if (matrix[i][k] === "^^") {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats,
};
