/**
 * @author Simeon Akpanudo
 * @fileoverview Function creates a duration from a time string.
 */

"use strict";

const add = require("../../../add");
/**
 * Creates a duration from a given time string
 * @param {String} string - time string ("23:01:11.099")
 * @returns {Number}
 */

function durationFromTimeString(string) {
  const timeSplit = string.split(".");

  const [H, M, S] = timeSplit[0].split(":").map(a => Number(a || 0));

  return add(0, {
    hours: H || 0,
    minutes: M || 0,
    seconds: S || 0,
    ms: timeSplit[1] ? Number(timeSplit[1]) : 0,
  }).valueOf();
}

module.exports = durationFromTimeString;
