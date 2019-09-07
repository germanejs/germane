/**
 * @author Simeon Akpanudo
 * @fileoverview Validation of date time
 */
"use strict";
/**
 * @param {Date|Number} date Date Object or typeof Number.
 * @returns Invalid date || true.
 * @name validateDate
 */
function validateDate(date) {
	if (
		Object.prototype.toString.call(date) !== "[object Date]" &&
		Object.prototype.toString.call(date) !== "[object Number]"
	)
		return false;

	const x = new Date(date);

	if ("" + x === "Invalid Date") return false;
	else return true;
}

module.exports = validateDate;
