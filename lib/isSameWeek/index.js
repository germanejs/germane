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
 * @param {Date|Number} dateOne Date object or timestamp
 * @param {Date|Number} dateTwo Date object or timestamp
 * @name isSameWeek
 * @returns {Boolean} True or false if  specified date is in the last week
 */
function isSameWeek(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");
  const dOne = new Date(dateOne);
  const dTwo = new Date(dateTwo);
  const x = new Date(`${dOne.getUTCFullYear()} ${dOne.getUTCMonth() + 1} ${dOne.getUTCDate()}`);
  const eOfWeek = endOfWeekHandler(x).totalMilliseconds;
  const sOfWeek = startOfWeekHandler(x).totalMilliseconds;

  const range = inRangeOf(dTwo.getTime(), x.getTime() - sOfWeek, x.getTime() + eOfWeek);
  return range;
}

module.exports = isSameWeek;
