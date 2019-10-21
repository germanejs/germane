/**
 * @author Simeon Akpanudo
 * @fileoverview Contains a function that returns truthy or falsy depending on specified arguments
 */

"use strict";

const { isDateOrNumber, isObject, isGermane } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number} relative Date | Timestamp
 * which will be tested against the start range and end range
 * @param {Date|Number} start The beginning date to test with
 * @param {Date|Number} end Ending date range to test with
 * @name inRange
 * @returns {Boolean} Returns true or false depending on
 * whether given date lies in the specified range.
 * @throws {TypeError}

 */
function inRange(relative, start, end) {
  if (
    !isDateOrNumber(relative)
    || !isDateOrNumber(start)
    || (!isDateOrNumber(end) && (!isObject(relative) || !isObject(start) || !isObject(end)))
  ) {
    return new TypeError(
      "Expected range, relative, start and end arguments to be a date object or a timestamp",
    );
  }

  if (
    !validateDate(relative)
    || !validateDate(start)
    || (!validateDate(end) && (!isGermane(relative) || !isGermane(start) || !isGermane(end)))
  ) return new RangeError("Invalid Date");

  return start <= relative && relative <= end;
}

module.exports = inRange;
