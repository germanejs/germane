/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in months.
 */

"use strict";

const difference = require("../_util/evaluations/difference");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in months.
 */
function differenceInMonths(base, relative) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");

  const month = difference(base, relative).totalMonth;

  return relative.getTime() >= base.getTime() ? month : -month + 0;
}

module.exports = differenceInMonths;
