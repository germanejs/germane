/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a date is a weekend
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} date date | number | timestamp
 * @name isWeekend
 * @returns {Boolean} Boolean value depending on whether specified date is a weekend
 */

// weekend starts on sunday. 0 indexed.
function isWeekend(date) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const nDate = new Date(date);

	const day = nDate.getDay();

	return day % 6 === 0;
}

module.exports = isWeekend;
