/**
 * @author Simeon Akpanudo
 * @fileoverview Handles return of distance between date provided and its start of week.
 */

"use strict";

const {
	startOfWeekHandler
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
function startOfWeek(date) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const handler = startOfWeekHandler(new Date(date));
	const returnValue = toPriority(handler, [
		"totalDays",
		"hours",
		"minutes",
		"seconds"
	]);
	return `${returnValue} ago`;
}

module.exports = startOfWeek;
