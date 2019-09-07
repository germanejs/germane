/**
 * @author Simeon Akpanudo
 * @fileoverview Module written to work with the difference function. though can be used with other function as needed
 * @description please use the docs at [difference.md]().
 */
"use strict";
const range = require("../range");
const { absFloor } = require("../roundingMethods");
const getFullYear = require("./getFullYear");

/**
 * @param {Number} fromYear Starting year.
 * @param {Number} toMonth Ending month
 * @param {Number} fromMonth Starting Month
 * @param {Number} toDate Ending date
 * @param {Number} fromDate Starting Date
 * @param {Number} totalDays Total Days.
 * @returns {Object}
 */

function fromNegativeYear(
	toYear,
	fromYear,
	toMonth,
	fromMonth,
	toDate,
	fromDate,
	totalDays
) {
	let years, months, weeks, days, dateDifference, totalMonths;

	dateDifference = toDate - fromDate;

	years =
		totalDays % 365 === 0
			? absFloor(totalDays / 365)
			: absFloor(totalDays / 365.25);

	const toFullYear = getFullYear(toYear),
		fromFullYear = getFullYear(fromYear);

	const checkdaysdiff =
		toFullYear[toMonth] === toDate && fromFullYear[fromMonth] === fromDate
			? fromMonth
			: dateDifference > 0
				? fromMonth - 1
				: fromMonth;

	months = (range(toMonth, 12) + checkdaysdiff) % 12;

	totalMonths = years * 12 + months;

	// Difference From Start Day (of month) To End Day (of month).
	let DFSDTED = toFullYear[toMonth] - toDate + fromDate;

	weeks = absFloor(
		fromDate < toDate && toDate !== toFullYear[toMonth]
			? toMonth - fromMonth === 0
				? dateDifference / 7
				: ((fromFullYear[fromMonth === 1 ? fromMonth : fromMonth - 1]  - toDate ) + fromDate) / 7
			: toDate === toFullYear[toMonth]
				? DFSDTED >= toFullYear[toMonth]
					? (DFSDTED - toFullYear[toMonth]) / 7
					: DFSDTED / 7
				: dateDifference / 7
	);

	days = absFloor(
		fromDate < toDate && toDate !== toFullYear[toMonth]
			? toMonth - fromMonth === 0
				? dateDifference % 7
				: (fromFullYear[fromMonth === 1 ? fromMonth : fromMonth - 1] - toDate + fromDate) % 7
			: toDate === toFullYear[toMonth]
				? DFSDTED >= fromMonth
					? (DFSDTED - toFullYear[toMonth]) % 7
					: DFSDTED % 7
				: dateDifference % 7
	);

	if (
		fromMonth === 2 &&
		fromDate === 28 &&
		toMonth === 1 &&
		(toDate === 28 || toDate === 30 || toDate === 31 || toDate === 29)
	) {
		months = 1;
		weeks = 0;
		days = 0;
	}

	return {
		years,
		months,
		weeks,
		days,
		totalMonths
	};
}

/**
 * @param {Number} toYear Ending year
 * @param {Number} toMonth Ending month
 * @param {Number} fromMonth Starting Month
 * @param {Number} toDate Ending date
 * @param {Number} fromDate Starting Date
 * @param {Number} totalDays Total Days.
 * @returns {Object}
 */

function fromPositiveYear(
	toYear,
	fromYear,
	toMonth,
	fromMonth,
	toDate,
	fromDate,
	totalDays
) {
	let years, months, weeks, days, dateDifference, totalMonths;

	years =
		totalDays % 365 === 0
			? absFloor(totalDays / 365)
			: absFloor(totalDays / 365.25);
	dateDifference = toDate - fromDate;

	const toFullYear = getFullYear(toYear),
		fromFullYear = getFullYear(fromYear);

	const checkdaysdiff =
		toFullYear[toMonth] === toDate && fromFullYear[fromMonth] === fromDate
			? toMonth
			: dateDifference < 0
				? toMonth - 1
				: toMonth;

	months = (range(fromMonth, 12) + checkdaysdiff) % 12;
	totalMonths = years * 12 + months;

	// Difference From Start Day (of month) to End Day (of month)
	let DFSDTED = fromFullYear[fromMonth] - fromDate + toDate;

	weeks = absFloor(
		toDate < fromDate && fromDate !== fromFullYear[fromMonth]
			? (toFullYear[toMonth === 1 ? toMonth : toMonth - 1] - fromDate + toDate) / 7
			: fromDate === fromFullYear[fromMonth]
				? DFSDTED >= fromFullYear[fromMonth]
					? (DFSDTED - fromFullYear[fromMonth]) / 7
					: DFSDTED / 7
				: dateDifference / 7
	);

	days = absFloor(
		toDate < fromDate && fromDate !== fromFullYear[fromMonth]
			? (toFullYear[toMonth === 1 ? toMonth : toMonth - 1] - fromDate + toDate) % 7
			: fromDate === fromFullYear[fromMonth]
				? DFSDTED >= fromFullYear[fromMonth]
					? (DFSDTED - fromFullYear[fromMonth]) % 7
					: DFSDTED % 7
				: dateDifference % 7
	);

	return {
		years,
		months,
		weeks,
		days,
		totalMonths
	};
}

