/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within is used to check whether a given date has passed.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} dateOne Date used to check whether second date is a past date.
 * @param {Date | Number} dateTwo Date to check against the first.
 * @returns {Boolean} True or False depending on whether the second date is a passed date of the first.
 * @name isPast
 */
function isPast(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");

  const nDateOne = (typeof dateOne === "number" ? new Date(dateOne) : dateOne).getTime();
  const nDateTwo = (typeof dateTwo === "number" ? new Date(dateTwo) : dateTwo).getTime();

  return nDateOne > nDateTwo;
}

module.exports = isPast;
