/**
 * @author Simeon Akpanudo
 * @fileoverview handles date parsing and formatting.
 */

"use strict";

const dayOfYear = require("../evaluations/dayOfYear");
const shortToLong = require("./shortToLong");
const ordinalParse = require("./ordinalParse");
const { findQuarter } = require("../evaluations/findQuarter");
const { floor, ceil } = require("../roundingMethods");
const isLeapYear = require("../validations/isLeapYear");

/**
 *
 * @param {Date} date Date object
 * @description these function parse a date and returns all date related values.
 */
function parseDate(date) {
  const newDate = date;
  const dateToString = newDate.toString();
  const all = dateToString.split(" ");
  const l = all.slice(0, 4);
  const longMonth = shortToLong(l[1], l[0]);
  const year = newDate.getFullYear();
  const ordinal = dayOfYear(year, newDate.getMonth() + 1, newDate.getDate());

  const month = newDate.getMonth() + 1;
  const quarter = findQuarter(ordinal, year).quarter;
  const dayOfMonth = newDate.getDate();

  const y = floor(year % 100) % 28;
  const C = floor(year / 100) % 4;
  const cor = (y + floor((y - 1) / 4) + 5 * C - 1) % 7;
  const correction = cor > 3 ? cor - 7 : cor;
  const week = ceil((ordinal + correction) / 7);
  // eslint-disable-next-line no-nested-ternary
  const weekOfYear = week === 0 ? (isLeapYear(year) ? 53 : 52) : week;

  const formattedDate = {
    dayOfWeek: {
      long: longMonth.day.long,
      short: longMonth.day.short,
      ordinal: ordinalParse(newDate.getDay()),
      two: longMonth.day.short.substring(0, 2),
      decimal: {
        nonZeroPadded: "" + newDate.getDay(),
        zeroPadded: newDate
          .getDay()
          .toString()
          .padStart(2, "0"),
      },
    },
    month: {
      long: longMonth.month.long,
      short: longMonth.month.short,
      ordinal: ordinalParse(month),
      decimal: {
        nonZeroPadded: "" + month,
        zeroPadded: ("" + month).padStart(2, "0"),
      },
    },
    year: {
      withCentury: l[3],
      withoutCentury: year > 1000 ? ("" + year).slice(2, 4) : year,
    },
    apprDate: `${newDate.getMonth() + 1}/${newDate.getDate()}/${year}`,
    dayOfYear: {
      ordinal: ordinalParse(parseInt(ordinal, 10)),
      decimal: {
        zeroPadded: ("" + ordinal).padStart(3, "0"),
        nonZeroPadded: "" + ordinal,
      },
    },
    dayOfMonth: {
      ordinal: ordinalParse(dayOfMonth),
      decimal: {
        zeroPadded: ("" + dayOfMonth).padStart(2, "0"),
        nonZeroPadded: "" + dayOfMonth,
      },
    },
    quarter: {
      ordinal: ordinalParse(quarter),
      decimal: {
        zeroPadded: ("" + quarter).padStart(2, "0"),
      },
    },
    week: {
      ordinal: ordinalParse(weekOfYear),
      decimal: {
        zeroPadded: weekOfYear < 10 ? "" + weekOfYear : String(weekOfYear).padStart(2, "0"),
        nonZeroPadded: String(weekOfYear),
      },
    },
  };

  return formattedDate;
}

module.exports = parseDate;
