/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in seconds.
 */

"use strict";

const { absFloor } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");

/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @returns {Number | TypeError | RangeError} difference between dates in seconds.
 */
function differenceInSeconds(dateOne, dateTwo) {
  const timestamp = differenceUsingTime(dateOne, dateTwo, { includeTime: true });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalSeconds = absFloor(timestamp / 1000);

  return totalSeconds;
}

module.exports = differenceInSeconds;
