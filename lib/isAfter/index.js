/**
 * @author Simeon Akpanudo
 * @fileoverview Checks whether 2nd date  specified is after the first;
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date|Number} current Date object or timestamp
 * @param {Date|Number} relative Date object or timestamp
 * @name isAfter
 * @returns {Boolean} True or false if relative date is after the current date.
 */
function isAfter(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const currentDate = typeof current === "number" ? new Date(current) : current;

  const relativeDate = typeof relative === "number" ? new Date(relative) : relative;

  const localCurrentDate = currentDate.valueOf() - currentDate.getTimezoneOffset() * 60 * 1000;
  const localRelativeDate = relativeDate.valueOf() - relativeDate.getTimezoneOffset() * 60 * 1000;

  return localCurrentDate < localRelativeDate;
}

module.exports = isAfter;
