/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
const { trunc } = require("../utils/roundingMethods");
/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInDays(current, relative) {
  const timestamp = differenceUsingTime(current, relative, { includeTime: false });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalDays = trunc(timestamp / (24 * 1000 * 3600));

  return totalDays;
}

module.exports = differenceInDays;
