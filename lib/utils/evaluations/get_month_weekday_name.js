/**
 * @author Simeon Akpanudo
 */

"use strict";

/**
 *
 * @param {Number} m month ordinal in zero-based index
 * @param {*} w weekday ordinal in zero-based index
 */
function getMonthAndWkDName(m, w) {
  const MONTHNAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const DAYNAMES = [
    null,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return {
    monthNameShort: MONTHNAMES[m].substring(0, 3),
    monthName: MONTHNAMES[m],
    dayNameShort: DAYNAMES[w].substring(0, 3),
    dayName: DAYNAMES[w],
    dayNameMin: DAYNAMES[w].substring(0, 2),
  };
}

module.exports = getMonthAndWkDName;
