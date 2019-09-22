/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in milliseconds.
 */

"use strict";

const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second date
 * @returns {Number | TypeError | RangeError} difference between dates milliseconds.
 */
function differenceInMilliseconds(startDate, endDate) {
  const timestamp = differenceUsingTime(startDate, endDate, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  return timestamp;
}

module.exports = differenceInMilliseconds;
