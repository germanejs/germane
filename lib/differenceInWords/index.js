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
 * @param {Date | Number} current first date
 * @param {Date | Number} relative second date
 * @returns {String} total difference in words.
 * @throws {TypeError | RangeError}
 */
function differenceInWords(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const nDateOne = typeof current === "number" ? new Date(current) : current;
  const nDateTwo = typeof relative === "number" ? new Date(relative) : relative;

  if (isSameDate(nDateOne, nDateTwo)) return "Same Dates";

  const diff = difference(current, relative);
  // console.log(diff);
  const returnValue = strictReturn(diff, ["years", "months", "weeks", "days"]);

  return returnValue;
}

module.exports = differenceInWords;
