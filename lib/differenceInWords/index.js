/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates.
 */

"use strict";

const difference = require("../_util/evaluations/difference");
const { isDateOrNumber, isLocale } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const defaultLocale = require("../locale/en_US");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | Number} relative second date
 * @returns {TypeError | RangeError | String} total difference in words or errors.
 */
function differenceInWords(base, relative, options = { locale: defaultLocale }) {
  // @ts-ignore
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  // @ts-ignore
  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");

  // @ts-ignore
  if (!isLocale(options)) return new TypeError("Invalid locale");

  const diff = difference(base, relative, { strict: true });
  if (diff.totalSecond === 0) return options.locale.miscellaneous.sameDate;
  const buildDist = options.locale.relativeDistance("difference", diff, [
    "year",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ]);

  return buildDist;
}

module.exports = differenceInWords;
