/**
 * @author Simeon Akpanudo
 * @fileoverview functions within manipulates dates by subtracting from it.
 */

"use strict";

const { isObject, isDateOrNumber, isNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const hasProp = require("../utils/validations/hasProp");
const { addOrSubMonths } = require("../utils/evaluations/addOrSubMonths");

/**
 *
 * @param {Date | TimeStamp} date Date Object | Timestamp to be manipulated
 * @param {Object{}} options units of time to be subtracted to the date
 */
function subtract(
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
    years: options.years || 0,
    months: options.months || 0,
    days: options.days || 0,
    hours: options.hours || 0,
    seconds: options.seconds || 0,
    minutes: options.minutes || 0,
    ms: options.ms || 0,
  };
  let newDate = typeof date === "number" ? new Date(date) : date;

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

  // Smaller values are subtracted first

  const minusDays = new Date(newDate.getTime() - days);
  // months subtracted
  months = addOrSubMonths(
    {
      year: minusDays.getFullYear(),
      month: minusDays.getMonth() + 1,
      date: minusDays.getDate(),
      hour: minusDays.getHours(),
      minute: minusDays.getMinutes(),
      second: minusDays.getSeconds(),
    },
    YMD.months + YMD.years * 12,
    "sub",
  );
  // years subtracted
  const minusMonths = minusDays - months;
  const minusYears = minusMonths;
  const minusTime = minusYears - YMD.ms - seconds - minutes - hours;
  const fn = new Date(minusTime);
  return fn;
}

module.exports = subtract;
