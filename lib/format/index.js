/**
 * @fileoverview Main Formatter function
 * @author Simeon Akpanudo
 */
"use strict";
const parseDateTime = require("../utils/formatDateTime"),
	{ replacer } = require("../utils/replacers/replacer");

const {
	isDateOrNumber,
	isString
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number} date A date object  {new Date() or timestamp {eg from Date.now()}}, which will be formatted with  format string.
 * @param {String} formatString A string which will be used to format the date object.
 * @name format
 * @description These function format a date object with format string specified as an argument, and returns a correctly formatted human readable date.
 * @example format(new Date(Date.now()), "Todays' date is dddd, MMMM DD, YYYY");
 * @throws TypeError (if argument pos 1 is not a Date type) || (if argument pos 2 is not a string)
 */
function format(date, formatString) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!isString(formatString))
		throw new TypeError("Expected format string to be a string value");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const _d = parseDateTime(new Date(date));

	const _date = _d._date,
		_time = _d._time,
		allFormat = {
			M: _date.month.decimal.nonZeroPadded,
			MM: _date.month.decimal.zeroPadded,
			MMM: _date.month.short,
			MMMM: _date.month.long,
			Mo: _date.month.ordinal,
			Q: _date.quarter.decimal.zeroPadded,
			Qo: _date.quarter.ordinal,
			D: _date.dayOfMonth.decimal.nonZeroPadded,
			DD: _date.dayOfMonth.decimal.zeroPadded,
			Do: _date.dayOfMonth.ordinal,
			DDD: _date.dayOfYear.decimal.nonZeroPadded,
			DDDD: _date.dayOfYear.decimal.zeroPadded,
			DDDo: _date.dayOfYear.ordinal,
			d: _date.dayOfWeek.decimal.nonZeroPadded,
			dd: _date.dayOfWeek.two,
			do: _date.dayOfWeek.ordinal,
			ddd: _date.dayOfWeek.short,
			dddd: _date.dayOfWeek.long,
			YY: _date.year.withoutCentury,
			YYYY: _date.year.withCentury,
			W: _date.week.decimal.nonZeroPadded,
			WW: _date.week.decimal.zeroPadded,
			Wo: _date.week.ordinal,
			A: _time.meridiem.big,
			a: _time.meridiem.small,
			aa: _time.meridiem.dotted,
			H: _time.hour24.decimal.nonZeroPadded,
			HH: _time.hour24.decimal.zeroPadded,
			h: _time.hour12.decimal.nonZeroPadded,
			hh: _time.hour12.decimal.zeroPadded,
			m: _time.minute.decimal.nonZeroPadded,
			mm: _time.minute.decimal.zeroPadded,
			s: _time.seconds.decimal.nonZeroPadded,
			ss: _time.seconds.decimal.zeroPadded,
			SSS: _time.milliseconds.decimal.zeroPadded,
			Z: _time.tzOffset.normal,
			ZZ: _time.tzOffset.colonized,
			z: _time.tzLong,
			zz: _time.tzShort,
			x: _time.timestamp.milliseconds,
			X: _time.timestamp.seconds
		};

	const matcher = /\bYYYY\b|\bYY\b|\bM\b|\bMM\b|\bMMM\b|\bMMMM\b|\bMo\b|\bD\b|\bDD\b|\bDDD\b|\bDDDD\b|\bDDDo\b|\bDo\b|\bQ\b|\bQo\b|\bd\b|\bdd\b|\bddd\b|\bdddd\b|\bdo\b|\bA\b|\ba\b|\baa\b|\bH\b|\bHH\b|\bh\b|\bhh\b |\bm\b|\bmm\b|\bSSS\b|\bss\b|\bs\b|\bZ\b|\bZZ\b|\bz\b|\bzz\b|\bX\b|\bx\b|\bW\b|\bWW\b|\bWo\b/g;

	const formatReturn = replacer(formatString, allFormat, matcher);
	return formatReturn;
}

module.exports = format;
