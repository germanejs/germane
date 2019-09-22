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
 * @param {Date | Number} dateOne first date
 * @param {Date | Number} dateTwo second date
 * @returns {Number} total difference in Years.
 * @throws {TypeError | RangeError} Invalid Date
 */
function differenceInYears(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");

  const nDateOne = typeof dateOne === "number" ? new Date(dateOne) : dateOne;
  const nDateTwo = typeof dateTwo === "number" ? new Date(dateTwo) : dateTwo;

  const diff = difference(nDateOne, nDateTwo);

  return diff.years;
}

module.exports = differenceInYears;
