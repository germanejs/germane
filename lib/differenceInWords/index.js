/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates.
 */

"use strict";

const difference = require("../_util/evaluations/difference");
const { isDateOrNumber, isLocale } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const isSameDate = require("../_util/evaluations/sameDate");
const defaultLocale = require("../locale/en_US");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | Number} relative second date
 * @returns {String} total difference in words.
 * @throws {TypeError | RangeError}
 */
function differenceInWords(base, relative, options = { locale: defaultLocale }) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");

  if (!isLocale(options)) return new TypeError("Invalid locale");

  const nDateOne = typeof base === "number" ? new Date(base) : base;
  const nDateTwo = typeof relative === "number" ? new Date(relative) : relative;

  if (isSameDate(nDateOne, nDateTwo)) return options.locale.miscellaneous.sameDate;

  const diff = difference(base, relative);
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
