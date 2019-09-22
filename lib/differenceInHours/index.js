/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in hours.
 */

"use strict";

const { absFloor } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @returns {Number | TypeError | RangeError} difference between dates in hours.
 */
function differenceInHours(dateOne, dateTwo) {
  const timestamp = differenceUsingTime(dateOne, dateTwo, { includeTime: true });
  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalHours = absFloor(((timestamp / (3600 * 1000)) * 24) / 24);

  return totalHours;
}

module.exports = differenceInHours;
