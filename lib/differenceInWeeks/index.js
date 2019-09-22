/**
 * @author Simeon Akpanudo
 * @fileoverview Handles or returns the difference between given dates in weeks.
 */

"use strict";

const { absFloor } = require("../utils/roundingMethods");
const differenceUsingTime = require("../utils/evaluations/differenceUsingTime");
/**
 *
 * @param {Date | Number} dateOne first date
 * @param {Date | number} dateTwo second date
 * @returns {Number | TypeError | RangeError} difference between dates in weeks.
 */
function differenceInWeeks(dateOne, dateTwo) {
  const timestamp = differenceUsingTime(dateOne, dateTwo, { includeTime: true });

  if (timestamp instanceof RangeError || timestamp instanceof TypeError) return timestamp;

  const totalWeeks = absFloor(timestamp / (24 * 1000 * 3600) / 7);

  return totalWeeks;
}

module.exports = differenceInWeeks;
