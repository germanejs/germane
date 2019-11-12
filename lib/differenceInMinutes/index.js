/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in minutes.
 */

"use strict";

const { trunc } = require("../_util/evaluations/roundingMethods");
const differenceUsingTime = require("../_util/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second dates
 * @returns {Number | TypeError | RangeError} difference between dates minutes.
 */
function differenceInMinutes(base, relative) {
  const timestamp = differenceUsingTime(base, relative, { includeTime: true });

  if (timestamp instanceof TypeError) return new TypeError(timestamp.message);
  if (timestamp instanceof RangeError) return new RangeError(timestamp.message);

  const totalMinutes = trunc(timestamp / 1000 / 60);

  return totalMinutes;
}

module.exports = differenceInMinutes;
