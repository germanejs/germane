/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a dates specified are the same.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const isSameDate = require("../_util/evaluations/sameDate");
const germane = require("../germane");
/**
 *
 * @param {Date|Number| typeof germane} current date | number | timestamp | germane
 * @param {Date|Number} relative date | number | timestamp
 * @name isSameDay
 * @returns {Boolean} Boolean value depending on whether specified dates is same day
 */

function isSameDay(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");
  // eslint-disable-next-line no-nested-ternary
  const localTime1 = Object.prototype.toString.call(current) === "[object Date]"
    ? current
    : typeof current === "number"
      ? germane(current)
      : germane(current.getTime());
  // eslint-disable-next-line no-nested-ternary
  const localTime2 = Object.prototype.toString.call(relative) === "[object Date]"
    ? relative
    : typeof relative === "number"
      ? germane(relative)
      : germane(relative.getTime());
  return isSameDate(localTime1, localTime2);
}

module.exports = isSameDay;
