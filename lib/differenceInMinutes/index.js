/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in minutes.
 */

"use strict";

const { absFloor } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second dates
 * @returns {Number | TypeError | RangeError} difference between dates minutes.
 */
function differenceInMinutes(dateOne, dateTwo) {
  const timestamp = differenceUsingTime(dateOne, dateTwo, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalMinutes = absFloor(timestamp / 1000 / 60);

  return totalMinutes;
}

module.exports = differenceInMinutes;
