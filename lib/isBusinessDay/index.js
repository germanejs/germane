/**
 * @author Simeon Akpanudo
 * @fileoverview Checks if specified date is a work/business day. range (1, 5);
 */
"use strict";
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const validateDate = require("../utils/validations/validateDate");
/**
 * @param {Date|Number} date Timestamp or a date object.
 * @name isWorkday
 * defaults to Date.now();
 * @returns {Boolean} returns truthy or falsy values (true || false). depending on whether day specified is a working / business day
 */
function isWorkday(date) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");
	const nDate = new Date(date);

	const day = nDate.getDay();

	return day % 6 !== 0;
}

module.exports = isWorkday;
