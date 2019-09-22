/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in milliseconds.
 */

"use strict";

const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @returns {Number | TypeError | RangeError} difference between dates milliseconds.
 */
function differenceInMilliseconds(dateOne, dateTwo) {
  const timestamp = differenceUsingTime(dateOne, dateTwo, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  return Math.abs(timestamp);
}

module.exports = differenceInMilliseconds;
