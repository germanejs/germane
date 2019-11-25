/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within is used to check whether a given date has passed.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date|Number} current Current Date.
 * @param {Date | Number} relative Date to check against the current Date.
 * @returns {Boolean} True or False depending on whether the
 * second date is a passed date of the first.
 * @name isBefore
 */
function isBefore(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const currentDate = typeof current === "number" ? new Date(current) : current;
  const relativeDate = typeof relative === "number" ? new Date(relative) : relative;
  // converts date to local time.
  const localCurrentDate = currentDate.valueOf() - currentDate.getTimezoneOffset() * 60 * 1000;
  const localRelativeDate = relativeDate.valueOf() - relativeDate.getTimezoneOffset() * 60 * 1000;

  return localCurrentDate > localRelativeDate;
}

module.exports = isBefore;
