/**
 * @author Simeon Akpanudo
 * @fileoverview returns the units of time as an object.
 */

"use strict";

const { isDateOrNumber, isBool, isObject } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date} date Date type or timestamp
 * @returns {Object} Returns an object of datetime units.
 * ```js
 * toObject(germane("1980-11-11 23:56:12.783Z"));
 * toObject(new Date("1980-11-11 23:56:12.783Z"))
 * //=> {year: 1980, month: 10, date: 11, hours: 23, minutes: 56, seconds: 12, milliseconds: 783 }
 * ```
 */
function toObject(date, options = { utc: false }) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!isObject(options)) return new TypeError("Invalid option");

  if (!validateDate(date)) return new RangeError("Invalid Date");
  if (options.utc !== undefined && !isBool(options.utc)) return new TypeError("Invalid UTC option: expected a boolean");

  const dateValue = typeof date === "number" ? new Date(date) : date;
  if (options.utc) {
    const obj = {
      year: dateValue.getUTCFullYear(),
      month: dateValue.getUTCMonth(),
      date: dateValue.getUTCDate(),
      hours: dateValue.getUTCHours(),
      minutes: dateValue.getUTCMinutes(),
      seconds: dateValue.getUTCSeconds(),
      milliseconds: dateValue.getUTCMilliseconds(),
    };

    return obj;
  }
  const obj = {
    year: dateValue.getFullYear(),
    month: dateValue.getMonth(),
    date: dateValue.getDate(),
    hours: dateValue.getHours(),
    minutes: dateValue.getMinutes(),
    seconds: dateValue.getSeconds(),
    milliseconds: dateValue.getMilliseconds(),
  };

  return obj;
}

module.exports = toObject;
