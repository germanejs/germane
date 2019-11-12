/**
 * @author Simeon Akpanudo
 * @fileoverview Function returns values of starting date as to current date
 */

"use strict";

const { findQuarter, findQuarterEnd } = require("./../findQuarter");
const dayOfYear = require("../dayOfYear");
const germane = require("../../../germane");
const { isGermane } = require("../../validations/validatePropTypes");
const epoch = require("../epoch");
/**
 * @param {Date} date Date object.
 */
function startOfQuarterHandler(date) {
  const year = date.getFullYear();
  const dInY = dayOfYear(year, date.getMonth() + 1, date.getDate());

  const startOfGivenYear = epoch(year, 1, 1, 0, 0, 0, 0, date.getTimezoneOffset());

  const { quarter } = findQuarter(dInY, year);

  const prevQuarterEnd = findQuarterEnd(quarter - 1, year);
  const newDate = startOfGivenYear + prevQuarterEnd * 86400000;

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
function startOfMonthHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const newDate = epoch(year, month, 1, 0, 0, 0, 0, date.getTimezoneOffset());

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
function startOfDayHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const newDate = epoch(year, month, date.getDate(), 0, 0, 0, 0, date.getTimezoneOffset());

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
function startOfHourHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hour = date.getHours();

  const newDate = epoch(
    year,
    month,
    date.getDate(),
    hour,
    0,
    0,
    0,
    Math.trunc(date.getTimezoneOffset() / 60) * 60,
  );

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
function startOfMinuteHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hour = date.getHours();

  const newDate = epoch(
    year,
    month,
    date.getDate(),
    hour,
    date.getMinutes(),
    0,
    0,
    date.getTimezoneOffset(),
  );

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
function startOfWeekHandler(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  const nd = (0 - day) * 86400000;

  const newDate = epoch(year, month, date.getDate(), 0, 0, 0, 0, date.getTimezoneOffset()) + nd;

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}
function startOfYearHandler(date) {
  const year = date.getFullYear();
  const newDate = epoch(year, 1, 1, 0, 0, 0, 0, date.getTimezoneOffset());

  return isGermane(date) ? germane(newDate, date.timezone) : new Date(newDate);
}

module.exports = {
  startOfDayHandler,
  startOfMonthHandler,
  startOfWeekHandler,
  startOfQuarterHandler,
  startOfYearHandler,
  startOfHourHandler,
  startOfMinuteHandler,
};
