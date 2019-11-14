/**
 * @author Simeon Akpanudo
 * @fileoverview Returns boolean values checking whether dates are same or not (not including time)
 */

"use strict";

/**
 *
 * @param {Date} base First date
 * @param {Date} relative Second date
 * @returns {Boolean} true if dates are same and false if date are not equal.
 */
function isSameDate(base, relative) {
  const baseDate = {
    date: base.getDate(),
    month: base.getMonth(),
    year: base.getFullYear(),
  };
  const relativeDate = {
    date: relative.getDate(),
    month: relative.getMonth(),
    year: relative.getFullYear(),
  };
  return (
    baseDate.date === relativeDate.date
    && baseDate.month === relativeDate.month
    && baseDate.year === relativeDate.year
  );
}

module.exports = isSameDate;
