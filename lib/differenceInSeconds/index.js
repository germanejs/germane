/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in seconds.
 */

"use strict";

const { trunc } = require("../_util/evaluations/roundingMethods");
const differenceUsingTime = require("../_util/evaluations/differenceUsingTime");

/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in seconds.
 */
function differenceInSeconds(current, relative) {
  const timestamp = differenceUsingTime(current, relative, { includeTime: true });
  if (timestamp instanceof TypeError) return new TypeError(timestamp.message);
  if (timestamp instanceof RangeError) return new RangeError(timestamp.message);

  const totalSeconds = trunc(timestamp / 1000);

  return totalSeconds;
}

module.exports = differenceInSeconds;
