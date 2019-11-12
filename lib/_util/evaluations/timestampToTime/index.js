/**
 * @author Simeon Akpanudo
 * @fileoverview File contains function that evaluates a timestamp,
 * simplifying it to human consumable date types.
 */

"use strict";

const { absFloor } = require("../roundingMethods");
/**
 * @param {Number} timestamp Timestamp
 * @name evalTimestamp
 */
function evalTimestamp(timestamp, roundingMethod = absFloor) {
  const totalDays = roundingMethod(timestamp / 86400000);
  const hour = roundingMethod((timestamp / (3600 * 1000)) % 24);
  const minute = roundingMethod((timestamp / (1000 * 60)) % 60);
  const second = roundingMethod((timestamp / 1000) % 60);

  const totalHour = roundingMethod(timestamp / (3600 * 1000));
  const totalMinute = roundingMethod(timestamp / 1000 / 60);
  const totalSecond = roundingMethod(timestamp / 1000);
  const totalWeek = roundingMethod(totalDays / 7);
  const millisecond = roundingMethod(timestamp % 1000);

  const timeReturns = {
    hour,
    minute,
    second,
    totalWeek,
    totalHour,
    totalMinute,
    totalSecond,
    totalMillisecond: timestamp,
    millisecond,
  };

  return timeReturns;
}
module.exports = evalTimestamp;
