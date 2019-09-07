/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in weeks.
 */

"use strict";
const { isString } = require("../utils/validations/validatePropTypes");
const inArray = require("../utils/validations/inArray");
const {
	ceil,
	floor,
	trunc,
	absFloor,
	absCeil
} = require("../utils/roundingMethods");
const hasProp = require("../utils/validations/hasProp");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @param {Date | Number} options options {includeTime: true or false, roundingMethod: 'absFloor | absCeil | floor | trunc | ceil'}
 * @throws TypeError
 * @returns {Number} difference between dates in weeks.
 */
function differenceInWeeks(dateOne, dateTwo, options = { includeTime: false }) {
	const timestamp = differenceUsingTime(dateOne, dateTwo, options);
	if (hasProp(options, "roundingMethod") && !isString(options.roundingMethod))
		throw new RangeError(
			"Expects property roundingMethod to be a one of these: 'absFloor | absCeil | floor | trunc | ceil'"
		);

	const roundingTypes = ["absfloor", "absceil", "floor", "trunc", "ceil"];
	let useRoundingMethod;

	const roundingFunctions = {
		absfloor: absFloor,
		absceil: absCeil,
		trunc: trunc,
		floor: floor,
		ceil: ceil
	};
	if (options.roundingMethod) {
		if (!inArray(roundingTypes, options.roundingMethod.toLowerCase())) {
			useRoundingMethod = roundingFunctions["absfloor"];
		} else {
			useRoundingMethod =
				roundingFunctions[options.roundingMethod.toLowerCase()];
		}
	} else {
		useRoundingMethod = roundingFunctions["absfloor"];
	}

	const totalWeeks = useRoundingMethod(timestamp / (24 * 1000 * 3600) / 7);

	return totalWeeks;
}

module.exports = differenceInWeeks;
