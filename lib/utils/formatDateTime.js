/**
 * @fileoverview Module calls both parseDate and parseTime functions and returns their values.
 */

const { parseDate } = require("./parsers/parseDate");
const { parseTime } = require("./parsers/parseTime");

/**
 * @param {Date} date Date Object
 * @returns parsed date and time
 */
module.exports = function(date) {
	const _date = parseDate(date);
	const _time = parseTime(date);
	return {
		_date,
		_time,
		fullDateAndTime: date.toLocaleDateString()
	};
};
