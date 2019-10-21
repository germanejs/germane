/**
 * @author Simeon Akpanudo
 * @fileoverview Contains getWorkdays function..
 * a function that returns an array of workdays in specified range.
 */

"use strict";

const { absFloor } = require("../utils/roundingMethods");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} current Date || Timestamp to specify the current date
 * @param {Date|Number} relative Date || Timestamp to specify the relative date

 * @returns {Number[]} Returns an array of working days ranging from current date to
 end date in timestamps, with the current date and end date included
 * @example const workingDays = getWorkdays(Date.now(), new Date("2020 12 31"), a => new Date(a));
 */
function getBusinessDays(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const newStart = typeof current === "number" ? new Date(current) : current;
  const newEnd = typeof relative === "number" ? new Date(relative) : relative;

  const startX = new Date(
    `${newStart.getUTCFullYear()}-${newStart.getUTCMonth() + 1}-${newStart.getUTCDate()}`,
  );
  const endY = new Date(
    `${newEnd.getUTCFullYear()}-${newEnd.getUTCMonth() + 1}-${newEnd.getUTCDate()}`,
  );
  let date = [];
  let dateToMilli;

  const difference = endY.getTime() - startX.getTime();

  const timestamp = absFloor(difference / (1000 * 3600 * 24));
  for (let i = 0; i <= timestamp; i += 1) {
    dateToMilli = i * 24 * 3600 * 1000;
    // checking for negative and positive dates
    const d = difference >= 0
      ? new Date(newStart.getTime() + dateToMilli)
      : new Date(newStart.getTime() - dateToMilli);

    if (d.getUTCDay() % 6 !== 0) {
      date.push(d.getTime());
    }
  }
  return date;
}

module.exports = getBusinessDays;
