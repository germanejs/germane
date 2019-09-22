/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its week.
 */

"use strict";

const { endOfWeekHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} date
 */
function endOfWeek(date = Date.now()) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const endOfW = endOfWeekHandler(typeof date === "number" ? new Date(date) : date);
  // console.log(endOfW);
  const returnValue = toPriority(endOfW, ["totalDays", "hours", "minutes", "seconds"]);
  return `In ${returnValue}`;
}

module.exports = endOfWeek;
