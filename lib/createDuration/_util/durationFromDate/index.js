/**
 * @author Simeon Akpanudo
 * @fileoverview Creates a duration given two dates.
 */

"use strict";

/**
 * Creates a duration given two dates.
 * @param {Date[]|Number[]} dates - Date array <containing 2 date values>
 *
 */
function durationFromDate(dates = [new Date(), new Date()]) {
  const [base, rel] = dates;
  const baseDate = typeof base === "number" ? base : base.valueOf();
  const relDate = typeof rel === "number" ? rel : rel.valueOf();
  return relDate - baseDate;
}

module.exports = durationFromDate;
