/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its quarter.
 */

"use strict";

const { endOfMonthHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} date
 * @returns {String} end of month in words
 * @throws {TypeError | RangeError}
 */
function endOfMonth(date = Date.now()) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const endOfM = endOfMonthHandler(typeof date === "number" ? new Date(date) : date);
  // console.log(endOfM);
  const returnValue = toPriority(endOfM, ["totalDays", "hours", "minutes", "seconds"]);

  return `In ${returnValue}`;
}

module.exports = endOfMonth;
