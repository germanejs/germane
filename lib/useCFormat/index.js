/**
 * @author Simeon Akpanudo
 * @fileoverview function in these modules uses the primitive C datetime formatting tokens also used in python and other C inspired languages to parse/format date and time.
 */

"use strict";

const { replacer } = require("../utils/replacers/replacer");
const parseDateTime = require("../utils/formatDateTime");
const {
  isDateOrNumber,
  isString,
  isObject,
  isGermane,
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number|typeof germane} date Date type
 * or Number or a germane object.
 * @param {string} formatString Format string
 * @name useCFormat
 * @returns {String} datetime correct formatted string using the C format
 */
function useCFormat(date, formatString = "%A, %B %d, %Y") {
  if (!isDateOrNumber(date) && !isObject(date)) return new TypeError("Invalid Date");

  if (!isString(formatString)) return new TypeError(`Invalid format string: ${formatString}`);

  if (!validateDate(date) && !isGermane(date)) return new RangeError("Invalid Date");

  const datetime = parseDateTime(date);
  const dateObject = datetime.parsedDate;
  const timeObject = datetime.time;
  const allFormat = {
    "%a": dateObject.dayOfWeek.short,
    "%A": dateObject.dayOfWeek.long,
    "%w": dateObject.dayOfWeek.decimal.zeroPadded,
    "%ww": dateObject.dayOfWeek.decimal.nonZeroPadded,
    "%wo": dateObject.dayOfWeek.ordinal,
    "%d": dateObject.dayOfMonth.decimal.zeroPadded,
    "%do": dateObject.dayOfMonth.ordinal,
    "%b": dateObject.month.short,
    "%B": dateObject.month.long,
    "%m": dateObject.month.decimal.zeroPadded,
    "%mo": dateObject.month.ordinal,
    "%y": dateObject.year.withoutCentury,
    "%Y": dateObject.year.withCentury,
    "%Z": timeObject.tzShort,
    "%z": timeObject.tzOffset.normal,
    "%M": timeObject.minute.decimal.zeroPadded,
    "%S": timeObject.seconds.decimal.zeroPadded,
    "%H": timeObject.hour24.decimal.zeroPadded,
    "%I": timeObject.hour12.decimal.zeroPadded,
    "%p": timeObject.meridiem.big,
    "%j": dateObject.dayOfYear.decimal.zeroPadded,
    "%c": datetime.fullDateAndTime,
    "%f": timeObject.milliseconds.decimal.zeroPadded,
    "%W": dateObject.week.decimal.nonZeroPadded,
    "%U": dateObject.week.decimal.zeroPadded,
    "%x": dateObject.apprDate,
    "%X": timeObject.apprTime,
    "%Q": dateObject.quarter.decimal.zeroPadded,
    "%Qo": dateObject.quarter.ordinal,
  };
  const matcher = /(?<![a-zA-Z0-9%])%[a|A|w|d|b|B|m|y|Y|z|Z|M|S|H|I|p|j|c|f|W|U|x|X|Q](?![a-zA-Z0-9%])|(?<![a-zA-Z0-9%])%do|%wo|%ww|%mo|%Qo(?![a-zA-Z0-9%])/g;

  const formatReturn = replacer(formatString, allFormat, matcher);

  return formatReturn;
}

module.exports = useCFormat;
