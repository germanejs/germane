/**
 * @author Simeon Akpanudo [@cmion] {@link https://github.com/cmion}
 * @fileoverview returns the ordinal of a given weekday in a month
 */

"use strict";

/**
 *
 * @param {Date} date
 */
function dayOfWeekInMonth(date) {
  const firstDayOfWeek = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-01 23:59`).getDay();
  const dayOfWeek = date.getDay();
  const closestDay = dayOfWeek - firstDayOfWeek + 1;
  const correctClosestDay = closestDay < 0 ? closestDay + 7 : closestDay;
  const day = (date.getDate() - correctClosestDay) / 7 + 1;
  return day;
}

module.exports = dayOfWeekInMonth;
