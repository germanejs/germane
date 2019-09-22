/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its hour.
 */

"use strict";

const { endOfHourHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} date
 */
function endOfHour(date = Date.now()) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const endOfH = endOfHourHandler(typeof date === "number" ? new Date(date) : date);

  const returnValue = toPriority(endOfH, ["minutes", "seconds"]);
  return `In ${returnValue}`;
}

module.exports = endOfHour;
