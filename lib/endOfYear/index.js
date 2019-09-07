/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its year.
 */

"use strict";
const { endOfYearHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} date
 */
function endOfYear(date = Date.now()) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const year = endOfYearHandler(new Date(date));

	const returnValue = toPriority(year, [
		"months",
		"totalDays",
		"hours",
		"minutes",
		"seconds"
	]);
	return `In ${returnValue}`;
}

module.exports = endOfYear;
