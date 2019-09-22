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
 * @param {Date|Number| typeof germane} dateOne date | number | timestamp | germane
 * @param {Date|Number} dateTwo date | number | timestamp
 * @name isSameDay
 * @returns {Boolean} Boolean value depending on whether specified dates is same day
 */

function isSameDay(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");
  // eslint-disable-next-line no-nested-ternary
  const localTime1 = Object.prototype.toString.call(dateOne) === "[object Date]"
    ? dateOne
    : typeof dateOne === "number"
      ? germane(dateOne)
      : germane(dateOne.getTime());
  // eslint-disable-next-line no-nested-ternary
  const localTime2 = Object.prototype.toString.call(dateTwo) === "[object Date]"
    ? dateTwo
    : typeof dateTwo === "number"
      ? germane(dateTwo)
      : germane(dateTwo.getTime());
  return isSameDate(localTime1, localTime2);
}

module.exports = isSameDay;
