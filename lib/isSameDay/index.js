/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a dates specified are the same.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const isSameDate = require("../utils/evaluations/isSameDate");
const germane = require("../germane");
/**
 *
 * @param {Date|Number| typeof germane} startDate date | number | timestamp | germane
 * @param {Date|Number} endDate date | number | timestamp
 * @name isSameDay
 * @returns {Boolean} Boolean value depending on whether specified dates is same day
 */

function isSameDay(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");
  // eslint-disable-next-line no-nested-ternary
  const localTime1 = Object.prototype.toString.call(startDate) === "[object Date]"
    ? startDate
    : typeof startDate === "number"
      ? germane(startDate)
      : germane(startDate.getTime());
  // eslint-disable-next-line no-nested-ternary
  const localTime2 = Object.prototype.toString.call(endDate) === "[object Date]"
    ? endDate
    : typeof endDate === "number"
      ? germane(endDate)
      : germane(endDate.getTime());
  return isSameDate(localTime1, localTime2);
}

module.exports = isSameDay;
