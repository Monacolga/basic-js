const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = Array.from(s1);
  const array2 = Array.from(s2);

  const commonChar = array1.filter((char) => {
    const index = array2.indexOf(char);
    if (index >= 0) {
      array2.splice(index, 1);
      return true;
    }
    return false;
  });
  return commonChar.length;
}

module.exports = {
  getCommonCharacterCount,
};
