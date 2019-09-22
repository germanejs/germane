/**
 * @author Simeon Akpanudo
 */

"use strict";

const { divmod } = require("../roundingMethods");

/**
 *
 * @param {Number} n Ordinal date.
 * @returns {Number} Year
 */
function ordinalToYear(n) {
  // 719163 equals the total number of days in 1970 years 1month and 1day.
  // 719163 is the ordinal of 1970 from 1st January of year 1.
  // 1970 being the unix epoch.
  let xn = 719163 + n - 1;
  let year;
  let n400;
  let n100;
  let n4;
  let n1;

  // for better explanations see docs [leap-year-rule.md].
  // The cycle of leap year repeats every 400 years;

  // in every 4 years there is an extra leap day
  let fourYCycle = 4 * 365 + 1;
  // every 100 years has one fewer leap day
  let oneHYCycle = 25 * fourYCycle - 1;
  // 4 * (25 * (4 * 365 + 1) - 1) + 1 => in every 400 years there is an extra leap day.
  let fourHYCycle = 4 * oneHYCycle + 1;
  [n400, xn] = divmod(xn, fourHYCycle);
  year = n400 * 400 + 1;

  [n100, xn] = divmod(xn, oneHYCycle);

  [n4, xn] = divmod(xn, fourYCycle);

  // common year cycles
  [n1, xn] = divmod(xn, 365);

  year += n100 * 100 + n4 * 4 + n1;
  if (n1 === 4 || n100 === 4) {
    return year - 1;
  }

  return year;
}

module.exports = ordinalToYear;
