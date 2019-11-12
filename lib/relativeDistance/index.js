/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @description Function returns the distance between two dates
 */

"use strict";

const { isDateOrNumber, isLocale, isBool } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
const defaultLocale = require("../locale/en_US");
const difference = require("../_util/evaluations/difference");
/**
 *
 * @param {Date|Number} base base date
 * @param {Date|Number} relative relative date
 * @param {Locale} option
 * @summary returns the distance between two datetime.
 * ```js
 * relativeDistance(new Date(), new Date(), { locale: de });
 * //=>
 * relativeDistance(germane(), germane(), { locale: enUS });
 * //=>
 * ```
 */
function relativeDistance(base, relative, options = { locale: defaultLocale, addSuffix: true }) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");

  const defaultOptions = {
    locale: options.locale === undefined ? defaultLocale : options.locale,
    addSuffix: options.addSuffix === undefined ? true : options.addSuffix,
  };
  if (!isLocale(defaultOptions)) return new TypeError("Invalid locale");
  if (!isBool(defaultOptions.addSuffix)) return new TypeError("Invalid option");
  const { locale, addSuffix } = defaultOptions;
  const baseDate = typeof base === "number" ? new Date(base) : base;
  const relativeDate = typeof relative === "number" ? new Date(relative) : relative;
  const distance = difference(baseDate, relativeDate);
  const distanceType = relative >= base ? "future" : "past";
  const distanceUnit = ["year", "month", "week", "day", "hour", "minute", "second"];
  const priotised = locale.relativeDistance(distanceType, distance, distanceUnit, {
    addSuffix,
  });
  return priotised;
}

module.exports = relativeDistance;
