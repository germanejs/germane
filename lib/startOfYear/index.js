/* eslint-disable max-len */
/**
 * @author Simeon Akpanudo
 * @fileoverview Handles return of distance between date provided and its current of year.
 */

"use strict";

const { startOfYearHandler } = require("../_util/evaluations/startOf");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date | Number} date Date object or a timestamp
 * @summary returns the start of year for current date, shifting it to UTC time.
 *
 * startOf functions (like endOf functions) assumes the date passed is a locale time
 * so automatically shifts it to the UTC time to avoid timezone issues,
 * when using with functions like formatRelative and format.
 *
 * **If the argument provided is a Date constructor | timestamp, the function will return a Date contructor and if it is a germane object it'll return a germane object.**
 * ```js
 * startOfYear(new Date("2109-09-11")); //=> "2109-01-01T(shifted hours):(shifted minutes):00.000Z";
 * ```
 */
function startOfYear(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");
  if (!validateDate(date)) return new RangeError("Invalid Date");
  const startOfY = startOfYearHandler(typeof date === "number" ? new Date(date) : date);

  return startOfY;
}

module.exports = startOfYear;
