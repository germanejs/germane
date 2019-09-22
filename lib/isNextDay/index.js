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
 * @param {Date|Number} dateOne Date which is to be checked as the next day.
 * @param {Date|Number} dateTwo Date assumed to be the current day.
 * @name isNextDay
 * @returns {Boolean} returns truthy or falsy values (true || false).
 * depending on whether the second day specified is after the first.
 */
function isNextDay(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");
  const nOne = Object.prototype.toString.call(dateOne) === "[object Date]"
    ? new Date(dateOne)
    : germane(dateOne);
  const nTwo = Object.prototype.toString.call(dateOne) === "[object Date]"
    ? new Date(dateTwo)
    : germane(dateTwo);

  const d2 = germane(
    replaceUnits(nTwo, {
      year: nTwo.getFullYear(),
      month: nTwo.getMonth() + 1,
      day: nTwo.getDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime() + 86400000;
  const d1 = germane(
    replaceUnits(nOne, {
      year: nOne.getFullYear(),
      month: nOne.getMonth() + 1,
      day: nOne.getDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime();

  return d1 === d2;
}

module.exports = isNextDay;
