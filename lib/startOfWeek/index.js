/* eslint-disable max-len */
/**
 * @author Simeon Akpanudo
 * @fileoverview Handles return of distance between date provided and its current of week.
 */

"use strict";

const { startOfWeekHandler } = require("../_util/evaluations/startOf");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date | Number} date Date object or a timestamp
 * @summary returns the start of week for current date, shifting it to UTC time.
 *
 * startOf functions (like endOf functions) assumes the date passed is a locale time
 * so automatically shifts it to the UTC time to avoid timezone issues,
 * when using with functions like formatRelative and format.
 *
 * **If the argument provided is a Date constructor | timestamp, the function will return a Date contructor and if it is a germane object it'll return a germane object.**
 * ```js
 * startOfWeek(new Date("2109-09-11")); //=> "2109-09-09T(shifted hours):(shifted minutes):00.000Z";
 * ```
 */
function startOfWeek(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");
  if (!validateDate(date)) return new RangeError("Invalid Date");
  const startOfW = startOfWeekHandler(typeof date === "number" ? new Date(date) : date);
  return startOfW;
}

module.exports = startOfWeek;
