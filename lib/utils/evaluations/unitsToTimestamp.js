/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within are created to work with the add and subtract date functions.
 */
"use strict";
const getFullYear = require("./getFullYear");
/**
 *
 * @param {Date} start
 * @param {Number} months
 * @returns {Number} returns the number of milliseconds from the first date and the new date with the added month
 */
function monthsToTimestamp(start, months, type = "sub") {
	let startYear = start.getFullYear(),
		startMonth = start.getMonth() + 1,
		year,
		month,
		day;

	if (type === "sub") {
		const m = Math.abs(Math.floor(months % 12) - (startMonth + 12));
		year = startYear - Math.floor(months / 12);
		month = m > 12 ? m % 12 : m;
		console.log(Math.floor((months % 12) + startMonth));
	} else {
		year = startYear + Math.floor(months / 12);
		month = Math.abs(
			((months % 12) + startMonth) % 12 === 0
				? 12
				: ((months % 12) + startMonth) % 12
		);
	}
	day = start.getDate();
	const end = new Date(
		`${year} ${month} ${day} ${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`
	);
	console.log(end, month);
	return end - start;
}

/**
 *
 * @param {Date} start
 * @param {Number} end
 * @returns {Number} returns the number of milliseconds from the first date and the new date with the added years
 */

function yearsToTimestamp(start, end, type = "add") {
	let newStart = start.getFullYear() + end,
		year = 0,
		y = start.getFullYear();

	if (end > 0) {
		if (type === "sub") {
			for (let i = 0; i < newStart - start.getFullYear(); i += 1) {
				year =
					year +
					Object.values(getFullYear(y--))
						.slice(0, 12)
						.reduce((m, n) => (n += m), 0);
			}
		} else {
			for (let i = 0; i < newStart - start.getFullYear(); i += 1) {
				year =
					year +
					Object.values(getFullYear(start.getFullYear() + i))
						.slice(0, 12)
						.reduce((m, n) => (n += m), 0);
			}
		}
	}

	return year * 1000 * 3600 * 24;
}
// Todo: => Check function usage {keep or delete}
// function getMonthOrdinal(start, end) {
// 	const m = ((end % 12) + start) % 12;
// 	return m === 0 ? 12 : m;
// }
module.exports = { monthsToTimestamp, yearsToTimestamp };
