/**
 * @author Simeon Akpanudo
 * @fileoverview Main date adding function.
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
 * @param {Object{}} options units of time to be added to the date
 */
function add(
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
		years: Math.abs(options.years) || 0,
		months: Math.abs(options.months) | 0,
		days: Math.abs(options.days) || 0,
		hours: Math.abs(options.hours) || 0,
		seconds: Math.abs(options.seconds) || 0,
		minutes: Math.abs(options.minutes) || 0,
		ms: Math.abs(options.ms) || 0
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
	hours = YMD.hours * 1000 * 3600;
	minutes = YMD.minutes * 60 * 1000;
	seconds = YMD.seconds * 1000;
	months = monthsToTimestamp(newDate, YMD.months, "add");
	const mdhmsms =
		newDate.getTime() + months + days + hours + minutes + seconds + YMD.ms;
	years = yearsToTimestamp(new Date(mdhmsms), YMD.years, "add");

	const fn = new Date(mdhmsms + years);

	return fn;
}

module.exports = add;
