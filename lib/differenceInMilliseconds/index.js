/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in milliseconds.
 */

"use strict";

const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates milliseconds.
 */
function differenceInMilliseconds(current, relative) {
  const timestamp = differenceUsingTime(current, relative, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  return timestamp;
}

module.exports = differenceInMilliseconds;
