/**
 * @author Simeon Akpanudo
 * @fileoverview Returns an array of date from range provided
 */

"use strict";

const { isDateOrNumber, isObject, isBool } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date} date Date type or timestamp
 * @returns {Number[]} Returns an array of datetime units.
 * ```js
 * toArray(germane("1980-11-11 23:56:12.783Z"));
 * toArray(new Date("1980-11-11 23:56:12.783Z"), { utc: true })
 * //=> [1980, 10, 11, 23, 56, 12, 783]
 * ```
 */
function toArray(date, options = { utc: false }) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!isObject(options)) return new TypeError("Invalid option");
  if (!validateDate(date)) return new RangeError("Invalid Date");
  if (options.utc !== undefined && !isBool(options.utc)) return new TypeError("Invalid UTC option: expected a boolean");

  const dateValue = typeof date === "number" ? new Date(date) : date;

  if (options.utc) {
    const utcmethods = [
      "getUTCFullYear",
      "getUTCMonth",
      "getUTCDate",
      "getUTCHours",
      "getUTCMinutes",
      "getUTCSeconds",
      "getUTCMilliseconds",
    ];
    return utcmethods.map(value => dateValue[value]());
  }
  const methods = [
    "getFullYear",
    "getMonth",
    "getDate",
    "getHours",
    "getMinutes",
    "getSeconds",
    "getMilliseconds",
  ];
  return methods.map(value => dateValue[value]());
}

module.exports = toArray;
