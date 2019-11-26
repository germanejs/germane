/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in milliseconds.
 */

"use strict";

const differenceUsingTime = require("../_util/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates milliseconds.
 */
function differenceInMilliseconds(base, relative) {
  /**
   * @type {*}
   */
  const timestamp = differenceUsingTime(base, relative, { includeTime: true });

  if (timestamp instanceof TypeError) return new TypeError(timestamp.message);
  if (timestamp instanceof RangeError) return new RangeError(timestamp.message);
  return timestamp;
}

module.exports = differenceInMilliseconds;
