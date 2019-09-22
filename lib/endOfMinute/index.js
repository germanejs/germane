/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its hour.
 */

"use strict";

const { endOfHourHandler } = require("../utils/evaluations/endOfDateHandlers");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
/**
 *
 * @param {Date | Number} date
 * @returns {String} end of minute in words
 * @throws {TypeError | RangeError}
 */
function endOfHour(date = Date.now()) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const endOfM = endOfHourHandler(typeof date === "number" ? new Date(date) : date);

  const returnValue = toPriority(endOfM, ["seconds"]);
  return `In ${returnValue}`;
}

module.exports = endOfHour;
