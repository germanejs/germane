/**
 * @author Simeon Akpanudo
 */

"use strict";

const evalTimestamp = require("./timestamp_evaluation");
const { getDaysInYear } = require("./getFullYear");
const dayOfYear = require("./dayOfYear");
const { findQuarterEnd, findQuarter } = require("./findQuarter");
const difference = require("./difference");
const epoch = require("./epoch");
/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfQuarterHandler(date) {
  const year = date.getUTCFullYear();
  const dInY = dayOfYear(year, date.getUTCMonth() + 1, date.getUTCDate());

  const { quarter } = findQuarter(dInY, year);
  const endOfPrevYear = epoch(year - 1, 12, 31, 23, 59, 59, 999, 0);
  const quarterEnd = findQuarterEnd(quarter, year);
  const newDate = endOfPrevYear + quarterEnd * 24 * 1000 * 3600;

  const timestamp = newDate - date.getTime();
  return {
    ...evalTimestamp(timestamp),
    ...difference(epoch(year, date.getUTCMonth() + 1, date.getUTCDate()), newDate),
  };
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfMonthHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;

  const day = getDaysInYear(year)[month];
  const newDate = epoch(year, month, day, 23, 59, 59, 999, 0);

  const timestamp = newDate - date.getTime();
  return {
    ...evalTimestamp(timestamp),
    ...difference(epoch(year, month, date.getUTCDate()), epoch(year, month, day)),
  };
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfDayHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const newDate = epoch(year, month, day, 23, 59, 59, 999, 0);
  const timestamp = newDate - date.getTime();
  return { ...evalTimestamp(timestamp) };
}
/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfHourHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const hour = date.getUTCHours();
  const day = date.getUTCDate();
  const newDate = epoch(year, month, day, hour, 59, 59, 999, 0);

  const timestamp = newDate - date.getTime();
  return { ...evalTimestamp(timestamp) };
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfWeekHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDay();

  const dOfM = (6 - day) * 24 * 3600 * 1000;
  const newDate = epoch(year, month, date.getUTCDate(), 23, 59, 59, 999, 0);
  const timestamp = newDate + dOfM - date.getTime();
  return {
    ...evalTimestamp(timestamp),
    ...difference(
      epoch(year, month, date.getUTCDate()),
      epoch(year, month, date.getUTCDate()) + dOfM,
    ),
  };
}

/**
 *
 * @param {Date} date Date object or timestamp;
 */
function endOfYearHandler(date) {
  const year = date.getUTCFullYear();
  const newDate = epoch(year, 12, 31, 23, 59, 59, 999, 0);
  // console.log(newDate, date);
  const timestamp = newDate - date.getTime();
  return {
    ...evalTimestamp(timestamp),
    ...difference(epoch(year, date.getUTCMonth() + 1, date.getUTCDate()), epoch(year, 12, 31)),
  };
}

module.exports = {
  endOfDayHandler,
  endOfHourHandler,
  endOfMonthHandler,
  endOfQuarterHandler,
  endOfWeekHandler,
  endOfYearHandler,
};
