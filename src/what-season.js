const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  if (date.getTime) {
    try {
      date.getTime().toString();
    } catch (e) {
      if (e.message === 'this is not a Date object.')
        throw new Error('Invalid date!');
      throw e;
    }
  }

  const month = date.getMonth();
  
  const season = month >= 2 && month <= 4 
    ? 'spring' 
    : month >= 5 && month <= 7 
      ? 'summer' 
      : month >= 8 && month <= 10 
        ? 'autumn' 
        : 'winter';

  return season;  
}

module.exports = {
  getSeason
};
