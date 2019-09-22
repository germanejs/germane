/**
 * @author Simeon Akpanudo
 * @fileoverview Function returns values of starting date as to current date
 */

"use strict";

const { findQuarter, findQuarterEnd } = require("./findQuarter");
const evalTimestamp = require("./timestamp_evaluation");
const difference = require("./difference");
const dayOfYear = require("./dayOfYear");
const epoch = require("./epoch");

/**
 * @param {Date} date Date object.
 */
function startOfQuarterHandler(date) {
  const year = date.getUTCFullYear();
  const dInY = dayOfYear(year, date.getUTCMonth() + 1, date.getUTCDate());

  const startOfGivenYear = epoch(year, 1, 1, 0, 0, 0, 0, 0);

  const { quarter } = findQuarter(dInY, year);

  const prevQuarterEnd = findQuarterEnd(quarter - 1, year);
  const newDate = startOfGivenYear + prevQuarterEnd * 24 * 1000 * 3600;
  const nowTillQEnd = date.getTime() - newDate;

  return {
    ...evalTimestamp(nowTillQEnd),
    ...difference(date, newDate),
  };
}
function startOfMonthHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;

  const newDate = epoch(year, month, 1, 0, 0, 0, 0, 0);

  const nowTillQEnd = date.getTime() - newDate;
  return {
    ...evalTimestamp(nowTillQEnd),
    ...difference(date, newDate),
  };
}
function startOfDayHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;

  const newDate = epoch(year, month, date.getUTCDate(), 0, 0, 0, 0, 0);
  const timestamp = date.getTime() - newDate;
  return { ...evalTimestamp(timestamp) };
}
function startOfHourHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const hour = date.getUTCHours();

  const newDate = epoch(year, month, date.getUTCDate(), hour, 0, 0, 0, 0);
  const timestamp = date.getTime() - newDate;
  return { ...evalTimestamp(timestamp) };
}
function startOfWeekHandler(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDay();

  const nd = (0 - day) * 1000 * 3600 * 24;

  const newDate = epoch(year, month, date.getUTCDate(), 0, 0, 0, 0, 0) + nd;
  const timestamp = date.getTime() - newDate;

  return {
    ...evalTimestamp(timestamp),
    ...difference(date, newDate),
  };
}
function startOfYearHandler(date) {
  const year = date.getUTCFullYear();
  const newDate = epoch(year, 1, 1, 0, 0, 0, 0, 0);
  const nowTillQEnd = date.getTime() - newDate;
  return {
    ...evalTimestamp(nowTillQEnd),
    ...difference(date, newDate),
  };
}

module.exports = {
  startOfDayHandler,
  startOfMonthHandler,
  startOfWeekHandler,
  startOfQuarterHandler,
  startOfYearHandler,
  startOfHourHandler,
};
