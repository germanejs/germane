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
 * @param {Date|Number} dateOne Date object or timestamp
 * @param {Date|Number} dateTwo Date object or timestamp
 * @name isLastWeek
 * @returns {Boolean} True or false if  specified date is in the last week
 */
function isLastWeek(dateOne, dateTwo) {
  if (!isDateOrNumber(dateOne) || !isDateOrNumber(dateTwo)) return new TypeError("Invalid Date");

  if (!validateDate(dateOne) || !validateDate(dateTwo)) return new RangeError("Invalid Date");

  const dOne = new Date(dateOne);
  const dTwo = new Date(dateTwo);

  // minus 7 days from dateOne to get exact day of week from the previous week
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
