const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  
  // Convert addition to string, handling non-string inputs
  const additionStr = String(addition);
  
  // Create addition part with separator
  const additionPart = additionRepeatTimes > 1
    ? Array(additionRepeatTimes)
        .fill(additionStr)
        .join(additionSeparator)
    : additionStr;
  
  const fullItem = str + additionPart;
  
  return Array(repeatTimes)
    .fill(fullItem)
    .join(separator);
}

module.exports = {
  repeater
};
