/* eslint-disable no-nested-ternary */
/**
 * @author Simeon Akpanudo
 * @fileoverview Handles date manipulation and parsing
 */

"use strict";

const {
  isNumber,
  isString,
  validateISO,
  isDate,
  isGermane,
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const parseISO = require("../utils/parsers/parseISO");
const timestampToDate = require("../utils/evaluations/timestampToDate");
const getMonthAndWkDName = require("../utils/evaluations/get_month_weekday_name");
const getTimeZoneOffset = require("../utils/evaluations/get_timezone_offset");

const padInt = require("../utils/evaluations/padInt");

/**
 *
 * @param {String|Number|Date} value
 * @param {String} tz
 * @private
 */
function parseGermaneDate(value = Date.now(), tz) {
  if (!isNumber(value) && !isString(value) && !validateDate(value)) return new TypeError("Invalid Date");

  if (!isString(tz) && tz !== undefined) return new TypeError("Invalid time zone");
  let unixTime;
  let ISO;

  if (isString(value)) {
    ISO = parseISO(value);
    if (ISO instanceof RangeError) return ISO;
    unixTime = ISO;
    // return ISO;
  }
  if (isNumber(value)) {
    unixTime = value;
  }

  if (isDate(value)) {
    return parseGermaneDate(value.getTime(), tz);
  }
  if (isGermane(value)) {
    return parseGermaneDate(value.getTime(), tz);
  }

  const timezone = getTimeZoneOffset(isString(tz) ? tz.trim() : tz, unixTime);

  if (timezone instanceof RangeError) {
    return timezone;
  }

  // ISO formats with a suffix of Z is assumed to be UTC
  // ISO formats without the suffix Z is assumed to be a local time
  // ISO formats with date only is assumed to be UTC.
  // All timestamp are assumed to be in UTC.
  // Returns all rfc5822 strings as a local time.
  const posix = isString(value)
    ? /Z$/i.test(value)
      || /[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value)
      || validateISO(value).nonExpandedOrBasic
      ? unixTime + timezone.offsetInMinutes * 60 * 1000
      : tz !== undefined
        ? unixTime + timezone.offsetInMinutes * 60 * 1000
        : unixTime
    : unixTime + timezone.offsetInMinutes * 60 * 1000;

  const values = timestampToDate(posix);

  const utcTime = isString(value)
    ? /Z$/i.test(value)
      || /[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value)
      || /(?:[+|-][0-9]{4}|[+|-][0-9]{2}:[0-9]{2})/.test(value)
      || validateISO(value).nonExpandedOrBasic
      ? ISO
      : ISO - timezone.offsetInMinutes * 60 * 1000
    : unixTime;
  const {
    year: utcyear,
    month: utcmonth,
    day: utcday,
    hour: utchour,
    minute: utcminute,
    second: utcsecond,
    ms: utcms,
    dayOfWeek: utcDayOfWeek,
  } = timestampToDate(utcTime);
  const utcISO = `${padInt(utcyear, "padStart", 4, "0")}-${padInt(
    utcmonth + 1,
    "padStart",
    2,
    "0",
  )}-${padInt(utcday, "padStart", 2, "0")}T${padInt(utchour, "padStart", 2, "0")}:${padInt(
    utcminute,
    "padStart",
    2,
    "0",
  )}:${padInt(utcsecond, "padStart", 2, "0")}.${padInt(utcms, "padEnd", 3, "0")}Z`;
  const {
    dayName, dayNameShort, monthNameShort, monthName,
  } = getMonthAndWkDName(
    values.month,
    values.dayOfWeek,
  );
  const dateString = `${dayNameShort} ${monthNameShort} ${padInt(
    values.day,
    "padStart",
    2,
    "0",
  )} ${padInt(values.year, "padStart", 4, "0")} ${padInt(values.hour, "padStart", 2, "0")}:${padInt(
    values.minute,
    "padStart",
    2,
    "0",
  )}:${padInt(values.second, "padStart", 2, "0")} UTC${timezone.utcoffset} (${timezone.tzname})`;

  /**
   * Returns the weeks' ordinal.
   */
  const getWeek = () => values.week;
  /**
   * Returns the time value in milliseconds (including its timezone)
   */
  const getLocalTime = () => posix;
  /**
   * Returns the ordinal of given date in year
   */
  const getOrdinal = () => values.ordinal;
  /**
   * Returns the timezone name
   */
  const getTimezoneName = () => timezone.tzname;
  /**
   * Returns a string representing a utc offset
   */
  const getUTCOffset = () => timezone.utcoffset;
  /**
   * Returns month's name.
   */
  const getMonthName = () => monthName;
  /**
   * Returns the day of week (e.g Monday)
   */
  const getWeekDay = () => dayName;

  /**
   * Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   */
  const valueOf = () => utcTime;

  const self = {
    name: "Germane",
    getLocalTime,
    getFullYear: () => values.year,
    getMonth: () => values.month,
    getDate: () => values.day,
    getHours: () => values.hour,
    getMinutes: () => values.minute,
    getSeconds: () => values.second,
    getMilliseconds: () => values.ms,
    getDay: () => values.dayOfWeek % 7,
    getWeek,
    getOrdinal,
    getTimezoneOffset: () => timezone.offsetInMinutes,
    getTimezoneName,
    getUTCOffset,
    getMonthName,
    getWeekDay,
    getTime: () => utcTime,
    toISOString: () => utcISO,
    toString: () => dateString,
    valueOf,
    getUTCFullYear: () => utcyear,
    getUTCMonth: () => utcmonth,
    getUTCDate: () => utcday,
    getUTCHours: () => utchour,
    getUTCMinutes: () => utcminute,
    getUTCSeconds: () => utcsecond,
    getUTCMilliseconds: () => utcms,
    getUTCDay: () => utcDayOfWeek % 7,
  };
  return self;
}

module.exports = parseGermaneDate;
