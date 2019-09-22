/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const { absFloor } = require("../utils/roundingMethods");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInBusinessDays(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");

  const nDateOne = typeof dateOne === "number" ? new Date(dateOne) : dateOne;
  const nDateTwo = typeof dateTwo === "number" ? new Date(dateTwo) : dateTwo;
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
    if (d.getDay() % 6 !== 0) {
      date += 1;
    }
  }
  return date;
}

module.exports = differenceInBusinessDays;
