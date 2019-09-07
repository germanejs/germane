/**
 * @author Simeon Akpanudo
 * @fileoverview Returns true of false if or if not a date is current date. (depends on local time)
 */

"use strict";

const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} date date | number | timestamp
 * @name isToday
 * @returns {Boolean} Boolean value depending on whether specified date is current date
 */

function isToday(date) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");
	const nDate = new Date(date);

	const today = new Date(),
		year = today.getFullYear(),
		month = today.getMonth() + 1,
		dOfMonth = today.getDate();

	const possibleYear = nDate.getFullYear(),
		possibleMonth = nDate.getMonth() + 1,
		possibleDOfMonth = nDate.getDate();

	const newToday = new Date(`${year} ${month} ${dOfMonth}`).getTime();
	const possibleToday = new Date(
		`${possibleYear} ${possibleMonth} ${possibleDOfMonth}`
	).getTime();

	return possibleToday === newToday;
}

module.exports = isToday;
