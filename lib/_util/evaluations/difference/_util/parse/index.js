/* eslint-disable no-nested-ternary */
/**
 * @author Simeon Akpanudo
 * @fileoverview Module written to work with the difference function.
 * can be used with other function as needed
 * @description please use the docs at [docs/date_difference_evaluation.md].
 */

"use strict";

const { absFloor } = require("../../../roundingMethods");
const { getDaysInYear } = require("../../../daysInYear");
const inRangeOf = require("../../../../validations/inRangeOf");
const isLeapYear = require("../../../../validations/isLeapYear");

/**
 * @param {Number} fromYear Starting year.
 * @param {Number} toMonth Ending month
 * @param {Number} fromMonth Starting Month
 * @param {Number} toDate Ending date
 * @param {Number} fromDate Starting Date
 * @param {Number} totalDays Total Days.
 * @returns {Object}
 */

function fromNegativeYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate) {
  /* SC = special case.
   for more explanations, please see docs at [docs/date_difference_evaluation.md] */

  const mo = fromYear === toYear
    ? fromDate >= toDate
      ? fromMonth - toMonth
      : fromMonth - toMonth - 1
    : fromDate >= toDate
      ? 12 - toMonth + fromMonth
      : 12 - toMonth + fromMonth - 1;

  // prettier-ignore
  const da = fromDate >= toDate
    ? fromDate - toDate
    : toDate === getDaysInYear(toYear)[toMonth]
      ? fromDate
      : getDaysInYear(fromYear)[(fromMonth <= 1 ? 13 : fromMonth) - 1] - toDate + fromDate;

  const SC1 = fromMonth === 2
    && fromDate === (isLeapYear(fromYear) ? 29 : 28)
    && toMonth === 1
    && (isLeapYear(fromYear) ? inRangeOf(toDate, 30, 31) : inRangeOf(toDate, 29, 31));

  const SC2 = isLeapYear(toYear)
    && toMonth === 2
    && toDate === 29
    && (fromDate === 28 && !isLeapYear(fromYear) && fromMonth === 2);

  const SC3 = da === getDaysInYear(fromYear)[fromMonth]
    && getDaysInYear(toYear)[toMonth] === toDate
    && getDaysInYear(toYear)[toMonth] === 31;

  const days = SC3 ? da % getDaysInYear(fromYear)[fromMonth] : da;

  const months = SC3 || SC1 || SC2 ? mo + absFloor(da / getDaysInYear(fromYear)[fromMonth]) : mo;
  const y = fromYear - toYear;

  const years = fromMonth < toMonth || (toMonth === fromMonth && toDate > fromDate) ? y - 1 : y;
  return {
    year: years,
    month: absFloor(months % 12),
    week: SC1 || SC2 ? 0 : absFloor(days / 7),
    day: SC1 || SC2 ? 0 : absFloor(days % 7),
    totalMonth: absFloor(months % 12) + years * 12,
  };
}

/**
 * @param {Number} toYear Ending year
 * @param {Number} toMonth Ending month
 * @param {Number} fromMonth Starting Month
 * @param {Number} toDate Ending date
 * @param {Number} fromDate Starting Date
 * @param {Number} totalDays Total Days.
 * @returns {Object}
 */

function fromPositiveYear(toYear, fromYear, toMonth, fromMonth, toDate, fromDate) {
  /* SC = special case.
   for more explanations, please see docs at [docs/date_difference_evaluation.md] */
  const mo = fromYear === toYear
    ? toDate >= fromDate
      ? toMonth - fromMonth
      : toMonth - fromMonth - 1
    : toDate >= fromDate
      ? 12 - fromMonth + toMonth
      : 12 - fromMonth + toMonth - 1;

  // prettier-ignore
  const da = toDate >= fromDate
    ? toDate - fromDate
    : fromDate === getDaysInYear(fromYear)[fromMonth]
      ? toDate
      : getDaysInYear(toYear)[(toMonth <= 1 ? 13 : toMonth) - 1] - fromDate + toDate;

  const SC1 = toMonth === 2
    && toDate === (isLeapYear(toYear) ? 29 : 28)
    && fromMonth === 1
    && (isLeapYear(toYear) ? inRangeOf(fromDate, 30, 31) : inRangeOf(fromDate, 29, 31));

  const SC2 = isLeapYear(fromYear)
    && fromMonth === 2
    && fromDate === 29
    && (toDate === 28 && !isLeapYear(toYear) && toMonth === 2);

  const SC3 = da === getDaysInYear(toYear)[toMonth]
    && getDaysInYear(fromYear)[fromMonth] === fromDate
    && getDaysInYear(fromYear)[fromMonth] === 31;

  const days = SC3 ? da % getDaysInYear(toYear)[toMonth] : da;

  const months = SC3 || SC1 || SC2 ? mo + absFloor(da / getDaysInYear(toYear)[toMonth]) : mo;

  const y = toYear - fromYear;

  const years = toMonth < fromMonth || (toMonth === fromMonth && fromDate > toDate) ? y - 1 : y;
  return {
    year: years,
    month: absFloor(months % 12),
    week: SC1 || SC2 ? 0 : absFloor(days / 7),
    day: SC1 || SC2 ? 0 : absFloor(days % 7),
    totalMonth: absFloor(months % 12) + years * 12,
  };
}

module.exports = {
  fromNegativeYear,
  fromPositiveYear,
};
