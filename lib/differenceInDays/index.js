/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const differenceUsingTime = require("../_util/evaluations/differenceUsingTime");
const { trunc } = require("../_util/evaluations/roundingMethods");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInDays(base, relative) {
  const timestamp = differenceUsingTime(base, relative, { includeTime: false });
  if (timestamp instanceof TypeError) return new TypeError(timestamp.message);
  if (timestamp instanceof RangeError) return new RangeError(timestamp.message);

  const totalDays = trunc(timestamp / (24 * 1000 * 3600));

  return totalDays;
}

module.exports = differenceInDays;
