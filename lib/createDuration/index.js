/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview function creates a duration from given source.
 */

"use strict";

const inArray = require("../_util/validations/inArray");

const {
  isString,
  isArray,
  isValidDateArray,
  isNumber,
} = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");

const durationFromTimeString = require("./_util/durationFromTimeString");
const durationFromISO = require("./_util/durationFromISO");
const durationFromInt = require("./_util/durationFromInt");
const durationFromDate = require("./_util/durationFromDate");

/**
 * Creates a Duration given an ISO Duration,
 * (Duration & time unit) or Array of Date
 * @param {Number|Date[]|String} duration Duration type
 * @param {String} [unit] Unit type <optional> <only applies to number durations>
 * @summary A duration is simple an interval of time,
 * CreateDuration creates these interval given A iso string or time string, Date Array(2) or number.
 * ```js
 * createDuration(200, "minutes") //=> 12000000
 * createDuration("12:09:11.099") //=> 43751099
 * createDuration([new Date("2011-01-15 12:09Z"), new Date("2011-02-01 00:01:01.001Z")]) // => 1425121001
 * createDuration("P3Y7M9DT12H19M12S") //=> 113833152000
 * ```
 * @returns {Number}
 * @namespace createDuration
 */
function createDuration(duration, unit = "milliseconds") {
  // @ts-ignore
  if (!isString(duration) && !isArray(duration) && !isNumber(duration)) return new TypeError("Invalid duration");
  // @ts-ignore
  if (!isString(unit)) return TypeError("Invalid unit: expected a string");

  if (isString(duration)) {
    // @ts-ignore
    if (duration.length < 1) return new RangeError("Invalid duration: empty string");
    // @ts-ignore
    if (/\-{0,1}(?:\d{1,}|\d{1,}\.\d{1,})[a-zA-Z]{1}$/g.test(duration)) {
      // @ts-ignore
      return durationFromISO(duration);
    }
    // @ts-ignore
    if (/\d{1,2}(?:\:\d{1,2}|$)(?:(?:\:\d{1,2})|$)(?:\.\d{1,}$|$)$/.test(duration)) {
      // @ts-ignore
      return durationFromTimeString(duration);
    }
    return 0;
  }

  if (isArray(duration)) {
    // @ts-ignore
    if (duration.length < 2) return new RangeError("Duration requires two (2) Date objects");
    // @ts-ignore
    if (!isValidDateArray(duration, validateDate)) return new RangeError("Invalid duration: duration array contains non Date value(s)");

    // @ts-ignore
    return durationFromDate(duration);
  }

  // prettier-ignore
  const acceptableUnits = ["years", "year", "months", "month", "weeks", "week", "days", "day", "hours", "hour", "minutes", "minute", "seconds", "second", "milliseconds", "millisecond", "ms"];
  // eslint-disable-next-line no-nested-ternary
  const transformedUnit = inArray(acceptableUnits, unit.toLowerCase())
    ? /s$/i.test(unit)
      ? unit.toLowerCase()
      : unit.toLowerCase() + "s"
    : "milliseconds";
  // @ts-ignore
  return durationFromInt(duration, transformedUnit);
}

module.exports = createDuration;
