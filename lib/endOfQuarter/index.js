/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its quarter.
 */

"use strict";

const { endOfQuarterHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} date
 */
function endOfQuarter(date = Date.now()) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const endOfQ = endOfQuarterHandler(typeof date === "number" ? new Date(date) : date);

  const returnValue = toPriority(endOfQ, ["months", "totalDays", "hours", "minutes", "seconds"]);
  return `In ${returnValue}`;
}

module.exports = endOfQuarter;
