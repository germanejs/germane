/**
 * @fileoverview Main Formatter function
 * @author Simeon Akpanudo
 */

"use strict";

const parseDateTime = require("../utils/formatDateTime");
const { replacer } = require("../utils/replacers/replacer");

const {
  isDateOrNumber,
  isString,
  isGermane,
  isObject,
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number|typeof germane} date A date object  {new Date()
 * or timestamp {eg from Date.now()}}, which will be formatted with  format string.
 * @param {String} formatString A string which will be used to format the date object.
 * @name format
 * @description These function format a date object with format string specified as an argument,
 * and returns a correctly formatted human readable date.
 * @example format(new Date(Date.now()), "Todays' date is dddd, MMMM DD, YYYY");
 * @throws TypeError (if argument pos 1 is not a Date type) || (if argument pos 2 is not a string)
 */
function format(date, formatString) {
  if (!isDateOrNumber(date) && !isObject(date)) return new TypeError("Invalid Date");

  if (!isString(formatString)) return new TypeError(`Invalid format string: ${formatString}`);

  if (!validateDate(date) && !isGermane(date)) return new RangeError("Invalid Date");

  const datetime = parseDateTime(date);
  const dateObject = datetime.parsedDate;
  const timeObject = datetime.time;
  const allFormat = {
    M: dateObject.month.decimal.nonZeroPadded,
    MM: dateObject.month.decimal.zeroPadded,
    MMM: dateObject.month.short,
    MMMM: dateObject.month.long,
    Mo: dateObject.month.ordinal,
    Q: dateObject.quarter.decimal.zeroPadded,
    Qo: dateObject.quarter.ordinal,
    D: dateObject.dayOfMonth.decimal.nonZeroPadded,
    DD: dateObject.dayOfMonth.decimal.zeroPadded,
    Do: dateObject.dayOfMonth.ordinal,
    DDD: dateObject.dayOfYear.decimal.nonZeroPadded,
    DDDD: dateObject.dayOfYear.decimal.zeroPadded,
    DDDo: dateObject.dayOfYear.ordinal,
    d: dateObject.dayOfWeek.decimal.nonZeroPadded,
    dd: dateObject.dayOfWeek.two,
    do: dateObject.dayOfWeek.ordinal,
    ddd: dateObject.dayOfWeek.short,
    dddd: dateObject.dayOfWeek.long,
    YY: dateObject.year.withoutCentury,
    YYYY: dateObject.year.withCentury,
    W: dateObject.week.decimal.nonZeroPadded,
    WW: dateObject.week.decimal.zeroPadded,
    Wo: dateObject.week.ordinal,
    A: timeObject.meridiem.big,
    a: timeObject.meridiem.small,
    aa: timeObject.meridiem.dotted,
    H: timeObject.hour24.decimal.nonZeroPadded,
    HH: timeObject.hour24.decimal.zeroPadded,
    h: timeObject.hour12.decimal.nonZeroPadded,
    hh: timeObject.hour12.decimal.zeroPadded,
    m: timeObject.minute.decimal.nonZeroPadded,
    mm: timeObject.minute.decimal.zeroPadded,
    s: timeObject.seconds.decimal.nonZeroPadded,
    ss: timeObject.seconds.decimal.zeroPadded,
    SSS: timeObject.milliseconds.decimal.zeroPadded,
    Z: timeObject.tzOffset.normal,
    ZZ: timeObject.tzOffset.colonized,
    z: timeObject.tzLong,
    zz: timeObject.tzShort,
    x: timeObject.timestamp.milliseconds,
    X: timeObject.timestamp.seconds,
  };

  const matcher = /\bYYYY\b|\bYY\b|\bM\b|\bMM\b|\bMMM\b|\bMMMM\b|\bMo\b|\bD\b|\bDD\b|\bDDD\b|\bDDDD\b|\bDDDo\b|\bDo\b|\bQ\b|\bQo\b|\bd\b|\bdd\b|\bddd\b|\bdddd\b|\bdo\b|\bA\b|\ba\b|\baa\b|\bH\b|\bHH\b|\bh\b|\bhh\b|\bm\b|\bmm\b|\bSSS\b|\bss\b|\bs\b|\bZ\b|\bZZ\b|\bz\b|\bzz\b|\bX\b|\bx\b|\bW\b|\bWW\b|\bWo\b/g;

  const formatReturn = replacer(formatString, allFormat, matcher);
  return formatReturn;
}

module.exports = format;
