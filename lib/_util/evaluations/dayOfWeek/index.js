/**
 * @author Simeon Akpanudo
 * @fileoverview Computes the day of week for a given date.
 */

"use strict";

/**
 *
 * @param {Number} year
 * @param {Number} month
 * @param {Number} date
 */
function dayOfWeek(year, month, date) {
  /**
   * For explanations see [docs/day-of-week-calcuations.md]
   */
  const shiftedMonth = [null, 13, 14, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const correctedYear = month === 1 || month === 2 ? year - 1 : year;
  const h = (date
      + Math.floor((13 * (shiftedMonth[month] + 1)) / 5)
      + correctedYear
      + Math.floor(correctedYear / 4)
      - Math.floor(correctedYear / 100)
      + Math.floor(correctedYear / 400))
    % 7;
  const weekday = ((h + 5) % 7) + 1;
  return weekday;
}
module.exports = dayOfWeek;
