/**
 * @author Simeon Akpanudo
 * @fileoverview Modules performs the rounding and abs Math operations on a number type
 */
"use strict";
/**
 *
 * @param {Number} num
 * @returns {Number} Returns a rounded positive integer.
 */

module.exports = {
	absFloor: num => Math.floor(Math.abs(num)),
	absCeil: num => Math.ceil(Math.abs(num)),
	floor: num => Math.floor(num),
	ceil: num => Math.ceil(num),
	trunc: num => Math.trunc(num)
};
