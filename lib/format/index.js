/**
 * @fileoverview Main Formatter function
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 */

"use strict";

// const parseDateTime = require("../_util/formatDateTime");
const replacer = require("../_util/format/replacer");

const {
  isDateOrNumber,
  isString,
  isGermane,
  isObject,
  isLocale,
} = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const defaultLocale = require("../locale/en_US");
const generateParseTokens = require("./_util/generateParseTokens");
const dirtify = require("./_util/dirtify");
const cleanse = require("./_util/cleanse");
const { regularPattern, longDateTimePattern } = require("./_util/regex");
const tokens = require("./_util/tokens");
/**
 *
 * @param {Date|Number|typeof germane} date A date object  {new Date()
 * or timestamp {eg from Date.now()}}, which will be formatted with  format string.
 * @param {String} formatString A string which will be used to format the date object.
 * @param {{locale: {}}} options Locale Object, defaults to en-US.
 * @example
 * format(new Date(), "eeee, MMMM do, yyyy.");
 * format(germane("2019-11-23 09:11:22.900Z", "Australia/Brisbane"), "eeee, MMMM do, yyyy.");
 * // to escape a string
 * format(new Date(), "'Aujourd'hui' [à] T ", { locale: fr })
 * //=> "Aujourd'hui à 00:00";
 * // to escape multiple strings
 * format(new Date("2019-11-01T19:45:11.990Z"),
 * "[These is how to escape a string] P", { locale: en_US });
 * //=> "These is how to escape a sentence or multiple string 11/1/2019"
 * @returns {String|TypeError|RangeError} returns a format string,
 * using the locale or a type or range Error if a problem is encountered.
 * @name format
 * @summary These function format a date object with format string specified as an argument,
 * and returns a correctly formatted human readable date.
 * for a full list of format tokens please see the docs folder [docs/developer-guides/format.md].
 */

function format(date, formatString = "pppp", options = { locale: defaultLocale }) {
  if (!isDateOrNumber(date) && !isObject(date)) return new TypeError("Invalid Date");

  if (!isString(formatString)) return new TypeError(`Invalid format string: ${formatString}`);

  if (!validateDate(date) && !isGermane(date)) return new RangeError("Invalid Date");

  if (!isLocale(options)) return new TypeError("Invalid locale");

  const currentDate = typeof date === "number" ? new Date(date) : date;
  const pattern = tokens(currentDate, options.locale);

  if (longDateTimePattern.test(formatString)) {
    // both cleans and dirty uses the same regex pattern to match escaped strings.
    const parseToken = generateParseTokens(dirtify(formatString), options.locale);
    const dirty = dirtify(parseToken);
    const formatted = replacer(dirty, pattern, regularPattern);
    return cleanse(formatString, cleanse(parseToken, formatted));
  }

  return cleanse(formatString, replacer(dirtify(formatString), pattern, regularPattern));
}

module.exports = format;
