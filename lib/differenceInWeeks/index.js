/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in weeks.
 */

"use strict";

const { trunc } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second date
 * @returns {Number | TypeError | RangeError} difference between dates in weeks.
 */
function differenceInWeeks(startDate, endDate) {
  const timestamp = differenceUsingTime(startDate, endDate, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalWeeks = trunc(timestamp / (24 * 1000 * 3600) / 7);

  return totalWeeks;
}

module.exports = differenceInWeeks;
