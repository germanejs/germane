/**
 * @author Simeon Akpanudo
 * @fileoverview Checks if date specified in function parameter 2 is the yesterday of parameter 1.
 */
"use strict";
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 * @param {Date|Number} dateOne date | number | timestamp
 * @param {Date|Number} dateTwo date | number | timestamp
 * @name isYesterday
 * @returns {Boolean} returns truthy or falsy values (true || false). depending on whether the second day specified is the yesterday of the first.
 */
function isYesterday(dateOne, dateTwo) {
	if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo))
		throw new TypeError("Invalid Date");

	if (!validateDate(dateOne) || !validateDate(dateTwo))
		throw new RangeError("Invalid Date");
	const nDateOne = new Date(dateOne),
		nDateTwo = new Date(dateTwo);

	const newDateOne =
		new Date(
			`${nDateOne.getFullYear()} ${nDateOne.getMonth() +
				1} ${nDateOne.getDate()}`
		).getTime() -
		1 * 24 * 3600 * 1000;
	const newDateTwo = new Date(
		`${nDateTwo.getFullYear()} ${nDateTwo.getMonth() +
			1} ${nDateTwo.getDate()}`
	).getTime();

	return newDateTwo === newDateOne;
}

module.exports = isYesterday;
