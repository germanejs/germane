/**
 * @fileoverview contains function that handles the turning of days to months
 * Note: the function below doesn't take into account the subtility of february to january, it does a simple and straight forward calculation.
 * for more information on how it is used, please check the evalDateDifference function, in these same folder.
 */

"use strict";
/**
 * @param {Number} days
 * @returns {Number}
 */
function daysToMonths(days) {
	// 400 years have 146097 days (taking into account leap year rules)
	// 400 years have 12 months === 4800
	return (days * 4800) / 145097;
}

module.exports = daysToMonths;
