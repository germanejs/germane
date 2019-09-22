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
 * @param {Date | Number} startDate first date
 * @param {Date | Number} endDate second date
 * @returns {Number} total difference in Years.
 * @throws {TypeError | RangeError} Invalid Date
 */
function differenceInYears(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");

  const nDateOne = typeof startDate === "number" ? new Date(startDate) : startDate;
  const nDateTwo = typeof endDate === "number" ? new Date(endDate) : endDate;

  const years = difference(nDateOne, nDateTwo).years;

  return endDate.getTime() >= startDate.getTime() ? years : -years + 0;
}

module.exports = differenceInYears;
