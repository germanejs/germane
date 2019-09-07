"use strict";
/**
 * @param {Number} year year value
 */
module.exports = function(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
