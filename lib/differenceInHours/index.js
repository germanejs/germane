/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in hours.
 */

"use strict";

const { trunc } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in hours.
 */
function differenceInHours(current, relative) {
  const timestamp = differenceUsingTime(current, relative, { includeTime: true });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalHours = trunc(((timestamp / (3600 * 1000)) * 24) / 24);

  return totalHours;
}

module.exports = differenceInHours;
