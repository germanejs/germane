/**
 * @author Simeon Akpanudo
 * @fileoverview Checks whether dates specified are of the same week;
 */

"use strict";

const { endOfWeekHandler } = require("../utils/evaluations/endOfDateHandlers");
const { startOfWeekHandler } = require("../utils/evaluations/startOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const inRangeOf = require("../utils/validations/inRangeOf");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number} current Date object or timestamp
 * @param {Date|Number} relative Date object or timestamp
 * @name isSameWeek
 * @returns {Boolean} True or false if  specified date is in the last week
 */
function isSameWeek(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");
  const currentDate = typeof current === "number" ? new Date(current) : current;
  const relativeDate = typeof relative === "number" ? new Date(relative) : relative;
  const x = new Date(
    `${currentDate.getUTCFullYear()}-${currentDate.getUTCMonth() + 1}-${currentDate.getUTCDate()}`,
  );

  const eOfWeek = endOfWeekHandler(x).totalMilliseconds;
  const sOfWeek = startOfWeekHandler(x).totalMilliseconds;

  const range = inRangeOf(relativeDate.getTime(), x.getTime() - sOfWeek, x.getTime() + eOfWeek);
  return range;
}

module.exports = isSameWeek;
