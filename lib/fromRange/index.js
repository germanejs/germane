/**
 * @author Simeon Akpanudo
 * @fileoverview Returns an array of date from the given range of dates.
 */

"use strict";

const { absFloor } = require("../_util/evaluations/roundingMethods");
const replaceUnit = require("../_util/evaluations/replaceUnit");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date} start starting range
 * @param {Date} end ending range;
 * @returns {Date[]} returns an array of Date
 * fromRange returns an array of timestamps from the starting day to the end date,
 * with a maximum range of a millenium
 */
function fromRange(start, end) {
  if (!isDateOrNumber(start) || !isDateOrNumber(end)) return new TypeError("Invalid Date");

  if (!validateDate(start) || !validateDate(end)) return new RangeError("Invalid Date");
  const startDate = typeof start === "number" ? new Date(start) : start;
  const endDate = typeof end === "number" ? new Date(end) : end;

  const difference = new Date(
    replaceUnit(endDate, {
      hour: 23,
      minute: 59,
      second: 59,
      ms: 999,
    }),
  ).getTime()
    - new Date(
      replaceUnit(startDate, {
        hour: 23,
        minute: 59,
        second: 59,
        ms: 999,
      }),
    ).getTime();

  const timestamp = absFloor(difference / 86400000);

  const n = new Date(
    replaceUnit(startDate, {
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  );
  function mapTo(value, index, array) {
    if (index === 0) return startDate.getTime();

    if (index === array.length - 1) return endDate.getTime();

    return difference >= 0 ? n.getTime() + index * 86400000 : n.getTime() - index * 86400000;
  }
  // Maximum days = 364878
  return Array(timestamp + 1 > 364878 ? 364878 : timestamp + 1)
    .fill(0)
    .map(mapTo);
}

module.exports = fromRange;
