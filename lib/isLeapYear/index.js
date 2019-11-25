/**
 * @author Simeon Akpanudo
 * @fileoverview Function checks date for leap years.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const leapYear = require("../_util/validations/isLeapYear");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date|Number} date current Date.
 * @returns {Boolean} True or False depending on whether the date is in a leap year.
 * @name isLeapYear
 */
function isLeapYear(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const currentDate = typeof date === "number" ? new Date(date) : date;

  return leapYear(currentDate.getFullYear());
}

module.exports = isLeapYear;
