/**
 * @author Simeon Akpanudo
 * @fileoverview Functions within checks whether a given value is a date type.
 */

"use strict";

const validateDate = require("../utils/validations/validateDate");
const { isNumber } = require("../utils/validations/validatePropTypes");
/**
 *
 * @param {*} x Value which validated to a date
 * @returns {Boolean} True or False depending on whether specified value is date type.
 */
function isDate(x) {
  return !isNumber(x) && validateDate(x);
}

module.exports = isDate;
