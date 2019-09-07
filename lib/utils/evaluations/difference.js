/**
 * @author Simeon Akpanudo
 */
"use strict";

const {
	fromSameYear,
	fromNegativeYear,
	fromPositiveYear
} = require("./evalDateDifference");

/**
 * @param {Number | Date} from Starting date or timestamp
 * @param {Number | Date} to Ending date or timestamp
 * @returns {Object} Returns object containing difference between both date
 */
function difference(from, to) {
	const newTo = new Date(to),
		newFrom = new Date(from),
		toMonth = newTo.getMonth() + 1,
		fromMonth = newFrom.getMonth() + 1,
		toYear = newTo.getFullYear(),
		fromYear = newFrom.getFullYear(),
		toDate = newTo.getDate(),
		fromDate = newFrom.getDate();

	const fromTime = new Date(`${fromYear} ${fromMonth} ${fromDate} `);
	const toTime = new Date(`${toYear} ${toMonth} ${toDate} 00:00:00`);

	const timestamp = toTime.getTime() - fromTime.getTime();
	const totalDays = Math.round(timestamp / (3600 * 1000 * 24));

	const yeardiff = toYear - fromYear;
	if (yeardiff === 0) {
		return Object.assign(
			{},
			fromSameYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			),
			{ totalDays }
		);
	} else if (yeardiff > 0) {
		return Object.assign(
			{},
			fromPositiveYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			),
			{ totalDays }
		);
	} else if (yeardiff < 0) {
		return Object.assign(
			{},
			fromNegativeYear(
				toYear,
				fromYear,
				toMonth,
				fromMonth,
				toDate,
				fromDate,
				totalDays
			),
			{ totalDays }
		);
	}
}

module.exports = difference;
