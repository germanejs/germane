/**
 * @author Simeon Akpanudo
 * @fileoverview Main argument and property type validation
 */

"use strict";

exports.isBool = function(argument) {
	const valid =
		argument !== undefined &&
		argument !== null &&
		typeof argument === "boolean" &&
		Object.prototype.toString.call(argument) === "[object Boolean]";
	if (!valid) return false;
	else return true;
};
exports.isString = function(argument) {
	const valid =
		argument !== undefined &&
		argument !== null &&
		typeof argument === "string" &&
		Object.prototype.toString.call(argument) === "[object String]";
	if (!valid) return false;
	else return true;
};
exports.isNumber = function(argument) {
	const valid =
		argument !== undefined &&
		argument !== null &&
		typeof argument === "number" &&
		Object.prototype.toString.call(argument) === "[object Number]";
	if (!valid) return false;
	else return true;
};
exports.isArray = function(argument) {
	const valid =
		argument !== undefined &&
		argument !== null &&
		Object.prototype.toString.call(argument) === "[object Array]";
	if (!valid) return false;
	else return true;
};
exports.isObject = function(argument) {
	const valid =
		Object.prototype.toString.call(argument) === "[object Object]" &&
		argument !== null &&
		typeof argument === "object" &&
		Object.prototype.toString.call(argument) !== "[object Array]";
	if (!valid) return false;
	else return true;
};
exports.isDate = function(argument) {
	const valid =
		argument !== undefined &&
		argument !== null &&
		typeof argument === "object" &&
		Object.prototype.toString.call(argument) === "[object Date]";
	if (!valid) return false;
	else return true;
};

exports.isDateOrNumber = function(argument) {
	const valid =
		(argument !== undefined &&
			argument !== null &&
			(typeof argument === "object" &&
				Object.prototype.toString.call(argument) ===
					"[object Date]")) ||
		(typeof argument === "number" &&
			Object.prototype.toString.call(argument) === "[object Number]");
	if (!valid) return false;
	else return true;
};
exports.isFunc = function(argument) {
	const valid =
		argument !== undefined &&
		argument !== null &&
		typeof argument === "function" &&
		Object.prototype.toString.call(argument) === "[object Function]";
	if (!valid) return false;
	else return true;
};
