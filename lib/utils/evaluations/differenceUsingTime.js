/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in time.
 * These function is an helper for differenceIn{Hour|Minute|Seconds|Milliseconds|Days|Weeks}
 */

"use strict";

const {
	isDateOrNumber,
	isObject,
	isBool
} = require("../validations/validatePropTypes");

const validateDate = require("../validations/validateDate");
const hasProp = require("../validations/hasProp");

/**
 *
 * @param {Date} dateOne
 * @param {Date} dateTwo
 * @param {Object} options
 * @returns {Number}
 */
function differenceUsingTime(
	dateOne,
	dateTwo,
	options = { includeTime: false }
) {
	if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo))
		throw new TypeError("Invalid Date");

	if (!validateDate(dateOne) || !validateDate(dateTwo))
		throw new RangeError("Invalid Date");

	if (!isObject(options))
		throw new TypeError(
			"Invalid option... Expects an object with a property includeTime"
		);

	if (hasProp(options, "includeTime") && !isBool(options.includeTime))
		throw new TypeError(
			"Expects property includeTime to be a boolean value"
		);

	const nDateOne = new Date(dateOne),
		nDateTwo = new Date(dateTwo);

	const one = new Date(
			`${nDateOne.getFullYear()} ${nDateOne.getMonth() +
				1} ${nDateOne.getDate()}`
		),
		two = new Date(
			`${nDateTwo.getFullYear()} ${nDateTwo.getMonth() +
				1} ${nDateTwo.getDate()}`
		);

	const timestamp =
		options.includeTime === true
			? nDateTwo.getTime() - nDateOne.getTime()
			: two.getTime() - one.getTime();

	return timestamp;
}

module.exports = differenceUsingTime;
