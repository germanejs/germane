/**
 * @author Simeon Akpanudo
 * @fileoverview Returns boolean values checking whether dates are same or not (not including time)
 */

"use strict";

const replaceUnits = require("./replaceUnit");
const germane = require("../../germane");

/**
 *
 * @param {Date} current First date
 * @param {Date} relative Second date
 * @returns {Boolean} true if dates are same and false if date are not equal.
 */
function isSameDate(current, relative) {
  // forces date to use UTC time.
  const one = germane(current, "UTC");
  const two = germane(relative, "UTC");
  const d1 = new Date(
    replaceUnits(one, {
      year: one.getUTCFullYear(),
      month: one.getUTCMonth() + 1,
      day: one.getUTCDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime();

  const d2 = new Date(
    replaceUnits(two, {
      year: two.getUTCFullYear(),
      month: two.getUTCMonth() + 1,
      day: two.getUTCDate(),
      hour: 0,
      minute: 0,
      second: 0,
      ms: 0,
    }),
  ).getTime();
  return d1 === d2;
}

module.exports = isSameDate;
