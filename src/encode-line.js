const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (typeof str !== 'string') return false;
  
  if (str.length === 0) return '';
  
  let encoded = '';
  let count = 1;
  
  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i - 1]) {
      count++;
    } else {
      encoded += count > 1 ? count + str[i - 1] : str[i - 1];
      count = 1;
    }
  }
  
  return encoded;
}

module.exports = {
  encodeLine
};
