/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in seconds.
 */

"use strict";

const { trunc } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");

/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in seconds.
 */
function differenceInSeconds(current, relative) {
  const timestamp = differenceUsingTime(current, relative, { includeTime: true });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalSeconds = trunc(timestamp / 1000);

  return totalSeconds;
}

module.exports = differenceInSeconds;
