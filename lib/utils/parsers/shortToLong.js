"use strict";

/**
 * @name shortToLong
 * @param {string}  month short month format
 * @param {string} day short day of the week
 * @returns {object} return long day of the week and long month
 */

function shortToLong(month = "Jan", day = "Mon") {
  const m = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  const d = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };
  return {
    month: {
      long: m[month],
      short: month,
    },
    day: {
      long: d[day],
      short: day,
    },
  };
}
module.exports = shortToLong;
