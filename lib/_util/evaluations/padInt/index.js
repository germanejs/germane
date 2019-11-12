/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 *
 * @param {Any} num
 * @param {String} padType
 * @param {Number} len
 * @param {String} val
 */
function padInt(num, padType, len, val) {
  if (num === undefined || isNaN(num) || num === null) return NaN;
  if (/padStart/.test(padType)) return String(num).padStart(len, val);
  if (/padEnd/.test(padType)) return String(num).padEnd(len, val);

  return 0;
}

module.exports = padInt;
