/**
 * @author Simeon Akpanudo
 * @fileoverview function in these modules uses the primitive C datetime formatting tokens also used in python and other C inspired languages to parse/format date and time.
 */
"use strict";
const { replacer } = require("../utils/replacers/replacer");
const parseDateTime = require("../utils/formatDateTime");
const {
	isDateOrNumber,
	isString
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date} date must be a date object e.g new Date(). note: Date.now() does not return an object, rather it returns a timestamp which is a number.
 * @param {string} formatString Format string
 * @name useCFormat
 * @returns {String} datetime correct formatted string using the C format
 */
function useCFormat(date, formatString = "%A, %B %d, %Y") {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!isString(formatString))
		throw new TypeError("Expected format string to be a string value");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const datetime = parseDateTime(new Date(date)),
		_d = datetime._date,
		_t = datetime._time,
		allFormat = {
			"%a": _d.dayOfWeek.short,
			"%A": _d.dayOfWeek.long,
			"%w": _d.dayOfWeek.decimal.zeroPadded,
			"%ww": _d.dayOfWeek.decimal.nonZeroPadded,
			"%wo": _d.dayOfWeek.ordinal,
			"%d": _d.dayOfMonth.decimal.zeroPadded,
			"%do": _d.dayOfMonth.ordinal,
			"%b": _d.month.short,
			"%B": _d.month.long,
			"%m": _d.month.decimal.zeroPadded,
			"%mo": _d.month.ordinal,
			"%y": _d.year.withoutCentury,
			"%Y": _d.year.withCentury,
			"%Z": _t.tzShort,
			"%z": _t.tzOffset.normal,
			"%M": _t.minute.decimal.zeroPadded,
			"%S": _t.seconds.decimal.zeroPadded,
			"%H": _t.hour24.decimal.zeroPadded,
			"%I": _t.hour12.decimal.zeroPadded,
			"%p": _t.meridiem.big,
			"%j": _d.dayOfYear.decimal.zeroPadded,
			"%c": datetime.fullDateAndTime,
			"%W": _d.week.decimal.nonZeroPadded,
			"%U": _d.week.decimal.zeroPadded,
			"%x": _d.apprDate,
			"%X": _t.apprTime,
			"%Q": _d.quarter.decimal.zeroPadded,
			"%Qo": _d.quarter.ordinal
		};
	const matcher = /(?<![a-zA-Z0-9%])%[a|A|w|d|b|B|m|y|Y|z|Z|M|S|H|I|p|j|c|W|U|x|X|Q](?![a-zA-Z0-9%])|(?<![a-zA-Z0-9%])%do|%wo|%ww|%mo|%Qo(?![a-zA-Z0-9%])/g;

	const formatReturn = replacer(formatString, allFormat, matcher);

	return formatReturn;
}

module.exports = useCFormat;
