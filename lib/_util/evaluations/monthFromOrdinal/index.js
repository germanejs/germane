/**
 * @author Simeon Akpanudo
 */

"use strict";

const isLeapYear = require("../../validations/isLeapYear");
const inRangeOf = require("../../validations/inRangeOf");

/**
 *
 * @param {Number} ordinal Ordinal for a given date.
 * @param {Number} year Year of a given date.
 */
function getMonthFromOrdinal(ordinal, year) {
  // 367th days is the first day of the next year.
  const commonYear = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 367];

  function toMap(value, index) {
    let newValue = value;
    const x = index > 1 ? (newValue += 1) : newValue;
    return x;
  }
  const leapYear = commonYear.map(toMap);

  function filterArray(value, index, array) {
    return inRangeOf(ordinal, value, array[index + 1] - 1);
  }
  // zero indexed
  const startingOrdinal = Number((isLeapYear(year) ? leapYear : commonYear).filter(filterArray));

  // month is zero-indexed
  const od = Number((isLeapYear(year) ? leapYear : commonYear).findIndex(filterArray));
  return { startingOrdinal, monthOrdinal: od };
}

module.exports = getMonthFromOrdinal;
