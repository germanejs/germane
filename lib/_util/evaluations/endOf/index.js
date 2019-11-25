/**
 * @author Simeon Akpanudo
 */

"use strict";

const { getDaysInYear } = require("../daysInYear");
const dayOfYear = require("../dayOfYear");
const { findQuarterEnd, findQuarter } = require("../findQuarter");
const germane = require("../../../germane");
const { isGermane } = require("../../validations/validatePropTypes");
const epoch = require("../epoch");
/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfQuarterHandler(date) {
  const year = date.getFullYear();
  const dInY = dayOfYear(year, date.getMonth() + 1, date.getDate());
  const { quarter } = findQuarter(dInY, year);
  const endOfPrevYear = epoch(year - 1, 12, 31, 23, 59, 59, 999);
  // handles issues with going from a non-DST to a DST or vice-versa.
  const quarterEnd = findQuarterEnd(quarter, year);
  const newDate = germane(endOfPrevYear + quarterEnd * 86400000, date.timezone);
  const handleDaylight = newDate.getTime() + newDate.getTimezoneOffset() * 60 * 1000;
  return isGermane(date) ? germane(handleDaylight, date.timezone) : new Date(handleDaylight);
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfMonthHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const day = getDaysInYear(year)[month];

  // handles issues with going from a non-DST to a DST or vice-versa.
  const newDate = germane(epoch(year, month, day, 23, 59, 59, 999), date.timezone);
  const handleDaylight = newDate.getTime() + newDate.getTimezoneOffset() * 60 * 1000;
  return isGermane(date) ? germane(handleDaylight, date.timezone) : new Date(handleDaylight);
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfDayHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newDate = epoch(year, month, day, 23, 59, 59, 999, date.getTimezoneOffset());
  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfHourHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  const day = date.getDate();
  const newDate = epoch(year, month, day, hour, 59, 59, 999, date.getTimezoneOffset());
  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfMinuteHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  const day = date.getDate();
  // eslint-disable-next-line max-len
  const newDate = epoch(
    year,
    month,
    day,
    hour,
    date.getMinutes(),
    59,
    999,
    date.getTimezoneOffset(),
  );
  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfWeekHandler(date, options = { weekStartsOn: 0 }) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  const dOfM = (6 - day + options.weekStartsOn) * 24 * 3600 * 1000;
  // prettier-ignore
  // eslint-disable-next-line max-len
  const timestamp = epoch(year, month, date.getDate(), 23, 59, 59, 999, date.getTimezoneOffset());
  const newDate = timestamp + dOfM;

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfYearHandler(date) {
  const year = date.getFullYear();
  // handles issues with going from a non-DST to a DST or vice-versa.
  const newDate = germane([year, 11, 31, 23, 59, 59, 999], date.timezone);
  const value = newDate.values();
  const end = epoch(...[value[0], value[1] + 1, ...value.slice(2, 8)]);
  return isGermane(date) ? germane(end, newDate.timezone) : new Date(end);
}

function endOfDecadeHandler(date) {
  const year = date.getFullYear();
  const endOf = 9 - ((year % 100) % 10);
  // handles issues with going from a non-DST to a DST or vice-versa.
  const newDate = germane([year + endOf, 11, 31, 23, 59, 59, 999], date.timezone);
  const value = newDate.values();
  const end = epoch(...[value[0], value[1] + 1, ...value.slice(2, 8)]);
  return isGermane(date) ? germane(end, newDate.timezone) : new Date(end);
}

module.exports = {
  endOfDayHandler,
  endOfHourHandler,
  endOfMinuteHandler,
  endOfMonthHandler,
  endOfQuarterHandler,
  endOfWeekHandler,
  endOfYearHandler,
  endOfDecadeHandler,
};
