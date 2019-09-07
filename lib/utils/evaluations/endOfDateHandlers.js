/**
 * @author Simeon Akpanudo
 */
"use strict";

const evalTimestamp = require("./evalTimestamp");
const getFullYear = require("./getFullYear");
const dayOfYear = require("./dayOfYear");
const { findQuarterEnd, findQuarter } = require("./findQuarter");
const difference = require("./difference");

/**
 *
 * @param {Date} date Date object or timestamp;
 */
exports.endOfQuarterHandler = function(date) {
	const year = date.getFullYear();
	const dInY = dayOfYear(year, date.getMonth() + 1, date.getDate());

	const { quarter } = findQuarter(dInY, year);
	const endOfPrevYear = new Date(`${year - 1} 12 31 23:59:59`);

	// const timestamp =
	// 	new Date(newDate.setDate(newDate.getDate() + quarterEnd)) - date;
	const quarterEnd = findQuarterEnd(quarter, year);
	const newDate = new Date(
		endOfPrevYear.getTime() + quarterEnd * 24 * 1000 * 3600
	);
	const timestamp = newDate.getTime() - date.getTime();
	return Object.assign(
		{},
		evalTimestamp(timestamp),
		difference(date, newDate)
	);
};

/**
 *
 * @param {Date} date Date object or timestamp;
 */
exports.endOfMonthHandler = function(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	const eDay = getFullYear(year)[month];
	const newDate = new Date(`${year} ${month} ${eDay} 23:59:59`);

	const timestamp = newDate - date;
	return Object.assign(
		{},
		evalTimestamp(timestamp),
		difference(date, newDate)
	);
};

/**
 *
 * @param {Date} date Date object or timestamp;
 */
exports.endOfDayHandler = function(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	const newDate = new Date(`${year} ${month} ${date.getDate()} 23:59:59`);

	const timestamp = newDate - date;
	return Object.assign({}, evalTimestamp(timestamp));
};
/**
 *
 * @param {Date} date Date object or timestamp;
 */
exports.endOfHourHandler = function(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const hour = date.getHours();
	const newDate = new Date(
		`${year} ${month} ${date.getDate()} ${hour}:59:59`
	);

	const timestamp = newDate.getTime() - date.getTime();
	return Object.assign({}, evalTimestamp(timestamp));
};

/**
 *
 * @param {Date} date Date object or timestamp;
 */
exports.endOfWeekHandler = function(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDay();
	const newDate = new Date(`${year} ${month} ${date.getDate()} 23:59:59`);
	const dOfM = (6 - day) * 24 * 3600 * 1000;
	const timestamp = newDate.getTime() + dOfM - date.getTime();
	return Object.assign(
		{},
		evalTimestamp(timestamp),
		difference(date, new Date(newDate.getTime() + dOfM))
	);
};

/**
 *
 * @param {Date} date Date object or timestamp;
 */
exports.endOfYearHandler = function(date) {
	const year = date.getFullYear();
	const newDate = new Date(`${year} 12 31 23:59:59`);
	const timestamp = newDate - date;
	return Object.assign(
		{},
		evalTimestamp(timestamp),
		difference(date, newDate)
	);
};
