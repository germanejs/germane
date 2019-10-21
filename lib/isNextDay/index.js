/**
 * @author Simeon Akpanudo
 * @fileoverview Checks if date specified in function parameter 1 is the next day of parameter 2.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const replaceUnits = require("../utils/evaluations/replaceUnit");
const germane = require("../germane");
/**
 * @param {Date|Number} current Current Date.
 * @param {Date|Number} relative Relative Date.
 * @name isNextDay
 * @returns {Boolean} returns truthy or falsy values (true || false).
 * depending on whether the second day specified is after the first.
 */
function isNextDay(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");
  const cur = Object.prototype.toString.call(current) === "[object Date]"
    ? new Date(current)
    : germane(current);
  const rel = Object.prototype.toString.call(current) === "[object Date]"
    ? new Date(relative)
    : germane(relative);

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
  ).getTime() - 86400000;
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

  // FIXME:  return cur + 1 * 86400000 === rel.
  // TODO: Check if adding time to the day will cause any side effect.
}

module.exports = isNextDay;
