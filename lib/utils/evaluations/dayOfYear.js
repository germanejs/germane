/**
 * @author Simeon Akpanudo
 */
"use strict";
const getFullYear = require("./getFullYear");

module.exports = function(
	year = new Date("1970 01 01").getFullYear(),
	month = new Date("1970 01 01").getMonth() + 1,
	day = new Date("1970 01 01").getDate()
) {
	const all = getFullYear(year);
	const calculateDays = Object.values(all)
		.slice(0, month - 1)
		.reduce((x, y) => (y += x), 0);
	return calculateDays + day;
};
