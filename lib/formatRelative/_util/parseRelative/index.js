/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview returns the relative format of two given dates not adding time.
 */

"use strict";

const evaluateTimestamp = require("../../../_util/evaluations/timestampToTime");
const relativeFlags = require("../relativeFlags");
const {
  isZero,
  isDateOrNumber,
  isNumber,
  isLocale,
} = require("../../../_util/validations/validatePropTypes");
const validateDate = require("../../../_util/validations/validateDate");
const format = require("../../../format");

function parseRelative(base, relative, options) {
  if (!isDateOrNumber(base) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(base) || !validateDate(relative)) return new RangeError("Invalid Date");
  if (!isLocale(options)) return new TypeError("Invalid locale");

  const baseDate = isNumber(base) ? new Date(base) : base;
  const relativeDate = isNumber(relative) ? new Date(relative) : relative;
  const flags = relativeFlags(baseDate, relativeDate);

  const locale = options.locale;
  if (flags.sameDay) {
    const time = evaluateTimestamp(baseDate.getTime() - relativeDate.getTime());
    // eslint-disable-next-line max-len
    if (isZero(time.hours) && isZero(time.minutes) && isZero(time.seconds)) return locale.formatRelative("justNow");

    return format(relative, locale.formatRelative("sameDay", relativeDate), options);
  }

  if (flags.yesterday) {
    return format(relativeDate, locale.formatRelative("yesterday", relativeDate), options);
  }
  if (flags.nextDay) return format(relativeDate, locale.formatRelative("nextDay", relativeDate), options);

  if (flags.sameWeek) {
    return format(relativeDate, locale.formatRelative("sameWeek", relativeDate), options);
  }

  if (flags.lastWeek) {
    return format(relativeDate, locale.formatRelative("lastWeek", relativeDate), options);
  }

  return format(relativeDate, locale.formatRelative("sameElse", relativeDate), options);
}

module.exports = parseRelative;
