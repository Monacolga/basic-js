const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for (let i = email.length - 1; i < email.length; i -= 1) {
    if (email[i] === "@") {
      let domain = email.slice(i + 1, email.length);
      return domain;
    }
  }
}

module.exports = {
  getEmailDomain,
};
