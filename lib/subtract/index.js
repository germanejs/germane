/**
 * @author Simeon Akpanudo
 * @fileoverview functions within manipulates dates by subtracting from it.
 */

"use strict";

const {
	isObject,
	isDateOrNumber,
	isNumber
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
const hasProp = require("../utils/validations/hasProp");
const {
	yearsToTimestamp,
	monthsToTimestamp
} = require("../utils/evaluations/unitsToTimestamp");

/**
 *
 * @param {Date | TimeStamp} date Date Object | Timestamp to be manipulated
 * @param {Object{}} options units of time to be subtracted to the date
 */
function subtract(
	date,
	options = {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		ms: 0
	}
) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");
	if (!isObject(options))
		throw new TypeError(
			"Invalid Options, Expected options parameter to be an object"
		);
	if (
		(hasProp(options, "years") && !isNumber(options.years)) ||
		(hasProp(options, "months") && !isNumber(options.months)) ||
		((hasProp(options, "days") && !isNumber(options.days)) ||
			(hasProp(options, "hours") && !isNumber(options.hours)) ||
			(hasProp(options, "minutes") && !isNumber(options.minutes)) ||
			(hasProp(options, "seconds") && !isNumber(options.seconds)) ||
			(hasProp(options, "ms") && !isNumber(options.ms)))
	)
		throw new RangeError("Invalid Options property, Expected a Number");
	if (!validateDate(date)) throw new Error("Invalid Date");

	const absOptions = {
		years: options.years || 0,
		months: options.months | 0,
		days: options.days || 0,
		hours: options.hours || 0,
		seconds: options.seconds || 0,
		minutes: options.minutes || 0,
		ms: options.ms || 0
	};
	let newDate = new Date(date);

	let YMD = Object.assign({}, absOptions),
		days,
		months,
		years,
		hours,
		minutes,
		seconds;
	days = YMD.days > 0 ? YMD.days * 24 * 1000 * 3600 : 0;
	hours = -YMD.hours * 1000 * 3600;
	minutes = -YMD.minutes * 60 * 1000;
	seconds = -YMD.seconds * 1000;
	months = monthsToTimestamp(newDate, YMD.months, "sub");
	const mdhmsms = newDate.getTime() - months;
	years = yearsToTimestamp(new Date(newDate), YMD.years, "sub");

	const fn = new Date(mdhmsms);
	return fn;
}

module.exports = subtract;
