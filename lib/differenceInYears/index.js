/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in years.
 */

"use strict";

const difference = require("../_util/evaluations/difference");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date | Number} base first date
 * @param {Date | Number} relative second date
 * @returns {Number} total difference in Years.
 * @throws {TypeError | RangeError} Invalid Date
 */
function differenceInYears(base, relative) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");

  const nDateOne = typeof base === "number" ? new Date(base) : base;
  const nDateTwo = typeof relative === "number" ? new Date(relative) : relative;

  const years = difference(nDateOne, nDateTwo).year;

  return relative.getTime() >= base.getTime() ? years : -years + 0;
}

module.exports = differenceInYears;
