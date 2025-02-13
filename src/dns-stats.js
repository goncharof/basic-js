const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!Array.isArray(domains)) return {};

  const stats = {};

  domains.forEach(domain => {
    const parts = domain.split('.').reverse();
    const topLevelDomain = '.' + parts[0];
    stats[topLevelDomain] = (stats[topLevelDomain] || 0) + 1;

    for (let i = 1; i < parts.length; i++) {
      const currentDomain = parts.slice(0, i + 1).join('.');
      const key = '.' + currentDomain;
      stats[key] = (stats[key] || 0) + 1;
    }
  });

  return stats;
}

module.exports = {
  getDNSStats
};
