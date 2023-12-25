const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const array = String(num).split("").map(Number);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < array[i + 1]) {
      array.splice(i, 1);
      return Number(array.join(""));
    }
  }
  array.pop();
  return Number(array.join(""));
}

module.exports = {
  deleteDigit,
};
