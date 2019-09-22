/**
 * @author Simeon Akpanudo
 * @fileoverview Contains a function that returns truthy or falsy depending on specified arguments
 */

"use strict";

const { isDateOrNumber, isObject, isGermane } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number} date Date | Timestamp
 * which will be tested against the startDate range and end range
 * @param {Date|Number} startDate The beginning date to test with
 * @param {Date|Number} end Ending date range to test with
 * @name inRange
 * @returns {Boolean} Returns true or false depending on
 * whether given date lies in the specified range.
 * @throws {TypeError}

 */
function inRange(date, startDate, end) {
  if (
    !isDateOrNumber(date)
    || !isDateOrNumber(startDate)
    || (!isDateOrNumber(end) && (!isObject(date) || !isObject(startDate) || !isObject(end)))
  ) {
    return new TypeError(
      "Expected range, startDate and end arguments to be a date object or a timestamp",
    );
  }

  if (
    !validateDate(date)
    || !validateDate(startDate)
    || (!validateDate(end) && (!isGermane(date) || !isGermane(startDate) || !isGermane(end)))
  ) return new RangeError("Invalid Date");

  return startDate <= date && date <= end;
}

module.exports = inRange;
