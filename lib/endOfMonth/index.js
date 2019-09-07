/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its quarter.
 */

"use strict";
const { endOfMonthHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} date
 * @returns {String} end of month in words
 * @throws {TypeError | RangeError}
 */
function endOfMonth(date = Date.now()) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const monthHdr = endOfMonthHandler(new Date(date));

	const returnValue = toPriority(monthHdr, [
		"totalDays",
		"hours",
		"minutes",
		"seconds"
	]);

	return `In ${returnValue}`;
}

module.exports = endOfMonth;
