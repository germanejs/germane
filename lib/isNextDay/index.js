/**
 * @author Simeon Akpanudo
 * @fileoverview Checks if date specified in function parameter 1 is the next day of parameter 2.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const replaceUnits = require("../utils/evaluations/replaceUnit");
const germane = require("../germane");
/**
 * @param {Date|Number} startDate Date which is to be checked as the next day.
 * @param {Date|Number} endDate Date assumed to be the current day.
 * @name isNextDay
 * @returns {Boolean} returns truthy or falsy values (true || false).
 * depending on whether the second day specified is after the first.
 */
function isNextDay(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");
  const nOne = Object.prototype.toString.call(startDate) === "[object Date]"
    ? new Date(startDate)
    : germane(startDate);
  const nTwo = Object.prototype.toString.call(startDate) === "[object Date]"
    ? new Date(endDate)
    : germane(endDate);

  const d2 = germane(
    replaceUnits(nTwo, {
      year: nTwo.getUTCFullYear(),
      month: nTwo.getUTCMonth() + 1,
      day: nTwo.getUTCDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime() + 86400000;
  const d1 = germane(
    replaceUnits(nOne, {
      year: nOne.getUTCFullYear(),
      month: nOne.getUTCMonth() + 1,
      day: nOne.getUTCDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime();

  return d1 === d2;
}

module.exports = isNextDay;
