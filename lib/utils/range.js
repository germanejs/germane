/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {number} current starting point. defaults to 1,
 * @param {number} end ending range. defaults to 1,
 * @param {number} step determines how range should be calculated. defaults to 1,
 * @description These function takes 3 arguments
 * (current, end, step) and returns the total step it takes from the
 * current to the ending number, putting in consideration the step.
 * @returns {number} total steps(range) it takes from the current to the end;
 * @name range
 * @author Simeon Akpanudo
 */

function range(current, end, step = 1) {
  return Math.ceil((end - current) / step);
}
module.exports = range;
