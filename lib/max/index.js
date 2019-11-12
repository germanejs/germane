/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview returns the maximum date from a given set of date in an array;
 */

"use strict";

const {
  isNumber,
  isEmptyArray,
  isValidDateArray,
  isDateOrNumber,
  isArray,
} = require("../_util/validations/validatePropTypes");
const pickBy = require("../_util/evaluations/pickBy");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date[]} dateArray An array of valid dates.
 * @returns {Date} returns the maximum date in the array.
 * ```js
 * max(
 *  [new Date("2019 11 11"), new Date("2190-09-23"),
 * 109110911000, germane("2011-12-09")]
 * ) //=> 2190-09-23T00:00:00.000Z
 * ```
 */
function max(dateArray) {
  if (dateArray === null || dateArray === undefined) return RangeError("Max takes at least one argument");

  if (!isArray(dateArray)) return TypeError("Expected argument to be an array");

  if (!isValidDateArray(dateArray, isDateOrNumber)) return new TypeError("Invalid Date: array contains non-date value(s)");

  if (isEmptyArray(dateArray)) return new RangeError("Empty array");

  if (!isValidDateArray(dateArray, validateDate)) return new RangeError("Invalid Date: array contains non-date value(s)");

  const mappedDateArray = dateArray.map(value => (isNumber(value) ? value : Number(value)));

  return new Date(pickBy(mappedDateArray, "max"));
}

module.exports = max;
