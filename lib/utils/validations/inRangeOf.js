/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {Number} range Number which is to be checked.
 * @param {Number} from Starting digit
 * @param {Number} to Ending digit
 * @returns {Boolean} truthy or falsy value depending on when specified number is in that range.
 */
function inRangeOf(range, from, to) {
  return from <= range && range <= to;
}

module.exports = inRangeOf;
