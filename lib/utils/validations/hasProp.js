/**
 * @author Simeon Akpanudo
 * @fileoverview utility func/mod to check if an object contains a prop
 */
"use strict";
/**
 *
 * @param {*} x Object
 * @param {*} y Property;
 * @returns {boolean} true or false if property y exists in object x
 */
module.exports = function(x, y) {
	return Object.prototype.hasOwnProperty.call(x, y);
};
