/**
 * @author Simeon Akpanudo
 * @fileoverview Function(s) validates a given date.
 */

"use strict";
const validateDate = require("../utils/validations/validateDate");
const { isDate } = require("../utils/validations/validatePropTypes");

/**
 *
 * @param {Date} date Date which is to be validated
 * @returns {Boolean} True or False depending on whether specified date is a valid date or not.
 * @name isValid
 */
function isValid(date) {
	return isDate(date) && validateDate(date);
}

module.exports = isValid;
