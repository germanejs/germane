/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a dates specified are the same.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const isSameDate = require("../_util/evaluations/sameDate");
/**
 *
 * @param {Date|Number| typeof germane} base date | number | timestamp | germane
 * @param {Date|Number} relative date | number | timestamp
 * @name isSameDay
 * @returns {Boolean} Boolean value depending on whether specified dates is same day
 */

function isSameDay(base, relative) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");
  // eslint-disable-next-line no-nested-ternary
  const localTime1 = typeof base === "number" ? new Date(base) : base;
  // eslint-disable-next-line no-nested-ternary
  const localTime2 = typeof relative === "number" ? new Date(relative) : relative;
  return isSameDate(localTime1, localTime2);
}

module.exports = isSameDay;
