/**
 * @author Simeon Akpanudo
 * @fileoverview Returns difference between given date and the end of its dat.
 */

"use strict";
const { endOfDayHandler } = require("../utils/evaluations/endOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const toPriority = require("../utils/replacers/toPriority");
const validateDate = require("../utils/validations/validateDate");
/**
 *
 * @param {Date | Number} date
 */
function endOfDay(date = Date.now()) {
	if (!isDateOrNumber(date)) throw new TypeError("Invalid Date");

	if (!validateDate(date)) throw new RangeError("Invalid Date");

	const dayHdr = endOfDayHandler(new Date(date));

	const returnValue = toPriority(dayHdr, ["hours", "minutes", "seconds"]);
	return `In ${returnValue}`;
}

module.exports = endOfDay;
