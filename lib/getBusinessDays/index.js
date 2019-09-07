/**
 * @author Simeon Akpanudo
 * @fileoverview Contains getWorkdays function.. a function that returns an array of workdays in specified range.
 */
"use strict";

const { absFloor } = require("../utils/roundingMethods");
const {
	isDateOrNumber,
	isFunc
} = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date|Number} start Date || Timestamp to specify the starting date
 * @param {Date|Number} end Date || Timestamp to specify the ending date
 * @param {Function} callbackFn callback function in which timestamp can be returned or modified
 * @returns {Number[]} Returns an array of working days ranging from start date to end date in timestamps, with the start date and end date included
 * @example const workingDays = getWorkdays(Date.now(), new Date("2020 12 31"), a => new Date(a));
 */
function getWorkdays(start, end, callbackFn) {
	if (!isDateOrNumber(start) || !isDateOrNumber(end))
		throw new TypeError("Invalid Date");

	if (!validateDate(start) || !validateDate(end))
		throw new RangeError("Invalid Date");
	if (!isFunc(callbackFn))
		throw new TypeError(`${typeof callbackFn} is not function`);

	const newStart = new Date(start),
		newEnd = new Date(end);

	const startX = new Date(
		`${newStart.getFullYear()} ${newStart.getMonth() +
			1} ${newStart.getDate()}`
	);
	const endY = new Date(
		`${newEnd.getFullYear()} ${newEnd.getMonth() + 1} ${newEnd.getDate()}`
	);
	let date = [],
		dateToMilli;

	const difference = endY.getTime() - startX.getTime();

	const timestamp = absFloor(difference / (1000 * 3600 * 24));
	for (let i = 0; i <= timestamp; i++) {
		dateToMilli = i * 24 * 3600 * 1000;
		// checking for negative and positive dates
		const d =
			difference >= 0
				? new Date(newStart.getTime() + dateToMilli)
				: new Date(newStart.getTime() - dateToMilli);

		if (d.getDay() % 6 !== 0) {
			date.push(d.getTime());
		}
	}
	return date.map(a => callbackFn(a));
}

module.exports = getWorkdays;
