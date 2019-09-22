/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
const { trunc } = require("../utils/roundingMethods");
/**
 *
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInDays(startDate, endDate) {
  const timestamp = differenceUsingTime(startDate, endDate, { includeTime: false });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalDays = trunc(timestamp / (24 * 1000 * 3600));

  return totalDays;
}

module.exports = differenceInDays;
