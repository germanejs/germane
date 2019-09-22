/**
 * @author Simeon Akpanudo
 * @fileoverview Main date adding function.
 */

"use strict";

const { isObject, isDateOrNumber, isNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const hasProp = require("../utils/validations/hasProp");
const { addOrSubMonths } = require("../utils/evaluations/addOrSubMonths");

/**
 *
 * @param {Date | TimeStamp} date Date Object | Timestamp to be manipulated
 * @param {Object{}} options units of time to be added to the date
 */
function add(
  date,
  options = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  },
) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");
  if (!isObject(options)) return new TypeError("Invalid Options, Expected options parameter to be an object");
  if (
    (hasProp(options, "years") && !isNumber(options.years))
    || (hasProp(options, "months") && !isNumber(options.months))
    || ((hasProp(options, "days") && !isNumber(options.days))
      || (hasProp(options, "hours") && !isNumber(options.hours))
      || (hasProp(options, "minutes") && !isNumber(options.minutes))
      || (hasProp(options, "seconds") && !isNumber(options.seconds))
      || (hasProp(options, "ms") && !isNumber(options.ms)))
  ) return new RangeError("Invalid Options property, Expected a Number");
  if (!validateDate(date)) return new RangeError("Invalid Date");

  const absOptions = {
    years: Math.abs(options.years) || 0,
    months: Math.abs(options.months) || 0,
    days: Math.abs(options.days) || 0,
    hours: Math.abs(options.hours) || 0,
    seconds: Math.abs(options.seconds) || 0,
    minutes: Math.abs(options.minutes) || 0,
    ms: Math.abs(options.ms) || 0,
  };
  let newDate = new Date(date);

  let YMD = { ...absOptions };
  let days;
  let months;
  let hours;
  let minutes;
  let seconds;
  days = YMD.days * 24 * 1000 * 3600;
  hours = YMD.hours * 1000 * 3600;
  minutes = YMD.minutes * 60 * 1000;
  seconds = YMD.seconds * 1000;

  const addDays = new Date(newDate.getTime() + YMD.ms + seconds + minutes + hours);

  months = addOrSubMonths(
    {
      year: addDays.getUTCFullYear(),
      month: addDays.getUTCMonth() + 1,
      date: addDays.getUTCDate(),
      hour: addDays.getUTCHours(),
      minute: addDays.getUTCMinutes(),
      second: addDays.getUTCSeconds(),
    },
    YMD.months + YMD.years * 12,
    "add",
  );

  const totals = addDays.getTime() + months + days;

  const fn = new Date(totals);
  return fn;
}

module.exports = add;
