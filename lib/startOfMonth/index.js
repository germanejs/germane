/**
 * @author Simeon Akpanudo
 * @fileoverview Handles return of distance between date provided and its start of day.
 */

"use strict";

const {
	startOfMonthHandler
} = require("../utils/evaluations/startOfDateHandlers");
const toPriority = require("../utils/replacers/toPriority");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} date Date object or a timestamp
 * @returns {String}
 * @throws {TypeError | RangeError}
 */
function startOfMonth(date) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const handler = startOfMonthHandler(new Date(date));
	const returnValue = toPriority(handler, [
		"totalDays",
		"hours",
		"minutes",
		"seconds"
	]);
	return `${returnValue} ago`;
}

module.exports = startOfMonth;
