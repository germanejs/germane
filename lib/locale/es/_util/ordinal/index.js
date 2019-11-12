/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {number} number
 * @returns {string} The argument (number) and its ordinal;
 * @author Simeon Akpanudo
 */
function ordinalParse(number) {
  const numToStr = String(number);

  return numToStr + ".º";
}

module.exports = ordinalParse;
