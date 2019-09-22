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
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInBusinessDays(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");

  const nDateOne = typeof startDate === "number" ? new Date(startDate) : startDate;
  const nDateTwo = typeof endDate === "number" ? new Date(endDate) : endDate;
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
