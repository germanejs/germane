/**
 * @author Simeon Akpanudo
 * @fileoverview Checks whether 2nd date  specified is of the last week of the first;
 */

"use strict";

const { endOfWeekHandler } = require("../utils/evaluations/endOfDateHandlers");
const { startOfWeekHandler } = require("../utils/evaluations/startOfDateHandlers");
const { isDateOrNumber } = require("../utils/validations/validatePropTypes");
const inRangeOf = require("../utils/validations/inRangeOf");
const validateDate = require("../utils/validations/validateDate");

/**
 *
 * @param {Date|Number} startDate Date object or timestamp
 * @param {Date|Number} endDate Date object or timestamp
 * @name isLastWeek
 * @returns {Boolean} True or false if  specified date is in the last week
 */
function isLastWeek(startDate, endDate) {
  if (!isDateOrNumber(startDate) || !isDateOrNumber(endDate)) return new TypeError("Invalid Date");

  if (!validateDate(startDate) || !validateDate(endDate)) return new RangeError("Invalid Date");

  const dOne = new Date(startDate);
  const dTwo = new Date(endDate);

  // minus 7 days from startDate to get exact day of week from the previous week
  const minusSeven = 7 * 24 * 1000 * 3600;
  const lastWeek = new Date(dOne.getTime() - minusSeven);

  const x = new Date(
    `${lastWeek.getUTCFullYear()}-${lastWeek.getUTCMonth() + 1}-${lastWeek.getUTCDate()}`,
  );

  const eOfPreviousWeek = endOfWeekHandler(x).totalMilliseconds;
  const sOfPreviousWeek = startOfWeekHandler(x).totalMilliseconds;
  const range = inRangeOf(
    dTwo.getTime(),
    x.getTime() - sOfPreviousWeek,
    x.getTime() + eOfPreviousWeek,
  );
  return range;
}

module.exports = isLastWeek;
