/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in weeks.
 */

"use strict";

const { trunc } = require("../_util/evaluations/roundingMethods");
const differenceUsingTime = require("../_util/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in weeks.
 */
function differenceInWeeks(base, relative) {
  const timestamp = differenceUsingTime(base, relative, { includeTime: true });

  if (timestamp instanceof TypeError) return new TypeError(timestamp.message);
  if (timestamp instanceof RangeError) return new RangeError(timestamp.message);

  const totalWeeks = trunc(timestamp / (24 * 1000 * 3600) / 7);

  return totalWeeks;
}

module.exports = differenceInWeeks;
