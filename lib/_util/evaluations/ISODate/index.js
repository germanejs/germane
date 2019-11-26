/**
 * @author Simeon Akpanudo
 * @fileoverview Handles the parsing and evaluation of ISO dates.
 */

"use strict";

const ordinalOfPrevYear = require("../ordinalOfPrevYear");
const epoch = require("../epoch");
const isLeapYear = require("../../validations/isLeapYear");
const dayOfWeek = require("../dayOfWeek");
const range = require("../range");

/**
 * @param {String} value ISO ordinal date format '2019-234'
 */
function ordinalDate(value) {
  const [year, ordinal] = value.match(/\d{4}|\d{2,3}/g).map(Number);
  if (ordinal < 1 || ((isLeapYear(year) && ordinal > 366) || (!isLeapYear(year) && ordinal > 365))) return new RangeError("Invalid Date");
  const ord = ordinalOfPrevYear(year);
  // 719163 = ordinal of 1970 01 01. ranging from year 0001 01 01.
  const date = ord - 719163 + ordinal;
  return date * 86400000;
}

/**
 *
 * @param {String} value RFC 5322 or 2822 string 'Fri, 21 Nov 1997 09:55:06 -0600'
 */
function rfcDate(value) {
  // prettier-ignore
  const MONTHS = [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /**
   * @type {array[any]}
   */
  const [date, month, year, time, tz] = value
    .match(
      /(?<=\w{3}(?:,{1}|,{0})\s)(?:\d{1,2}\s)|(?:\w{3}\s)|(?:\d{4}\s)|(?:\d{2}:\d{2}:\d{2}(?:\s|$))|(?:[+|-]\d{4}$)|(?:[+|-]\d{2}:\d{2}$)/g,
    )
    .map(a => {
      const x = a.split(" ")[0];
      if (isNaN(Number(x)) || x.length === 5) return x;
      return Number(x);
    });

  const [hour, min, sec] = time.split(":").map(Number);
  const [sg, tzH, tzM] = (tz || "+0000")
    .match(/\d{2}|[+|-]/g)
    .map(a => (isNaN(Number(a)) ? a : Number(a)));

  const monthOrd = MONTHS.findIndex(x => x === month);
  const tzMinutes = sg === "+" ? -(tzH * 60 + tzM) : tzH * 60 + tzM;

  return epoch(year, monthOrd, date, hour, min, sec, 0, tzMinutes);
}

/**
 *
 * @param {String} value ASP.net JSON date format '/Date(1567920010000)/'
 */
function ASPDate(value) {
  return Number(value.match(/[-]{0,1}\d{1,}/)[0]);
}

/**
 *
 * @param {String} value Compact format of ISO date '19701231T231109Z' or '19700101'
 */
function ISOBasicFormat(value) {
  const [date, time] = value.split("T");

  const [year, month, day] = date
    .match(/\d{4}(?=\d{4})|(?<=\d{4})\d{2}|(?<=\d{4}\d{2})\d{2}$/g)
    .map(Number);
  const [hour, min, sec] = (time || "00:00:00").match(/\d{2}/g).map(Number);

  if (
    month > 12
    || month < 1
    || (day > 31 || day < 1)
    || (hour > 23 || hour < 0)
    || (min > 59 || min < 0)
    || (sec > 59 || sec < 0)
    || (year > 9999 || year < 0)
  ) {
    return new RangeError("Invalid Date");
  }
  return epoch(year, month, day, hour, min, sec);
}
/**
 *
 * @param {Number} year Year
 * @private
 * @summary Gets distance from 1st to the day in which the ISO year starts
 */
function ISOFirstWeek(year) {
  const d = dayOfWeek(year, 1, 1);
  // If weekday is Monday, Tuesday, Wednesday or Thursday it is in week 01 of the year,
  // The nearest monday will be used to find the first day of the ISO year.
  // If the week day is Friday, Saturday or Sunday,
  // then it is in week 52 or 53 of the preceding year.
  const nearestMonday = d > 4 ? 8 - d : 1 - d;
  return nearestMonday;
}
/**
 *
 * @param {Number} year Year
 * @private
 * @summary Gets distance from 31st December to the day in which the ISO year ends
 */
function ISOLastWeek(year) {
  const d = dayOfWeek(year, 12, 31);

  // eslint-disable-next-line no-nested-ternary
  const nearestSunday = isLeapYear(year)
    ? d > 2
      ? range(d, 7)
      : 0 - d
    : d > 3
      ? range(d, 7)
      : 0 - d;
  return nearestSunday;
}

/**
 *
 * @param {Number} year Year
 * @summary Returns the total ISO days in a given year.
 */
function getTotalISODays(year) {
  return isLeapYear(year)
    ? 366 - ISOFirstWeek(year) + ISOLastWeek(year)
    : 365 - ISOFirstWeek(year) + ISOLastWeek(year);
}

/**
 *
 * @param {String} value ISO Week format '1970-W11-7' or '1980W011'
 */
function ISOWeekNumberingYear(value) {
  const [year, week, weekDay] = value
    .match(/\d{4}|(?<=-{0,1}[W])\d{2}|(?<=W\d{2}-{0,1})\d{1}$/gi)
    .map(Number);

  const totalWeeks = getTotalISODays(year) / 7;
  if (week > totalWeeks) return new RangeError("Invalid Date");
  if (weekDay > 7 || weekDay < 1) return new RangeError("Invalid Date");

  const d = dayOfWeek(year, 1, 4) + 3;
  const x = week * 7 + weekDay - d;
  const ord = ordinalOfPrevYear(year);
  // 719163 is the ordinal date for 1970-01-01, starting from year 0001-01-01;
  const date = ord - 719163 + x;
  return date * 86400000;
}

/**
 *
 * @param {String} value ISO Week format '2019-W09' or '2019W09'
 */
function ISOWeekDate(value) {
  const [year, week] = value.match(/\d{4}|(?<=[-]{0,1}[W])\d{2}$/gi);
  return ISOWeekNumberingYear(`${year}-W${week}-1`);
}

/**
 * @param {String} value ISO expanded string
 * @summary 2019-08-11T23:11:09.999Z or 2019-09-09 23:11:11+0900,
 * [YYYY-MM or YYYY-MM-DD or YYYY-MM-DD hh:mm:ss]
 */
function ISOExpanded(value) {
  const [date, time] = value.split(/T|\s|$/);

  const [year, month, day] = date
    .match(/\d{4}|(?<=\d{4}-)\d{2}|(?<=\d{4}-\d{2}-)\d{2}/g)
    .map(a => (a === null || a === undefined ? 1 : Number(a)));
  const [tm, atom] = (time || "00:00:00").match(
    /\d{2}:\d{2}(?::\d{2}){0,1}|(?<=\d{2}:\d{2}:\d{2}\.)(?:\d{1,})|(?:[+|-]\d{4}|[+|-][0-9]{2}:[0-9]{2})/g,
  );

  const [hour, minute, second] = tm
    .match(/(?:\d{2})/g)
    .map(a => (a === null || a === undefined ? 0 : Number(a)));
  const [msOrtz] = (atom || "000").match(/(?:[+|-]\d{4}|[+|-][0-9]{2}:[0-9]{2})|(?:\d{1,})/);

  if (
    month > 12
    || month < 1
    || (day > 31 || day < 1)
    || (hour > 23 || hour < 0)
    || (minute > 59 || minute < 0)
    || (second > 59 || second < 0)
    || (year > 9999 || year < 0)
  ) {
    return new RangeError("Invalid Date");
  }
  let ms;
  let tz;

  if (!/(?:[+|-]\d{4}|[+|-][0-9]{2}:[0-9]{2})/.test(msOrtz)) {
    ms = Number(msOrtz.slice(0, 3).padEnd(3, "0"));

    tz = 0;
  } else {
    /**
     * @type {Array<any>}
     */
    const [sg, tzH, tzM] = msOrtz
      .match(/\d{2}|[+|-]/g)
      .map(a => ((isNaN(Number(a)) ? a : Number(a))));

    if (tzH < -99 || tzH > 99) return new RangeError("Invalid Date");
    if (tzM < 0 || tzM > 59) return new RangeError("Invalid Date");
    ms = 0;

    tz = sg === "+" ? -(tzH * 60 + tzM) : tzH * 60 + tzM;
  }

  return epoch(year, month, day || 1, hour || 0, minute || 0, second || 0, ms, tz);
}

module.exports = {
  ordinalDate,
  ASPDate,
  ISOBasicFormat,
  ISOExpanded,
  ISOWeekNumberingYear,
  ISOLastWeek,
  ISOFirstWeek,
  ISOWeekDate,
  rfcDate,
  getTotalISODays,
};
