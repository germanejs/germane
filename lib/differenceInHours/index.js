/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in hours.
 */

"use strict";

const { trunc } = require("../_util/evaluations/roundingMethods");
const differenceUsingTime = require("../_util/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} base first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in hours.
 */
function differenceInHours(base, relative) {
  const timestamp = differenceUsingTime(base, relative, { includeTime: true });
  if (timestamp instanceof TypeError) return new TypeError(timestamp.message);
  if (timestamp instanceof RangeError) return new RangeError(timestamp.message);
  const totalHours = trunc(((timestamp / (3600 * 1000)) * 24) / 24);

  return totalHours;
}

module.exports = differenceInHours;
