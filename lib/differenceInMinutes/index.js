/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in minutes.
 */

"use strict";

const { trunc } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} current first date
 * @param {Date | number} relative second dates
 * @returns {Number | TypeError | RangeError} difference between dates minutes.
 */
function differenceInMinutes(current, relative) {
  const timestamp = differenceUsingTime(current, relative, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalMinutes = trunc(timestamp / 1000 / 60);

  return totalMinutes;
}

module.exports = differenceInMinutes;
