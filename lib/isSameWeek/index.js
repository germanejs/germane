/**
 * @author Simeon Akpanudo
 * @fileoverview Checks whether dates specified are of the same week;
 */

"use strict";

const { endOfWeekHandler } = require("../_util/evaluations/endOf");
const { startOfWeekHandler } = require("../_util/evaluations/startOf");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const inRangeOf = require("../_util/validations/inRangeOf");
const validateDate = require("../_util/validations/validateDate");

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

  const eOfWeek = endOfWeekHandler(x).getTime();
  const sOfWeek = startOfWeekHandler(x).getTime();

  const range = inRangeOf(relativeDate.getTime(), sOfWeek, eOfWeek);
  return range;
}

module.exports = isSameWeek;
