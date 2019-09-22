/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within is used to check whether a given date is the future.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} dateOne Date used to check whether second date is a future date.
 * @param {Date | Number} dateTwo Date to check against the first.
 * @returns {Boolean} True or False depending on whether the second date is a f date of the first.
 * @name isFuture
 */
function isFuture(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");

  const nDateOne = (typeof dateOne === "number" ? new Date(dateOne) : dateOne).getTime();
  const nDateTwo = (typeof dateTwo === "number" ? new Date(dateTwo) : dateTwo).getTime();

  return nDateTwo > nDateOne;
}

module.exports = isFuture;
