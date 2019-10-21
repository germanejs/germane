/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in years.
 */

"use strict";

const difference = require("../utils/evaluations/difference");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} current first date
 * @param {Date | Number} relative second date
 * @returns {Number} total difference in Years.
 * @throws {TypeError | RangeError} Invalid Date
 */
function differenceInYears(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const nDateOne = typeof current === "number" ? new Date(current) : current;
  const nDateTwo = typeof relative === "number" ? new Date(relative) : relative;

  const years = difference(nDateOne, nDateTwo).years;

  return relative.getTime() >= current.getTime() ? years : -years + 0;
}

module.exports = differenceInYears;
