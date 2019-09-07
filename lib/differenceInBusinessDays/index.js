/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const { absFloor } = require("../utils/roundingMethods");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @param {Date | Number} options options {includeTime: true or false}
 * @throws TypeError
 * @returns {Number} difference between dates in days.
 */
function differenceInBusinessDays(dateOne, dateTwo) {
	if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo))
		throw new TypeError("Invalid Date");

	if (!validateDate(dateOne) || !validateDate(dateTwo))
		throw new RangeError("Invalid Date");

	const nDateOne = new Date(dateOne),
		nDateTwo = new Date(dateTwo);
	let dateToMilli,
		date = 0;

	const difference = nDateTwo.getTime() - nDateOne.getTime();
	const timestamp = absFloor(difference / (1000 * 3600 * 24));

	for (let i = 0; i <= timestamp; i++) {
		dateToMilli = i * 24 * 3600 * 1000;
		// checking for negative and positive dates
		const d =
			difference >= 0
				? new Date(nDateOne.getTime() + dateToMilli)
				: new Date(nDateOne.getTime() - dateToMilli);
		if (d.getDay() % 6 !== 0) {
			date += 1;
		}
	}
	return date;
}

module.exports = differenceInBusinessDays;
