/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within is used to check whether a given date is the future.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} startDate Date used to check whether second date is a future date.
 * @param {Date | Number} endDate Date to check against the first.
 * @returns {Boolean} True or False depending on whether the second date is a f date of the first.
 * @name isFuture
 */
function isFuture(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");

  const nDateOne = (typeof startDate === "number" ? new Date(startDate) : startDate).getTime();
  const nDateTwo = (typeof endDate === "number" ? new Date(endDate) : endDate).getTime();

  return nDateTwo > nDateOne;
}

module.exports = isFuture;
