/**
 * @author Simeon Akpanudo
 * @fileoverview Epoch function turn a given date to unix epoch timestamp.
 */

"use strict";

const getFullYear = require("./getFullYear");

/**
 *
 * @param {Number} year Year
 * @param {Number} month Month
 * @param {Number} day Date
 * @param {Number} hour Hours
 * @param {Number} minute Minutes
 * @param {Number} second Seconds
 * @param {Number} ms Milliseconds
 * @param {Number} tz Timezone offset in seconds **example** __UTC+1 = 1 hour after the UTC time which is equivalent to 60 minutes__.
 * @description Epoch function uses the specified datetime units and returns a unix timestamp of the given date as an ISO8601 format. **Note**: if not parameter is passed the function simple returns 0. meaning that the default parameters is 1970 01 01 00:00:00.
 * @example ```javascript
 *  epoch(2019, 4, 1, 4, 7, 23, 500, -60) //=> 1554091643500
 * // Which is equivalent to ISO8601 format 2019-04-01T03:07:23.500Z.
 * ```
 */
function epoch(
	year = 1970,
	month = 1,
	day = 1,
	hour = 0,
	minute = 0,
	second = 0,
	ms = 0,
	tz = 0
) {
	const unixEpoch = {
		year: 1970,
		month: 1,
		day: 1,
		hour: Math.floor(tz / 60) + hour,
		minute: Math.floor(tz % 60) + minute,
		second: second,
		ms: ms
	};
	let mutableSeconds = 0,
		monthDays,
		unixDay,
		unixHour,
		unixMinute,
		unixDateTime;
	const diffInYear = year - unixEpoch.year;
	mutableSeconds += Math.trunc(diffInYear * 365.25) * 86400;
	monthDays =
		Object.values(getFullYear(year))
			.slice(0, month - 1)
			.reduce((u, e) => (e += u), 0) * 86400;
	unixDay = day * 86400 - 86400;
	unixHour = unixEpoch.hour * 3600;
	unixMinute = unixEpoch.minute * 60;

	unixDateTime =
		(mutableSeconds +
			unixHour +
			unixMinute +
			monthDays +
			unixDay +
			second) *
			1000 +
		ms;

	// mutableSeconds += (unixDay + monthDays);

	return {
		diffInYear,
		mutableSeconds,
		monthDays,
		unixDay,
		unixHour,
		unixMinute,
		second,
		date: new Date(unixDateTime),
		uh: unixEpoch.hour,
		unixDateTime
	};
}

module.exports = epoch;
