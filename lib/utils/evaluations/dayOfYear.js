/**
 * @author Simeon Akpanudo
 */

"use strict";

const { daysInPrevMonths } = require("./getFullYear");
/**
 *
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 */
function dayOfYear(
  year = new Date("1970-01-01").getUTCFullYear(),
  month = new Date("1970-01-01").getUTCMonth() + 1,
  day = new Date("1970-01-01").getUTCDate(),
) {
  const all = daysInPrevMonths(year, month);
  return all + day;
}
module.exports = dayOfYear;
