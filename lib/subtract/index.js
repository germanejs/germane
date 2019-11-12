/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview functions manipulates dates by subtracting from it.
 */

"use strict";

const { isObject, isDateOrNumber, isNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const hasProp = require("../_util/validations/hasProp");
const manipulate = require("../_util/evaluations/manipulate");

/**
 *
 * @param {Date | TimeStamp} date Date Object | Timestamp to be manipulated
 * @param {Object} options units of time to be subtracted to the date
 * ```js
 * subtract(new Date("1945-02-18 15:12:34.900Z"),{
 * years: 120,
 * months: 7,
 * days: 45,
 * hours: 5,
 * minute: 14,
 * seconds: 89,
 * ms: 670
 * }) //=> 1824-06-04T10:11:05.230Z
 * ```
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
  months = manipulate(
    {
      year: minusDays.getUTCFullYear(),
      month: minusDays.getUTCMonth() + 1,
      date: minusDays.getUTCDate(),
      hour: minusDays.getUTCHours(),
      minute: minusDays.getUTCMinutes(),
      second: minusDays.getUTCSeconds(),
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
