/**
 * @author Simeon Akpanudo
 * @fileoverview Function returns values of starting date as to current date
 */
"use strict";
const { findQuarter, findQuarterEnd } = require("./findQuarter");
const evalTimestamp = require("./evalTimestamp");
const difference = require("./difference");
const dayOfYear = require("./dayOfYear");

/**
 * @param {Date} date Date object.
 */
function startOfQuarterHandler(date) {
	const year = date.getFullYear();
	const dInY = dayOfYear(year, date.getMonth() + 1, date.getDate());

	const startOfGivenYear = new Date(`${year} 01 01 00:00:00`);
	const { quarter } = findQuarter(dInY, year);

	const prevQuarterEnd = findQuarterEnd(quarter - 1, year);
	const newDate = new Date(
		startOfGivenYear.getTime() + prevQuarterEnd * 24 * 1000 * 3600
	);
	const nowTillQEnd = date.getTime() - newDate.getTime();

	return Object.assign(
		{},
		evalTimestamp(nowTillQEnd),
		difference(date, newDate)
	);
}
function startOfMonthHandler(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	const newDate = new Date(`${year} ${month} 01 00:00:00`);

	const nowTillQEnd = date.getTime() - newDate.getTime();
	return Object.assign(
		{},
		evalTimestamp(nowTillQEnd),
		difference(date, newDate)
	);
}
function startOfDayHandler(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	const newDate = new Date(`${year} ${month} ${date.getDate()} 00:00:00`);
	const timestamp = date.getTime() - newDate.getTime();
	return Object.assign({}, evalTimestamp(timestamp));
}
function startOfHourHandler(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const hour = date.getHours();
	const newDate = new Date(
		`${year} ${month} ${date.getDate()} ${hour}:00:00`
	);

	const timestamp = date.getTime() - newDate.getTime();
	return Object.assign({}, evalTimestamp(timestamp));
}
function startOfWeekHandler(date) {
	const year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDay();

	const nd = (0 - day) * 1000 * 3600 * 24;
	const newDate =
		new Date(`${year} ${month} ${date.getDate()} 00:00:00`).getTime() + nd;
	const timestamp = date.getTime() - new Date(newDate).getTime();

	return Object.assign(
		{},
		evalTimestamp(timestamp),
		difference(date, newDate)
	);
}
function startOfYearHandler(date) {
	const year = date.getFullYear();
	const newDate = new Date(`${year} 01 01 00:00:00`);
	const nowTillQEnd = date.getTime() - newDate.getTime();
	return Object.assign(
		{},
		evalTimestamp(nowTillQEnd),
		difference(date, newDate)
	);
}

exports.startOfDayHandler = startOfDayHandler;
exports.startOfHourHandler = startOfHourHandler;
exports.startOfMonthHandler = startOfMonthHandler;
exports.startOfWeekHandler = startOfWeekHandler;
exports.startOfQuarterHandler = startOfQuarterHandler;
exports.startOfYearHandler = startOfYearHandler;
