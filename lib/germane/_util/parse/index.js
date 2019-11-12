/* eslint-disable no-nested-ternary */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview Handles date manipulation and parsing
 */

"use strict";

const {
  isNumber,
  isString,
  validateISO,
  isDate,
  isGermane,
  isObject,
  isArray,
  isLocale,
} = require("../../../_util/validations/validatePropTypes");
const validateDate = require("../../../_util/validations/validateDate");
const parseISO = require("../../../_util/parsers/parseISO");
const fromTimestamp = require("../../../_util/evaluations/fromTimestamp");
const getTimeZoneOffset = require("../../../_util/evaluations/timezoneOffset");
const padInt = require("../../../_util/evaluations/padInt");
const fromObject = require("../fromObject");
const fromArray = require("../fromArray");

/**
 *
 * @param {String|Number|Date|Array|Object} value
 * @param {String} tz
 * @param {Object} locale
 * @private
 */
function parse(value = Date.now(), tz, options) {
  if (
    !isNumber(value)
    && !isString(value)
    && !validateDate(value)
    && !isObject(value)
    && !isArray(value)
  ) return new TypeError("Invalid Date");

  if (!isString(tz) && tz !== undefined) return new TypeError("Invalid time zone");
  if (!isLocale(options)) return new TypeError("Invalid Locale");
  let unixTime;
  let ISO;

  if (isString(value)) {
    ISO = parseISO(value);
    if (ISO instanceof RangeError) return new RangeError(ISO.message);
    unixTime = ISO;
    // return ISO;
  }
  if (isNumber(value)) {
    unixTime = value;
  }

  if (isObject(value) && !isGermane(value)) {
    const fromObj = fromObject(value);
    if (fromObj instanceof TypeError) return new TypeError(fromObj.message);
    if (fromObj instanceof RangeError) return new RangeError(fromObj.message);
    unixTime = fromObj;
  }

  if (isArray(value)) {
    const fromArr = fromArray(value);
    if (fromArr instanceof TypeError) return new TypeError(fromArr.message);
    if (fromArr instanceof RangeError) return new RangeError(fromArr.message);
    unixTime = fromArr;
  }

  if (isDate(value)) {
    return parse(value.getTime(), tz, options);
  }
  if (isGermane(value)) {
    return parse(value.getTime(), tz, options);
  }

  const timezone = getTimeZoneOffset(isString(tz) ? tz.trim() : tz, unixTime);

  if (timezone instanceof RangeError) {
    return new RangeError(`Invalid time zone specified: ${tz}`);
  }

  // ISO formats with a suffix of Z is assumed to be UTC
  // ISO formats without the suffix Z is assumed to be a local time
  // ISO formats with date only is assumed to be UTC.
  // All timestamp are assumed to be in UTC.
  // Returns all rfc5822 strings as a local time.
  // Dates from Array and Objects are implemented as local time.
  const posix = isString(value)
    ? /Z$/i.test(value) || validateISO(value).nonExpandedOrBasic
      ? unixTime + timezone.offset * 60 * 1000
      : unixTime
    : isArray(value)
      ? unixTime
      : isObject(value) && !isGermane(value)
        ? unixTime
        : unixTime + timezone.offset * 60 * 1000;

  const values = fromTimestamp(posix);

  const utcTime = isString(value)
    ? /Z$/i.test(value)
      // expanded with offset or rfcs;
      || /(?:[+|-][0-9]{4}|[+|-][0-9]{2}:[0-9]{2})/.test(value)
      || validateISO(value).nonExpandedOrBasic
      ? ISO
      : ISO - timezone.offset * 60 * 1000
    : isArray(value)
      ? unixTime - timezone.offset * 60 * 1000
      : isObject(value) && !isGermane(value)
        ? unixTime - timezone.offset * 60 * 1000
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
  } = fromTimestamp(utcTime);
  const utcISO = `${
    utcyear > 9999
      ? "+" + padInt(utcyear, "padStart", ("" + utcyear).length + 1, "0")
      : padInt(utcyear, "padStart", 4, "0")
  }-${padInt(utcmonth + 1, "padStart", 2, "0")}-${padInt(utcday, "padStart", 2, "0")}T${padInt(
    utchour,
    "padStart",
    2,
    "0",
  )}:${padInt(utcminute, "padStart", 2, "0")}:${padInt(utcsecond, "padStart", 2, "0")}.${padInt(
    utcms,
    "padEnd",
    3,
    "0",
  )}Z`;
  const locale = options.locale;
  const monthNameShort = locale.localise("month").abbreviated[values.month];
  const dayNameShort = locale.localise("day").abbreviated[values.dayOfWeek % 7];
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
   * @returns {number}
   */
  const getWeek = () => values.week;
  /**
   * Returns the time value in milliseconds (including its timezone offset)
   * @returns {number}
   */
  const getLocalTime = () => posix;
  /**
   * Returns the ordinal of given date in year
   * @returns {number}
   */
  const getOrdinal = () => values.ordinal;
  /**
   * Returns the timezone name
   * @returns {string}
   */
  const getTimezoneName = () => timezone.tzname;
  /**
   * Returns a string representing a utc offset
   * @returns {string}
   */
  const getUTCOffset = () => timezone.utcoffset;
  /**
   * Returns locale month's name.
   * @returns {string}
   */
  const getMonthName = () => locale.localise("month").wide[values.month];
  /**
   * Returns the locale day of week's name
   * @returns {string}
   */
  const getWeekDay = () => locale.localise("day").wide[values.dayOfWeek];

  /**
   * Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   * @returns {number}
   */
  const valueOf = () => utcTime;
  /**
   * Returns a boolean, depending on whether the date is parsed as UTC or as a Local time.
   * @returns {boolean}
   */
  const isUTC = () => /Z$/i.test(value) || validateISO(value).nonExpandedOrBasic || isNumber(value);

  const self = {
    name: "Germane",
    locale: options.locale.code,
    timezone: tz,
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
    getUTCFullYear: () => utcyear,
    getUTCMonth: () => utcmonth,
    getUTCDate: () => utcday,
    getUTCHours: () => utchour,
    getUTCMinutes: () => utcminute,
    getUTCSeconds: () => utcsecond,
    getUTCMilliseconds: () => utcms,
    getUTCDay: () => utcDayOfWeek % 7,
    isUTC,
    toISOString: () => utcISO,
    toString: () => dateString,
    valueOf,
  };
  return self;
}

module.exports = parse;
