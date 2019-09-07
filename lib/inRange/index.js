/**
 * @author Simeon Akpanudo
 * @fileoverview Contains a function that returns truthy or falsy depending on specified arguments
 */
"use strict";
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number} date Date | Timestamp which will be tested against the start range and end range
 * @param {Date|Number} start The beginning date to test with
 * @param {Date|Number} end Ending date range to test with
 * @name inRange
 * @returns {Boolean} Returns true or false depending on whether given date lies in the specified range.
 * @throws {TypeError}
 
 */
function inRange(date, start, end) {
	if (!isDateOrNumber(date) || !isDateOrNumber(start) || !isDateOrNumber(end))
		throw new TypeError(
			"Expected range, start and end arguments to be a date object or a timestamp"
		);

	if (!validateDate(date) || !validateDate(start) || !validateDate(end))
		throw new RangeError("Invalid Date");
	if (Object.prototype.toString.call(date) === "[object Number]")
		date = new Date(date).getTime();
	if (Object.prototype.toString.call(start) === "[object Number]")
		start = new Date(date).getTime();
	if (Object.prototype.toString.call(end) === "[object Number]")
		end = new Date(end).getTime();

	return start <= date && date <= end;
}

module.exports = inRange;
