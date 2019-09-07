/**
 * @author Simeon Akpanudo
 * @fileoverview Main time parsing module
 */
"use strict";

/**
 *
 * @param {Date} date Date object is used to parse time!
 * @description these function parses the date object, gets the time and returns all information related to time
 * @returns {Object} returns full-time|hour24|hour12|minutes|seconds|timezoneOffset|timezone-name|meridiem|locale-datetime(defaults to machine dateTime)
 */
exports.parseTime = function(date) {
	const _dateToString = "" + date;
	const _all = _dateToString.split(" ");

	const tzabbr = [];
	const tzname = _dateToString.split("(")[1].replace(")", "");
	const tzname_spl = tzname.split(" ");
	for (let i = 0; i <= tzname_spl.length - 1; i++) {
		tzabbr.push(tzname_spl[i][0]);
	}
	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();
	const tzoffset = _all[5].slice(3, _all[5].length);
	const _modHour = hour % 12;
	const hour12 = _modHour === 0 ? "12" : _modHour;

	const time = {
		full: _all[4],
		hour24: {
			decimal: {
				zeroPadded: ("" + hour).padStart(2, "0"),
				nonZeroPadded: "" + hour
			}
		},
		hour12: {
			decimal: {
				zeroPadded: ("" + hour12).padStart(2, 0),
				nonZeroPadded: "" + hour12
			}
		},
		minute: {
			decimal: {
				zeroPadded: ("" + min).padStart(2, 0),
				nonZeroPadded: "" + min
			}
		},
		seconds: {
			decimal: {
				zeroPadded: ("" + sec).padStart(2, 0),
				nonZeroPadded: "" + sec
			}
		},
		milliseconds: {
			decimal: {
				zeroPadded: ("" + date.getMilliseconds()).padStart(3, "0")
			}
		},
		meridiem: {
			small: hour < 12 ? "am" : "pm",
			big: hour < 12 ? "AM" : "PM",
			dotted: hour < 12 ? "a.m" : "p.m"
		},
		timestamp: {
			milliseconds: "" + date.getTime(),
			seconds: "" + date.getTime() / 1000
		},
		apprTime: date.toLocaleTimeString(),
		tzOffset: {
			normal: tzoffset,
			colonized:
				tzoffset.slice(0, 3) + ":" + tzoffset.slice(3, tzoffset.length)
		},
		tzLong: "" + tzname,
		tzShort: tzabbr.join("")
	};

	return time;
};
