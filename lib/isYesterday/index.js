/**
 * @author Simeon Akpanudo
 * @fileoverview Checks if date specified in function parameter 1
 * is the previous day of parameter 2.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const replaceUnits = require("../_util/evaluations/replaceUnit");
const germane = require("../germane");
/**
 * @param {Date|Number} current Current Date.
 * @param {Date|Number} relative Relative Date.
 * @name isNextDay
 * @returns {Boolean} returns truthy or falsy values (true || false).
 * depending on whether the second day specified is after the first.
 */
function isYesterday(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");
  const cur = Object.prototype.toString.call(current) === "[object Date]"
    ? new Date(current)
    : germane(current, "UTC");
  const rel = Object.prototype.toString.call(relative) === "[object Date]"
    ? new Date(relative)
    : germane(relative, "UTC");

  const relDate = germane(
    replaceUnits(rel, {
      year: rel.getUTCFullYear(),
      month: rel.getUTCMonth() + 1,
      day: rel.getUTCDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime() + 86400000;

  const curDate = germane(
    replaceUnits(cur, {
      year: cur.getUTCFullYear(),
      month: cur.getUTCMonth() + 1,
      day: cur.getUTCDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime();
  return curDate === relDate;
}

module.exports = isYesterday;
