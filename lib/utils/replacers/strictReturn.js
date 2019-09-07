/**
 * @author Simeon Akpanudo
 * @fileoverview
 */
"use strict";
const pluralise = require("./pluralise");

/**
 *
 * @param {*} obj Object with date related integer values.
 * @param {Array} aligner Array of positional aligners(string).. determines hour object is aligned
 * @returns {String} returns a string of correctly align date types.
 */
const strictReturn = function(obj, aligner) {
	const newObj = Object.assign({}, obj);
	const newAligner = aligner.filter(a => {
		if (newObj[a] > 0) return a;
	});

	const formatString = newAligner
		.map(a => a.padStart(a.length + 1, "%"))
		.join(" ")
		.trim();

	let newStr = formatString;

	newStr = newAligner.reduce(function(a, b) {
		const nRegex = RegExp(`%${b}`, "g");

		a = a.replace(nRegex, function() {
			if (newAligner.indexOf(b) !== newAligner.length - 1) {
				return (
					newObj[b] +
					" " +
					pluralise(b.substring(0, b.length - 1), newObj[b]) +
					","
				);
			} else {
				return (
					newObj[b] +
					" " +
					pluralise(b.substring(0, b.length - 1), newObj[b])
				);
			}
		});
		return a;
	}, newStr);
	return newStr;
};

module.exports = strictReturn;
