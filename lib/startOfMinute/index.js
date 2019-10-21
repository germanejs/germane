/**
 * @author Simeon Akpanudo
 * @fileoverview Handles return of distance between date provided and its current of minute.
 */

"use strict";

const { startOfHourHandler } = require("../utils/evaluations/startOfDateHandlers");
const toPriority = require("../utils/replacers/toPriority");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} date Date object or a timestamp
 * @returns {String}
 * @throws {TypeError | RangeError}
 */
function startOfMinute(date) {
  if (!isDateOrNumber(date)) return new TypeError("Invalid Date");

  if (!validateDate(date)) return new RangeError("Invalid Date");

  const shHandler = startOfHourHandler(typeof date === "number" ? new Date(date) : date);
  const returnValue = toPriority(shHandler, ["seconds"]);
  return `${returnValue} ago`;
}

module.exports = startOfMinute;
