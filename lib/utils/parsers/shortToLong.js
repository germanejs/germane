"use strict";
/**
 * @name shortToLong
 * @param {string}  month short month format
 * @param {string} day short day of the week
 * @returns {object} return long day of the week and long month
 */

module.exports = function(month = "Jan", day = "Mon") {
	const _m = {
		Jan: "January",
		Feb: "February",
		Mar: "March",
		Apr: "April",
		May: "May",
		Jun: "June",
		Jul: "July",
		Aug: "August",
		Sep: "September",
		Oct: "October",
		Nov: "November",
		Dec: "December"
	};
	const _d = {
		Mon: "Monday",
		Tue: "Tuesday",
		Wed: "Wednesday",
		Thu: "Thursday",
		Fri: "Friday",
		Sat: "Saturday",
		Sun: "Sunday"
	};
	return {
		month: {
			long: _m[month],
			short: month
		},
		day: {
			long: _d[day],
			short: day
		}
	};
};
