/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const { absFloor } = require("../_util/evaluations/roundingMethods");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInBusinessDays(base, relative) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");

  const nDateOne = typeof base === "number" ? new Date(base) : base;
  const nDateTwo = typeof relative === "number" ? new Date(relative) : relative;
  let dateToMilli;
  let date = 0;

  const difference = nDateTwo.getTime() - nDateOne.getTime();
  const timestamp = absFloor(difference / (1000 * 3600 * 24));

  for (let i = 0; i <= timestamp; i += 1) {
    dateToMilli = i * 24 * 3600 * 1000;
    // checking for negative and positive dates
    const d = difference >= 0
      ? new Date(nDateOne.getTime() + dateToMilli)
      : new Date(nDateOne.getTime() - dateToMilli);
    if (d.getUTCDay() % 6 !== 0) {
      date += 1;
    }
  }
  return difference >= 0 ? date : -date;
}

module.exports = differenceInBusinessDays;
