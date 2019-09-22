/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates.
 */

"use strict";

const difference = require("../utils/evaluations/difference");
const strictReturn = require("../utils/replacers/strictReturn");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const isSameDate = require("../utils/evaluations/isSameDate");

/**
 *
 * @param {Date | Number} startDate first date
 * @param {Date | Number} endDate second date
 * @returns {String} total difference in words.
 * @throws {TypeError | RangeError}
 */
function differenceInWords(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");

  const nDateOne = typeof startDate === "number" ? new Date(startDate) : startDate;
  const nDateTwo = typeof endDate === "number" ? new Date(endDate) : endDate;

  if (isSameDate(nDateOne, nDateTwo)) return "Same Dates";

  const diff = difference(startDate, endDate);
  // console.log(diff);
  const returnValue = strictReturn(diff, ["years", "months", "weeks", "days"]);

  return returnValue;
}

module.exports = differenceInWords;
