/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in days.
 */

"use strict";

const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
const { absFloor } = require("../utils/roundingMethods");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @returns {Number | TypeError | RangeError} difference between dates in days.
 */
function differenceInDays(dateOne, dateTwo) {
  const timestamp = differenceUsingTime(dateOne, dateTwo, { includeTime: false });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalDays = absFloor(timestamp / (24 * 1000 * 3600));

  return totalDays;
}

module.exports = differenceInDays;
