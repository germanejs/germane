/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a dates specified are the same.
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const isSameDate = require("../utils/evaluations/isSameDate");
/**
 *
 * @param {Date|Number} dateOne date | number | timestamp
 * @param {Date|Number} dateTwo date | number | timestamp
 * @name isSameDay
 * @returns {Boolean} Boolean value depending on whether specified dates is same day
 */

function isSameDay(dateOne, dateTwo) {
	if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo))
		throw new TypeError("Invalid Date");

	if (!validateDate(dateOne) || !validateDate(dateTwo))
		throw new RangeError("Invalid Date");

	return isSameDate(new Date(dateOne), new Date(dateTwo));
}

module.exports = isSameDay;
