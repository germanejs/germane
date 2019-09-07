/**
 * @author Simeon Akpanudo
 * @fileoverview Main date parsing module
 */
"use strict";
const dayOfYear = require("../evaluations/dayOfYear");
const shortToLong = require("./shortToLong");
const { ordinalParse } = require("./ordinalParse");
const { findQuarter } = require("../evaluations/findQuarter");

/**
 *
 * @param {Date} date Date object
 * @description these function parse a date and returns all date related values.
 */

exports.parseDate = function(date) {
	const xDate = new Date(date);
	const _dateToString = "" + xDate;
	const _all = _dateToString.split(" ");
	const _l = _all.slice(0, 4);
	const _short2Long = shortToLong(_l[1], _l[0]);
	const dOfY = dayOfYear(
		xDate.getFullYear(),
		xDate.getMonth() + 1,
		xDate.getDate()
	);
	
	const month = xDate.getMonth() + 1;
	const quarter = findQuarter(dOfY, xDate.getFullYear()).quarter;
	const _dOfM = xDate.getDate();
	const weekOfYear = Math.floor(dOfY / 7);
	const formattedDate = {
		dayOfWeek: {
			long: _short2Long.day.long,
			short: _short2Long.day.short,
			ordinal: ordinalParse(xDate.getDay()),
			two: _short2Long.day.short.substring(0, 2),
			decimal: {
				nonZeroPadded: "" + xDate.getDay(),
				zeroPadded: xDate
					.getDay()
					.toString()
					.padStart(2, "0")
			}
		},
		month: {
			long: _short2Long.month.long,
			short: _short2Long.month.short,
			ordinal: ordinalParse(month),
			decimal: {
				nonZeroPadded: "" + month,
				zeroPadded: ("" + month).padStart(2, "0")
			}
		},
		year: {
			withCentury: _l[3],
			withoutCentury:
				xDate.getFullYear() > 1000
					? ("" + xDate.getFullYear()).slice(2, 4)
					: xDate.getFullYear()
		},
		apprDate: xDate.toLocaleDateString(),
		dayOfYear: {
			ordinal: ordinalParse(parseInt(dOfY, 10)),
			decimal: {
				zeroPadded: ("" + dOfY).padStart(3, "0"),
				nonZeroPadded: "" + dOfY
			}
		},
		dayOfMonth: {
			ordinal: ordinalParse(_dOfM),
			decimal: {
				zeroPadded: ("" + _dOfM).padStart(2, "0"),
				nonZeroPadded: "" + _dOfM
			}
		},
		quarter: {
			ordinal: ordinalParse(quarter),
			decimal: {
				zeroPadded: ("" + quarter).padStart(2, "0")
			}
		},
		week: {
			ordinal: ordinalParse(weekOfYear),
			decimal: {
				zeroPadded:
					weekOfYear < 10 ? "" + weekOfYear : String(weekOfYear),
				nonZeroPadded: String(weekOfYear)
			}
		}
	};

	return formattedDate;
};
