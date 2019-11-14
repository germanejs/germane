/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * Function returns the closest date and time to the base date.
 */

"use strict";

const {
  isNumber,
  isArray,
  isEmptyArray,
  isValidDateArray,
  isDateOrNumber,
} = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date|Number} base Base date
 * @param {Date[]} datesArray An array of date values or timestamp
 * @summary returns the date nearest to the base date from a given date array.
 * ```js
 * closestTo(new Date("2019-11-09T14:09:27.099"),
 *  [
 *    new Date("2019-11-09T15:00:00.999Z"),
 *    new Date("2019-11-10"),
 *    new Date("2019-11-09T13:56:59.901Z")
 *  ]);
 * //=> 2019-11-09T13:56:59.901Z
 * ```
 */
function closestTo(base, datesArray) {
  if (!isDateOrNumber(base)) return new TypeError("Invalid Date");
  if (!validateDate(base)) return new RangeError("Invalid Date");
  if (!isArray(datesArray)) return new TypeError("Expected argument at pos 1 to be an array");
  if (isEmptyArray(datesArray)) return new RangeError("Empty array");
  if (!isValidDateArray(datesArray, validateDate)) return new TypeError("Invalid Date: array contains non-date value(s)");

  const findClosestDifference = (a, b) => (a > b ? a - b : b - a);
  const baseValue = base.valueOf();
  // turns non timestamp dates to timestamps and sorts them.
  const dateValues = datesArray
    .map(a => (isNumber(a) ? a : a.valueOf()))
    .concat(baseValue)
    .sort();
  // finds the index of the base date
  const baseIndex = dateValues.findIndex(a => a === baseValue);
  if (dateValues.length <= 1) {
    return new Date(baseValue);
  }
  if (baseIndex === 0) {
    return new Date(dateValues[baseIndex + 1]);
  }
  if (baseIndex === dateValues.length) {
    return new Date(dateValues[baseIndex - 1]);
  }
  const prevIndex = findClosestDifference(dateValues[baseIndex - 1], baseValue);
  const nextIndex = findClosestDifference(dateValues[baseIndex + 1], baseValue);
  // compares difference/distance to the base date.
  const closestIndex = prevIndex > nextIndex ? baseIndex + 1 : baseIndex - 1;
  return new Date(dateValues[closestIndex]);
}

module.exports = closestTo;
