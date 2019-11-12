/**
 * @author Simeon Akpanudo
 * @fileoverview computes the ordinal of the last day of a year
 */

"use strict";

const { floordiv } = require("../roundingMethods");

function ordinalOfPrevYear(year) {
  const y = year - 1;
  return y * 365 + floordiv(y, 4) - floordiv(y, 100) + floordiv(y, 400);
}

module.exports = ordinalOfPrevYear;