/**
 *
 * @param {Number} toMonth Ending month
 * @param {Number} fromMonth Starting Month
 * @param {Number} toDate Ending date
 * @param {Number} fromDate Starting Date
 * @param {Number} totalDays Total Days.
 * @returns {Object}
 */
function fromSameYear(
	toYear,
	fromYear,
	toMonth,
	fromMonth,
	toDate,
	fromDate,
	totalDays
) {
	let years, months, weeks, days, dateDifference, totalMonths;

	dateDifference =
		toMonth - fromMonth >= 0 ? toDate - fromDate : fromDate - toDate;

	years =
		totalDays % 365 === 0
			? absFloor(totalDays / 365)
			: absFloor(totalDays / 365.25);

	const toFullYear = getFullYear(toYear),
		fromFullYear = getFullYear(fromYear);

	const checkdaysdiff =
		toMonth - fromMonth > 0
			? toFullYear[toMonth] === toDate &&
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			  fromFullYear[fromMonth] === fromDate
				? toMonth
				: dateDifference <= 0
					? toMonth - 1
					: toMonth
			: toFullYear[toMonth] === toDate &&
		
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			  fromFullYear[fromMonth] === fromDate
				? fromMonth
				: dateDifference >= 0
					? fromMonth
					: fromMonth - 1;

	// divides by 28 if starting or ending month is february and dates are the same.
	months =
		(fromMonth === 2 || toMonth === 2) && fromDate === toDate
			? absFloor(totalDays / 28)
			: toMonth - fromMonth > 0
				? (range(fromMonth, 12) + checkdaysdiff) % 12
				: toMonth - fromMonth === 0
					? 0
					: (range(toMonth, 12) + checkdaysdiff) % 12;

	totalMonths = years * 12 + months;

	// Difference From Start Day (of month) To End Day (of month).
	let DFSDTED =
		toMonth - fromMonth > 0
			? fromFullYear[fromMonth] - fromDate + toDate
			: toMonth === fromMonth
				? dateDifference
				: toFullYear[toMonth] - toDate + fromDate;

	weeks = absFloor(
		// if (positive dates)
		toMonth - fromMonth >= 0
			? toDate < fromDate && fromDate !== fromFullYear[fromMonth]
				?  toMonth - fromMonth === 0
					? dateDifference / 7
					: (toFullYear[toMonth === 1 ? toMonth : toMonth - 1] - fromDate + toDate) / 7
				: fromDate === fromFullYear[fromMonth]
					? DFSDTED >= fromFullYear[fromMonth]
						? (DFSDTED - fromFullYear[fromMonth]) / 7
						: DFSDTED / 7
					: dateDifference / 7
			: // else (negative dates)
			fromDate < toDate &&  toDate !== toFullYear[toMonth]
				? toMonth - fromMonth === 0
					? dateDifference / 7
					: ((fromFullYear[fromMonth === 1 ? fromMonth : fromMonth - 1]  - toDate ) + fromDate) / 7
				:  toDate === toFullYear[toMonth]
					? DFSDTED >= fromMonth
						? (DFSDTED - toFullYear[toMonth]) / 7
						: DFSDTED / 7
					: dateDifference / 7
	);

	days = absFloor(
		// if (positive dates)
		toMonth - fromMonth >= 0
			? toDate < fromDate && fromDate !== fromFullYear[fromMonth]
				? toMonth - fromMonth === 0
					? dateDifference % 7
					: (toFullYear[toMonth === 1 ? toMonth : toMonth - 1] - fromDate + toDate) % 7
				: fromDate === fromFullYear[fromMonth]
					? DFSDTED >= fromFullYear[fromMonth]
						? (DFSDTED - fromFullYear[fromMonth]) % 7
						: DFSDTED % 7
					: dateDifference % 7
			: // else (negative dates)
			fromDate < toDate &&  toDate !== toFullYear[toMonth]
				? toMonth - fromMonth === 0
					? dateDifference % 7
					: ((fromFullYear[fromMonth === 1 ? fromMonth : fromMonth - 1]  - toDate ) + fromDate) % 7
				:  toDate === toFullYear[toMonth]
					? DFSDTED >= fromMonth
						? (DFSDTED - toFullYear[toMonth]) % 7
						: DFSDTED % 7
					: dateDifference % 7
	);


	if (
		fromMonth === 2 &&
		fromDate === 28 &&
		toMonth === 1 &&
		(toDate === 28 || toDate === 30 || toDate === 31 || toDate === 29)
	) {
		months = 1;
		totalMonths = 1;
		weeks = 0;
		days = 0;
	}

	return {
		years,
		months,
		weeks,
		days,
		totalMonths
	};
}

module.exports = {
	fromNegativeYear,
	fromPositiveYear,
	fromSameYear
};
