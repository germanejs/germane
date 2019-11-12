/**
 * @author Simeon Akpanudo
 * @fileoverview Validation of date type
 */

"use strict";

const { isGermane } = require("./../validatePropTypes");

/**
 * @param {Date|Number|typeof germane} date Germane Date function or Date Object or typeof Number.
 * @returns Invalid date || true.
 * @name validateDate
 */
function validateDate(date) {
  if (
    Object.prototype.toString.call(date) !== "[object Date]"
    && Object.prototype.toString.call(date) !== "[object Number]"
    && !isGermane(date)
  ) return false;

  const x = new Date(date);

  if (!isGermane(date) && /Invalid Date/.test(String(x))) return false;
  return true;
}

module.exports = validateDate;
