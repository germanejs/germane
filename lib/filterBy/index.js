/**
 * @author Simeon Akpanudo
 * @fileoverview Sorts a date according to specifed units.
 */

"use strict";

const inArray = require("../_util/validations/inArray");
const {
  isValidDateArray,
  isEmptyArray,
  isString,
  isNumber,
  isArray,
} = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date[]} array An array of date or timestamp
 * @param {String} unit Date unit which is used to filter the date
 * @param {Number} value Date unit value.
 */
function filterBy(array, unit, value) {
  if (!isArray(array)) return new TypeError("Expected argument at pos 1 to be an array");
  if (isEmptyArray(array)) return new RangeError("Empty array");
  if (!isValidDateArray(array, validateDate)) return new TypeError("Invalid Date: array contains non-date value(s)");
  if (!isString(unit)) return new TypeError("Invalid unit: expected a string");
  if (!isNumber(value)) return new TypeError("Invalid unit value: expected a number");

  const validUnits = ["year", "month", "date", "day", "hour"];
  if (!inArray(validUnits, unit)) return [];

  const newArray = array.map(a => new Date(a));
  if (unit === "year") {
    if (value <= 0) return new RangeError("Invalid Date: year out of range");
    const yearArr = newArray.filter(x => x.getFullYear() === value);
    return yearArr;
  }
  if (unit === "month") {
    if (value <= 0 || value > 12) return new RangeError("Invalid Date: month out of range");
    const month = newArray.filter(x => x.getMonth() + 1 === value);
    return month;
  }
  if (unit === "date") {
    if (value <= 0 || value > 31) return new RangeError("Invalid Date: date out of range");
    const date = newArray.filter(x => x.getDate() === value);
    return date;
  }
  if (unit === "day") {
    if (value < 0 || value > 6) return new RangeError("Invalid Date: day out of range");
    const day = newArray.filter(x => x.getDay() === value);
    return day;
  }
  if (unit === "hour") {
    if (value < 0 || value > 23) return new RangeError("Invalid Date: hour out of range");
    const hour = newArray.filter(x => x.getHours() === value);
    return hour;
  }
  return 0;
}

module.exports = filterBy;
