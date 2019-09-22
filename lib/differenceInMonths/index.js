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
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second date
 * @returns {Number | TypeError | RangeError} difference between dates in months.
 */
function differenceInMonths(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");

  const month = difference(startDate, endDate).totalMonths;

  return endDate.getTime() >= startDate.getTime() ? month : -month + 0;
}

module.exports = differenceInMonths;
