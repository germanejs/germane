/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in months.
 */

"use strict";
const difference = require("../utils/evaluations/difference");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @param {Date | Number} options options {includeTime: true or false}
 * @throws TypeError
 * @returns {Number} difference between dates in months.
 */
function differenceInMonths(dateOne, dateTwo) {
	if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo))
		throw new TypeError("Invalid Date");

	if (!validateDate(dateOne) || !validateDate(dateTwo))
		throw new RangeError("Invalid Date");

	const diff = difference(dateOne, dateTwo).totalMonths;

	return diff;
}

module.exports = differenceInMonths;
