/**
 * @author Simeon Akpanudo
 * @fileoverview Function creates a duration given an integer and a time unit.
 */

"use strict";

const add = require("../../../add");

/**
 * @param {Number} duration
 * @param {String} unit
 * @returns {Number}
 */
function durationFromInt(duration, unit) {
  const mapUnit = {
    years: x => add(0, { years: x }).valueOf(),
    months: x => add(0, { months: x }).valueOf(),
    days: x => add(0, { days: x }).valueOf(),
    weeks: x => x * 7 * 86400000,
    hours: x => add(0, { hours: x }).valueOf(),
    minutes: x => add(0, { minutes: x }).valueOf(),
    seconds: x => add(0, { seconds: x }).valueOf(),
    milliseconds: x => x,
  };
  const getMappedUnit = mapUnit[unit];
  return getMappedUnit !== undefined ? getMappedUnit(duration) : mapUnit.milliseconds(duration);
}
module.exports = durationFromInt;
