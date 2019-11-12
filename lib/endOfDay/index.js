/* eslint-disable max-len */
/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its dat.
 */

"use strict";

const { endOfDayHandler } = require("../_util/evaluations/endOf");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date | Number} date
 * @summary returns the end of day for current date, shifting it to UTC time.
 *
 * endOf functions assumes the date passed is a locale time
 * so automatically shifts it to the UTC time to avoid timezone issues,
 * when using with functions like formatRelative and format.
 *
 * **If the argument provided is a Date constructor | timestamp, the function will return a Date contructor and if it is a germane object it'll return a germane object.**
 * ```js
 * endOfDay(new Date("2109-09-11")); //=> "2109-09-11T(shifted hours):(shifted minutes):59.999Z";
 * ```
 */
function endOfDay(date = Date.now()) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");
  if (!validateDate(date)) return new RangeError("Invalid Date");
  const endOfD = endOfDayHandler(typeof date === "number" ? new Date(date) : date);
  return endOfD;
}

module.exports = endOfDay;
