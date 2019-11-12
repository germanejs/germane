/**
 * @author Simeon Akpanudo
 */

"use strict";

const inRangeOf = require("../../validations/inRangeOf");
const { getDaysInYear } = require("../daysInYear");

/**
 *
 * @param {Number} quarter Current quarter in a year
 * @param {Number} year Current year
 * @returns {Number} Day of year in which the quarter ends.
 */
function findQuarterEnd(quarter, year) {
  const quarterEnd = getDaysInYear(year)
    .slice(1, quarter * 3 + 1)
    .reduce((x, y) => {
      let a = y;
      a += x;
      return a;
    }, 0);
  return quarterEnd;
}

/**
 * @param {Number} dayInYear Current day in a full year cycle
 * @param {Number} year Year value, used to calculate quarter according to leap year.
 * @returns {Object} Returns an object containing the quarter and quarter end.
 */
function findQuarter(dayInYear, year) {
  if (inRangeOf(dayInYear, 0, findQuarterEnd(1, year))) {
    return { quarter: 1, quarterEnd: findQuarterEnd(1, year) };
  }
  if (inRangeOf(dayInYear, 0, findQuarterEnd(2, year))) {
    return { quarter: 2, quarterEnd: findQuarterEnd(2, year) };
  }
  if (inRangeOf(dayInYear, 0, findQuarterEnd(3))) {
    return { quarter: 3, quarterEnd: findQuarterEnd(3, year) };
  }
  if (inRangeOf(dayInYear, 0, findQuarterEnd(4, year))) {
    return { quarter: 4, quarterEnd: findQuarterEnd(4, year) };
  }
  return 1;
}

module.exports = {
  findQuarter,
  findQuarterEnd,
};
