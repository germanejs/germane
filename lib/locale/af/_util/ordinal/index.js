/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {number} number
 * @returns {string} The argument (number) and its ordinal;
 * @description An ordinal is the position of a number,
 * the last two letters of the number when spelt in words in used to provide the ordinal;
 * @author Simeon Akpanudo
 */
function ordinalParse(number) {
  const numToStr = String(number);
  // eslint-disable-next-line no-nested-ternary
  return number < 20
    ? number === 1 || number === 8
      ? numToStr + "ste"
      : numToStr + "de"
    : numToStr + "ste";
}

module.exports = ordinalParse;
