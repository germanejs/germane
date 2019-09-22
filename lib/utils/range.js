/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {number} startDate starting point. defaults to 1,
 * @param {number} end ending range. defaults to 1,
 * @param {number} step determines how range should be calculated. defaults to 1,
 * @description These function takes 3 arguments
 * (startDate, end, step) and returns the total step it takes from the
 * startDate to the ending number, putting in consideration the step.
 * @returns {number} total steps(range) it takes from the startDate to the end;
 * @name range
 * @author Simeon Akpanudo
 */

function range(startDate, end, step = 1) {
  return Math.ceil((end - startDate) / step);
}
module.exports = range;
