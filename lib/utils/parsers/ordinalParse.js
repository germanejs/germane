/**
 * @author Simeon Akpanudo
 */
"use strict";
/**
 * @param {number} number
 * @returns {string} The argument (number) and its ordinal;
 * @description An ordinal is the position of a number, the last two letters of the number when spelt in words in used to provide the ordinal;
 * @author Simeon Akpanudo
 */
exports.ordinalParse = function(number) {
	const numToStr = String(number);
	const lastIndex = numToStr.slice(numToStr.length - 2, numToStr.length);
	const _nth = RegExp(/^(?:[1]+[0-9])|(?:[4-9]$)|(?:[0-9]+[4-9|0])|(?:[0]$)/);
	const _nonNth = RegExp(/^(?:[1-3]$)|(?:[2-9|0]+[1-3])/);
	const _nd = RegExp(/^(?:[2]$)|(?:[2-9|0]+[2])/);
	const _st = RegExp(/^(?:[1]$)|(?:[2-9|0]+[1])/);
	const _rd = RegExp(/^(?:[3]$)|(?:[2-9|0]+[3])/);

	const withOrdinal = numToStr + "%s";

	return withOrdinal.replace("%s", function() {
		if (lastIndex.match(_nth)) {
			return "th";
		} else if (lastIndex.match(_nonNth)) {
			if (lastIndex.match(_nd)) return "nd";
			else if (lastIndex.match(_rd)) return "rd";
			else if (lastIndex.match(_st)) return "st";
		} else {
			return numToStr;
		}
	});
};
