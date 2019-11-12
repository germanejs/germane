/**
 * @author Simeon Akpanudo
 * @fileoverview Contains getWorkdays function..
 * a function that returns an array of workdays in specified range.
 */

"use strict";

const { absFloor } = require("../_util/evaluations/roundingMethods");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const replaceUnit = require("../_util/evaluations/replaceUnit");
/**
 *
 * @param {Date|Number} current Date || Timestamp to specify the current date
 * @param {Date|Number} relative Date || Timestamp to specify the relative date

 * @returns {Number[]} Returns an array of working days ranging from current date to
 end date in timestamps, with the current date and end date included
 * @example const workingDays = getWorkdays(Date.now(), new Date("2020 12 31"), a => new Date(a));
 */
function getBusinessDays(current, relative, options = { weekStartsOn: 0 }) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const currentDate = typeof current === "number" ? new Date(current) : current;
  const relativeDate = typeof relative === "number" ? new Date(relative) : relative;

  const difference = new Date(
    replaceUnit(currentDate, {
      hour: 23,
      minute: 59,
      second: 59,
      ms: 999,
    }),
  ).getTime()
    - new Date(
      replaceUnit(relativeDate, {
        hour: 23,
        minute: 59,
        second: 59,
        ms: 999,
      }),
    ).getTime();

  const timestamp = absFloor(difference / 86400000);

  const n = new Date(
    replaceUnit(currentDate, {
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  );

  function mapTo(value, index) {
    // if (index === 0) return currentDate.getTime();

    // if (index === array.length - 1) return relativeDate.getTime();

    const day = new Date(
      relativeDate.getTime() >= currentDate.getTime()
        ? n.getTime() + index * 86400000
        : n.getTime() - index * 86400000,
    );
    return day.getUTCDay() % 6 !== 0 ? day.getTime() : null;
  }

  function filterFrom(value) {
    return value !== null;
  }
  const date = Array(timestamp + 1)
    .fill(0)
    .map(mapTo)
    .filter(filterFrom);
  return date;
}

module.exports = getBusinessDays;
