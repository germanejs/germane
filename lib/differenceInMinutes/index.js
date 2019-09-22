/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in minutes.
 */

"use strict";

const { trunc } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} startDate first date
 * @param {Date | number} endDate second dates
 * @returns {Number | TypeError | RangeError} difference between dates minutes.
 */
function differenceInMinutes(startDate, endDate) {
  const timestamp = differenceUsingTime(startDate, endDate, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalMinutes = trunc(timestamp / 1000 / 60);

  return totalMinutes;
}

module.exports = differenceInMinutes;
