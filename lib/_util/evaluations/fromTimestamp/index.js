/**
 * @author Simeon Akpanudo
 * @fileoverview Converts a unix timestamp to respective date units
 */

"use strict";

const getMonthOrdinal = require("./../monthFromOrdinal");
const { ceil, floor, trunc } = require("../roundingMethods");
const epoch = require("./../epoch");
const ordinalToYear = require("../ordinalToYear");
const dayOfWeek = require("./../dayOfWeek");
const isLeapYear = require("../../validations/isLeapYear");
const { getTotalISODays } = require("./../iSODate");

/**
 *
 * @param {Number} timestamp Unix timestamp.
 */
function fromTimestamp(timestamp) {
  const frmTm = timestamp / 86400000;

  // to understanding how 365.24 came to be please see the docs #leap-year-rule
  const year = ordinalToYear(frmTm);
  const remain = timestamp - epoch(year, 1, 1);

  // Added one because a day is not complete until its has (86400) seconds
  // getting the ordinal does not put the time into consideration
  // these comment might not be valid in the future. please read the code.
  // especially the epoch function.
  const ordinal = trunc(remain / 1000 / 86400) + 1;
  const y = Math.floor(year % 100) % 28;
  const C = Math.floor(year / 100) % 4;
  const c = (y + Math.floor((y - 1) / 4) + 5 * C - 1) % 7;
  const correction = c > 3 ? c - 7 : c;
  const week = ceil(ordinal / 7);
  const isoPrevTotal = getTotalISODays(year - 1) / 7;
  const isoTotal = getTotalISODays(year) / 7;
  const isoWeek = Math.ceil(ceil((ordinal + correction) / 7));
  // eslint-disable-next-line no-nested-ternary
  const weekOfYear = week === 0 ? (isLeapYear(year) ? 53 : 52) : week;
  const hour = floor(remain / (1000 * 3600)) % 24;
  const minute = floor(((remain / 1000) % 3600) / 60);
  const second = floor(((remain / 1000) % 3600) % 60);
  const ms = remain % 1000;
  const getMonthOd = getMonthOrdinal(ordinal, year);
  const dayOfMonth = ordinal - getMonthOd.startingOrdinal + 1;
  const month = getMonthOd.monthOrdinal;
  const dOfW = dayOfWeek(year, month + 1, dayOfMonth);

  return {
    year,
    month,
    day: dayOfMonth,
    hour,
    minute,
    second,
    ms,
    dayOfWeek: dOfW,
    week: weekOfYear,
    ordinal,
    // eslint-disable-next-line no-nested-ternary
    isoWeek: isoWeek === 0 ? isoPrevTotal : isoWeek > isoTotal ? isoTotal : isoWeek,
  };
}

module.exports = fromTimestamp;
