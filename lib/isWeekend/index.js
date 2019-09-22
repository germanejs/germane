/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a date is a weekend
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} date date | number | timestamp
 * @name isWeekend
 * @returns {Boolean} Boolean value depending on whether specified date is a weekend
 */

// weekend starts on sunday. 0 indexed.
function isWeekend(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");
  const d = typeof date === "number" ? new Date(date) : date;

  const day = d.getDay();

  return day % 6 === 0;
}

module.exports = isWeekend;
