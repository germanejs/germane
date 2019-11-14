/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview checks if date has been shifted by daylight savings time.
 */

"use strict";

const { isDateOrNumber, isNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 * @param {Date|Number} date
 * @summary returns a boolean value depending on whether
 * specified date has been shifted to a Daylight Savings Time.
 */
function isDST(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");
  if (!validateDate(date)) return new RangeError("Invalid Date");
  const baseDate = isNumber(date) ? new Date(date) : date;
  // all these func is doing is testing for Daylight | Summer is the timezone name of a date
  // since DST is inconsistent in many countries
  const dst = /Summer|Daylight/g.test(baseDate.toString());
  return dst;
}
module.exports = isDST;
