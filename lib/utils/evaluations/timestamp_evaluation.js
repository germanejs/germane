/**
 * @author Simeon Akpanudo
 * @fileoverview File contains function that evaluates a timestamp, simplifying it to human consumable date types.
 */

"use strict";

const { absFloor } = require("../roundingMethods");
/**
 * @param {Number} timestamp Timestamp
 * @name evalTimestamp
 */
function evalTimestamp(timestamp, roundingMethod = absFloor) {
  const totalDays = roundingMethod(timestamp / 86400000);
  const hours = roundingMethod((timestamp / (3600 * 1000)) % 24);
  const minutes = roundingMethod(((timestamp / 1000) % 3600) / 60);
  const seconds = roundingMethod(((timestamp / 1000) % 3600) % 60);

  const totalHours = roundingMethod(timestamp / (3600 * 1000));
  const totalMinutes = roundingMethod(timestamp / 1000 / 60);
  const totalSeconds = roundingMethod(timestamp / 1000);
  const totalWeeks = roundingMethod(totalDays / 7);

  const timeReturns = {
    hours,
    minutes,
    seconds,
    totalWeeks,
    totalHours,
    totalMinutes,
    totalSeconds,
    totalMilliseconds: timestamp,
  };

  return timeReturns;
}
module.exports = evalTimestamp;
