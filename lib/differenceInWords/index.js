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
 * @param {Date | Number} dateOne first date
 * @param {Date | Number} dateTwo second date
 * @returns {String} total difference in words.
 * @throws {TypeError | RangeError}
 */
function differenceInWords(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");

  const nDateOne = typeof dateOne === "number" ? new Date(dateOne) : dateOne;
  const nDateTwo = typeof dateTwo === "number" ? new Date(dateTwo) : dateTwo;

  if (isSameDate(nDateOne, nDateTwo)) return "Same Dates";

  const diff = difference(dateOne, dateTwo);
  // console.log(diff);
  const returnValue = strictReturn(diff, ["years", "months", "weeks", "days"]);

  return returnValue;
}

module.exports = differenceInWords;
