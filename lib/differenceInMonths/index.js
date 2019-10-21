/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in months.
 */

"use strict";

const difference = require("../utils/evaluations/difference");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in months.
 */
function differenceInMonths(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const month = difference(current, relative).totalMonths;

  return relative.getTime() >= current.getTime() ? month : -month + 0;
}

module.exports = differenceInMonths;
