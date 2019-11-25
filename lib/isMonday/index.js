/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if date specified is a monday.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date|Number} date date | number | timestamp | germane
 * @name isMonday
 * @returns {Boolean} Boolean value depending on whether specified dates is same day
 */

function isMonday(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");
  // eslint-disable-next-line no-nested-ternary
  const localTime = typeof date === "number" ? new Date(date) : date;

  return localTime.getDay() === 1;
}

module.exports = isMonday;
