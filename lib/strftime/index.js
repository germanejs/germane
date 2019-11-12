/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview function formats dates using the strftime format codes
 */

"use strict";

const replacer = require("../_util/format/replacer");
const {
  isDateOrNumber,
  isString,
  isObject,
  isGermane,
  isLocale,
} = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const { regularPattern, extendedPattern } = require("./_util/regex");
const tokens = require("./_util/tokens");
const generateParseToken = require("./_util/generateParseToken");
const defaultLocale = require("../locale/en_US");
/**
 *
 * @param {Date|Number|typeof germane} date Date type
 * or Number or a germane object.
 * @param {string} formatString Format string
 * @summary formats dates using the primitive
 * C datetime formatting tokens also used in python
 * and other C inspired languages to parse/format date and time.
 * ```js
 * strftime(new Date("2019-11-11 12:34:13.900Z"), "%A, %B %d, %Y");
 * //=> "Monday, November 11, 2019";
 *  strftime(germane("2019-11-11 12:34:13.900Z", "Europe/Paris"),
 * "%A, %B %d, %Y %H:%M:%S %Z", { locale: fr });
 * //=> "lundi, novembre 11, 2019 13:34:13 UTC+0100";
 * ```
 * @returns {string|RangeError|TypeError} returns an error if arguments fails validation.
 */
function strftime(date, formatString = "%A, %B %d, %Y", options = { locale: defaultLocale }) {
  if (!isDateOrNumber(date) && !isObject(date)) return new TypeError("Invalid Date");

  if (!isString(formatString)) return new TypeError(`Invalid format string: ${formatString}`);

  if (!validateDate(date) && !isGermane(date)) return new RangeError("Invalid Date");

  if (!isLocale(options)) return new TypeError("Invalid locale");

  const pattern = tokens(date, options.locale);
  if (extendedPattern.test(formatString)) {
    return replacer(generateParseToken(formatString, options.locale), pattern, regularPattern);
  }

  return replacer(formatString, pattern, regularPattern);
}

module.exports = strftime;
