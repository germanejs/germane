/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within checks whether a given value is a date type.
 */

"use strict";

/**
 *
 * @param {*} x Value which validated to a date
 * @returns {Boolean} True or False depending on whether specified value is date type.
 */
function isDate(x) {
	return (
		x !== undefined &&
		x !== null &&
		Object.prototype.toString.call(x) === "[object Date]"
	);
}

module.exports = isDate;
