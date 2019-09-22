/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 * @param {number} start starting point. defaults to 1,
 * @param {number} end ending range. defaults to 1,
 * @param {number} step determines how range should be calculated. defaults to 1,
 * @description These function takes 3 arguments
 * (start, end, step) and returns the total step it takes from the start to the ending number,
 * putting in consideration the step.
 * @returns {number} total steps(range) it takes from the start to the end;
 * @name range
 * @author Simeon Akpanudo
 */

function range(start, end, step = 1) {
  let m = Math.ceil((end - start) / step);
  return m;
}
module.exports = range;
