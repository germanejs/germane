/**
 * @author Simeon Akpanudo
 * @fileoverview Checks whether 2nd date  specified is of the last week of the first;
 */

"use strict";

const { endOfWeekHandler } = require("../_util/evaluations/endOf");
const { startOfWeekHandler } = require("../_util/evaluations/startOf");
const { isDateOrNumber } = require("../_util/validations/validatePropTypes");
const inRangeOf = require("../_util/validations/inRangeOf");
const validateDate = require("../_util/validations/validateDate");

/**
 *
 * @param {Date|Number} current Date object or timestamp
 * @param {Date|Number} relative Date object or timestamp
 * @name isLastWeek
 * @returns {Boolean} True or false if  specified date is in the last week
 */
function isLastWeek(current, relative) {
  if (!isDateOrNumber(current) || !isDateOrNumber(relative)) return new TypeError("Invalid Date");

  if (!validateDate(current) || !validateDate(relative)) return new RangeError("Invalid Date");

  const currentDate = typeof current === "number" ? new Date(current) : current;
  const relativeDate = typeof relative === "number" ? new Date(relative) : relative;

  // minus 7 days from current to get exact day of week from the previous week
  const minusSeven = 7 * 24 * 1000 * 3600;
  const lastWeek = new Date(currentDate.getTime() - minusSeven);

  const x = new Date(
    `${lastWeek.getUTCFullYear()}-${lastWeek.getUTCMonth() + 1}-${lastWeek.getUTCDate()}`,
  );

  const eOfPreviousWeek = endOfWeekHandler(x);
  const sOfPreviousWeek = startOfWeekHandler(x);
  const endOf = eOfPreviousWeek.getTime() - eOfPreviousWeek.getTimezoneOffset() * 60 * 1000;
  const startOf = sOfPreviousWeek.getTime() - sOfPreviousWeek.getTimezoneOffset() * 60 * 1000;

  const range = inRangeOf(relativeDate.getTime(), startOf, endOf);
  return range;
}

module.exports = isLastWeek;
