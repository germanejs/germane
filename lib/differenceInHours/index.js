/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in hours.
 */

"use strict";

const { trunc } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second date
 * @returns {Number | TypeError | RangeError} difference between dates in hours.
 */
function differenceInHours(startDate, endDate) {
  const timestamp = differenceUsingTime(startDate, endDate, { includeTime: true });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalHours = trunc(((timestamp / (3600 * 1000)) * 24) / 24);

  return totalHours;
}

module.exports = differenceInHours;
