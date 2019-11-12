/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within is used to check whether a given date is the future.
 */

"use strict";

const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const validateDate = require("../_util/validations/validateDate");
/**
 *
 * @param {Date|Number} current Current date.
 * @param {Date | Number} relative Date to check against the first.
 * @returns {Boolean} True or False depending on whether the second date is a f date of the first.
 * @name isFuture
 */
function isFuture(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const nDateOne = (typeof current === "number" ? new Date(current) : current).getTime();
  const nDateTwo = (typeof relative === "number" ? new Date(relative) : relative).getTime();

  return nDateTwo > nDateOne;
}

module.exports = isFuture;
